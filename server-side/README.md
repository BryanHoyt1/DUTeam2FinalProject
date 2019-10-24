## install dependencies
npm install

## start angular server
cd to portal-app folder

ng serve -o

or 

npm start

## start node api server in Bash
cd to server-side folder

nodemon (will restart the server automatically after saving)

or

node index

## start flask server in Bash

cd to containing folder (Desktop)

python HRPortal_Flask.py

## base Url for database routes

http://127.0.0.1:5000/[route]

## base url for nodeAPI

localhost:3000/[route]

## routes for nodeAPI

/home [HR router]
/extHome [external router (no access to getAll or post)]
/login 