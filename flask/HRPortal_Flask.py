from flask import Flask, request, jsonify
import psycopg2 as pg
from psycopg2 import Error
import json

from Credentials import *

app = Flask(__name__)

def connectPG():
    return pg.connect(user = PGusername,
                    password = PGpassword,
                    host = PGendpoint,
                    port = "5432",
                    database = "HRPortal")


@app.route('/login', methods = ["POST"])
def main():
    connection = connectPG()
    cursor = connection.cursor()

    username = request.json['username']
    password = request.json['password']

    query = (f"SELECT int_login.employee_id, employee.firstname FROM int_login \
            JOIN employee ON int_login.employee_id = employee.employee_id \
            WHERE username = '{username}' AND password = '{password}'") #.format(username, password)

    cursor.execute(query)
    records = cursor.fetchall()
    colnames = [desc[0] for desc in cursor.description]

    if(connection):
        cursor.close()
        connection.close()

    try:
        return jsonify(dict(zip(colnames, records[0])))
    except:
        return jsonify(0)



@app.route('/newhiretable', methods = ["GET"])
def newhiretable():
    connection = connectPG()
    cursor = connection.cursor()

    query = "SELECT employee_id, firstname, lastname, startdate, los_title, recruiter, persemail from employee"

    cursor.execute(query)
    records = cursor.fetchall()
    colnames = [desc[0] for desc in cursor.description]
    
    results = []
    for row in records:
        results.append(dict(zip(colnames, row)))

    if(connection):
        cursor.close()
        connection.close()

    try:
        return jsonify(results)
    except:
        return jsonify(0)



@app.route('/adduser', methods = ["POST"])
def add_user():
    connection = connectPG()
    cursor = connection.cursor()

    firstname = str(request.json['firstname'])
    lastname = str(request.json['lastname'])
    start = str(request.json['startdate'])
    losTitle = str(request.json['los_title'])
    recruiter = str(request.json['recruiter'])
    pEmail = str(request.json['persemail'])


    query = f"INSERT INTO employee (firstname, lastname, startdate, los_title, recruiter, persemail) VALUES ('{firstname}', '{lastname}', '{start}', '{losTitle}', '{recruiter}', '{pEmail}');"

    cursor.execute(query)

    connection.commit()
    
    if(connection):
        cursor.close()
        connection.close()

    return jsonify("Record entered successfully")



@app.route('/update', methods = ['POST'])
def update():
    connection = connectPG()
    cursor = connection.cursor()

    empID = request.json['employee_id']
    startdate = request.json['startdate']

    query = ("UPDATE employee SET startdate = '{}' where employee_id = {}").format(startdate, empID)

    try:
        cursor.execute(query)
        connection.commit()
        return "Success!"
    except:
        return "Sorry, something went wrong."



if __name__ == "__main__":

    app.run(debug=True)
