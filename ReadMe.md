
#### Api Server #####
Nodejs,mongodb

1) Go to api server folder 
2) run this Commant "npm install"
3) go to config/index.json and update below credentials

Wroking with online MongoDb online https://account.mongodb.com/account/login

"db":{
    "MONGO_USER": "XXXXXXXX",
    "MONGO_PASSWORD": "XXXXXXXX",
    "MONGO_DB": "XXXXXXXX"
},

4) otherwise you can go to /api/db/index.js and change this line no 5
let mongoUrl = <url mongodb url>

5) come to api root folder
6) run "npm start" command
7) Server is running at http://localhost:5000 url

Api Postman Link: https://www.getpostman.com/collections/46cc7b17a9c80e7944f4