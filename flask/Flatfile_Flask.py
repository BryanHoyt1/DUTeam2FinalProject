from flask import Flask, request, jsonify
import json


app = Flask(__name__)



employees = list()
with open ("Employee_table.txt", "r") as x:
    for l in x:
        (empID, fname, lname, recruiter, email, LOS, startD) = l.strip().split("|")
        employees.append({"employee_id": int(empID), "firstname": fname, "lastname": lname, "recruiter": recruiter, "persemail": email, "LOS_title": LOS, "startdate": startD})

new_dict = {}
for item in employees:
    name = item.pop('employee_id')
    new_dict[name] = item

routes = [{"Available Routes": ""},{"/newhiretable": "Complete list of new hires"}, {"/details/<id>": "Input an ID to get details on a specific new hire"}]

@app.route("/", methods=["GET"])
def landing():
    
    return jsonify(routes)
    



@app.route("/newhiretable", methods=["GET"])
def new_hire():
    
    try:
        return jsonify(employees)
    except:
        return jsonify(0)


@app.route("/details/<id>", methods=["GET"])
def details(id):
    
    try:
        return jsonify(new_dict[int(id)])
    except:
        return jsonify(0)

if __name__ == "__main__":

    app.run(debug=True)
