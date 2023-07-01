# Flight Booking Web App

### This is a NodeJS based web application

To get started and run the app:

- Clone the project.
- Run `npm install` to install the corresponding node packages
create `.env` file in your root directory of the project and add following environment variables-
   - `PORT = 3000`
   - your `JWT Key`
- inside `src/config` folder, create a `config.json` file and add the following code in it-

```
{
  "development": {
    "username": "<YOUR_DB_NAME>",
    "password": "<YOUR_DB_PASS>",
    "database": "Flight_Search_DB",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
``` 
- Run `npm start` to run the app on [http://localhost:3000](http://localhost:3000)

#### Disclaimer

- some of the minor features have not been implemented and some small bugs are there in the project
- these small bugs will be removed in near future or could have been removed if more time was alloted
- similarly some minor features could have also been added if more time was alloted
- second backend task of 'Covid App' is very similar to this 'Flight Booking App' and can be made similarly the way this    project has been made
- Id and password for testing admin functionality is : email - `admin2@devrev.com` , password - `123456789`
