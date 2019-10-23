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


@app.route('/extlogin', methods = ["POST"])
def extlogin():
    connection = connectPG()
    cursor = connection.cursor()

    username = request.json['personal_email']
    password = request.json['lastname']

    query = (f"SELECT employee_id, firstname, lastname FROM employee \
            WHERE personal_email = '{username}' AND lastname = '{password}';") 

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

    query = "SELECT employee_id, firstname, lastname, startdate, los_title, recruiter, personal_email FROM employee"

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



@app.route('/badgeinfo/<id>', methods = ["GET"])
def badge_info(id):
    connection = connectPG()
    cursor = connection.cursor()

    query = f"SELECT employee.employee_id, concat(firstname,' ',lastname) \"full_name\", veh_make, veh_model, veh_color, plate_num \
            FROM employee JOIN forms ON employee.employee_id = forms.employee_id JOIN access_card_form ON forms.access_form_id = access_card_form.access_form_id \
            WHERE employee.employee_id = {id};"

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

    query = f"SELECT employee_id, firstname, lastname, startdate, los_title, recruiter, personal_email, phone, birthdate, employee_num FROM employee \
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
    pEmail = str(request.json['personal_email'])
    phone = str(request.json['phone'])
    employeeNum = str(request.json['employee_num'])


    query = f"INSERT INTO employee (firstname, lastname, startdate, birthdate, los_title, recruiter, personal_email, phone, employee_num) VALUES \
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


@app.route('/accessbadge', methods = ["POST"])
def access_badge():
    connection = connectPG()
    cursor = connection.cursor()


    empID = str(request.json['employee_id'])
    plate = str(request.json['plate_num'])
    vehMake = str(request.json['veh_make'])
    vehModel = str(request.json['veh_model'])
    vehColor = str(request.json['veh_color'])
    

    query1 = f"INSERT INTO access_card_form (plate_num, veh_make, veh_model, veh_color) VALUES \
            ('{plate}', '{vehMake}', '{vehModel}', '{vehColor}');"

    query2 = f"INSERT INTO forms (employee_id, access_form_id) VALUES \
            ('{empID}', nextval('access_serial'));"
    
    try:
        cursor.execute(query1)
        cursor.execute(query2)
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
    pEmail = str(request.json['personal_email'])
    phone = str(request.json['phone'])
    employeeNum = str(request.json['employee_num'])


    query = ("UPDATE employee SET firstname = '{}', lastname = '{}', startdate = '{}', birthdate = '{}', los_title = '{}', recruiter = '{}', personal_email = '{}', \
            phone = '{}', employee_num = '{}' WHERE employee_id = {}").format(firstname, lastname, start, birth, losTitle, recruiter, pEmail, phone, employeeNum, empID)

    try:
        cursor.execute(query)
        connection.commit()
        return jsonify("Success!")
    except:
        return jsonify("Sorry, something went wrong.")



def DBS_recruiter (rec_name):
    addr = "Three CityPlace, Ste. 400 | St. Louis, MO 63141"
    extra = "800.737.8200 | www.daugherty.com"
    
    if rec_name == "Melissa Walling":
        return (f"Principal Recruiter of Everything Awesome <br />Office: 314.432.8200 x4178 | Cell: 636.439.0231<br />Melissa.Walling@daugherty.com<br />{addr}<br />{extra}")
    elif rec_name == "Adam Riggs":
        return (f"Senior Recruiter <br />Office: 314.529.4155 | Cell: 636.387.3136<br />Adam.Riggs@daugherty.com<br />{addr}<br />{extra}")
    elif rec_name == "Bob Kueser":
        return (f"Senior Recruiter <br />Office: 314.529.4150 | Cell: 314.630.9145<br />Robert.Kueser@daugherty.com<br />{addr}<br />{extra}")
    elif rec_name == "Pete Stemler":
        return (f"Senior Recruiter <br />Office: 314.529.4165 | Cell: 314.504.2575<br />Pete.Stemler@daugherty.com<br />{addr}<br />{extra}")
    elif rec_name == "Derrick Stewart":
        return (f"Recruiter <br />Office: 314.529.4156 | Cell: 573.883.6195<br />derrick.stewart@daugherty.com<br />{addr}<br />{extra}")




@app.route("/mail", methods = ['GET'])
def mailer():

    firstname = (request.json['firstname'])
    recruiter = (request.json['recruiter'])
    email = (request.json['personal_email'])
    recruiter_info = DBS_recruiter(recruiter)


    try:
        msg = Message("Hello", sender=MailUsername, recipients=[email])

        msg.html = f"<h5>{firstname},</h5> <p>Congratulations on the offer to join Daugherty Business Solutions! \
            We are very pleased to have you be a part of our family here. Everyone is excited for your start date and to \
            have you join the Daugherty team.  We know you are going to be a fantastic addition to the team and look forward \
            to the exciting growth in your career!!<br /><br /> To get all the official paperwork started, \
            please <a href='http://www.google.com'>Click here to login to the Employee Portal</a> You will be prompted \
            to enter your login and password. Your login name will be your email and your password will be your last name. <br /><br /> Please \
            make sure you complete all the highlighted paperwork! These documents should all be fairly straightforward and easy to \
            work through on your end. <br /><br />Feel free to call me if you have any additional questions or concerns.<br /><br /> Thank you,  \
            </p> {recruiter} <br /> {recruiter_info} "

        mail.send(msg)

        return json.dumps({"Status Code":200})
    except:
        return("error") 


if __name__ == "__main__":

    app.run(debug=True)



