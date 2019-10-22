from flask import Flask, request, jsonify
import psycopg2 as pg
from psycopg2 import Error
import json
from flask_mail import Message, Mail


from Credentials import *

app = Flask(__name__)


app.config.update(
    DEBUG=True,
    MAIL_SERVER='smtp.gmail.com',
    MAIL_PORT=465,
    MAIL_USE_SSL=True,
    MAIL_USERNAME = MailUsername,
    MAIL_PASSWORD = MailPassword
    )


mail = Mail(app)


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
            WHERE username = '{username}' AND password = '{password}'") 

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

    query = "SELECT employee_id, firstname, lastname, startdate, los_title, recruiter, persemail FROM employee"

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



@app.route('/details/<id>', methods = ["GET"])
def details(id):
    connection = connectPG()
    cursor = connection.cursor()

    query = f"SELECT employee_id, firstname, lastname, startdate, los_title, recruiter, persemail, phone, birthdate FROM employee \
            WHERE employee_id = {id} "

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
    birth = str(request.json['birthdate'])
    losTitle = str(request.json['los_title'])
    recruiter = str(request.json['recruiter'])
    pEmail = str(request.json['persemail'])
    phone = str(request.json['phone'])
    employeeNum = str(request.json['employee_num'])


    query = f"INSERT INTO employee (firstname, lastname, startdate, birthdate, los_title, recruiter, persemail, phone, employee_num) VALUES \
            ('{firstname}', '{lastname}', '{start}', '{birth}', '{losTitle}', '{recruiter}', '{pEmail}', '{phone}', '{employeeNum}');"

    
    try:
        cursor.execute(query)
        connection.commit()
        return jsonify("Record entered successfully")
    except:
        return jsonify("Sorry, something went wrong.")

    if(connection):
        cursor.close()
        connection.close()


@app.route('/update', methods = ['POST'])
def update():
    connection = connectPG()
    cursor = connection.cursor()

    empID = (request.json['employee_id'])
    firstname = str(request.json['firstname'])
    lastname = str(request.json['lastname'])
    start = str(request.json['startdate'])
    birth = str(request.json['birthdate'])
    losTitle = str(request.json['los_title'])
    recruiter = str(request.json['recruiter'])
    pEmail = str(request.json['persemail'])
    phone = str(request.json['phone'])
    employeeNum = str(request.json['employee_num'])


    query = ("UPDATE employee SET firstname = '{}', lastname = '{}', startdate = '{}', birthdate = '{}', los_title = '{}', recruiter = '{}', persemail = '{}', \
            phone = '{}', employee_num = '{}' WHERE employee_id = {}").format(firstname, lastname, start, birth, losTitle, recruiter, pEmail, phone, employeeNum, empID)

    try:
        cursor.execute(query)
        connection.commit()
        return jsonify("Success!")
    except:
        return jsonify("Sorry, something went wrong.")


@app.route('/serial', methods = ['GET'])
def serial():
    connection = connectPG()
    cursor = connection.cursor()

    query = "SELECT nextval('serial');"

    cursor.execute(query)
    records = cursor.fetchall()

    try:
        return jsonify(records)
    except:
        return jsonify(0)



def DBS_recruiter (rec_name):

    if rec_name == "Melissa Walling":
        return ("Melissa.Walling@daugherty.com")
    elif rec_name == "Adam Riggs":
        return ("Adam.Riggs@daugherty.com")
    elif rec_name == "Bob Kueser":
        return ("Robert.Kueser@daugherty.com")
    elif rec_name == "Pete Stemler":
        return ("Pete.Stemler@daugherty.com")




@app.route("/mail", methods = ['GET'])
def mailer():

    firstname = (request.json['firstname'])
    recruiter = (request.json['recruiter'])
    recruiter_email = DBS_recruiter(recruiter)


    try:
        msg = Message("Hello", sender=MailUsername, recipients=["austen.manser@daugherty.com"])

        msg.html = f"<h5>{firstname},</h5> <p>We are so excited for you to be joining Team Daugherty! <br /><br /> To get all the official paperwork started, \
            please log into the Employee Portal at blahblahblah.com. You will then be prompted to enter your login and password. The login name will be your email and the \
            password will be your last name. <br /><br /> Please make sure you complete all the highlighted paperwork! <br /><br /> Thank you, </p> {recruiter} <br /> {recruiter_email}"


        mail.send(msg)

        return json.dumps({"Status Code":200})
    except:
        return("error") 


if __name__ == "__main__":

    app.run(debug=True)



