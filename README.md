# Flight Booking Task

## To set up the poject do following things :-

    -clone project on your local.

    -execute `npm install` on the same path as the root directory of your downloaded project to install dependencies and       packages

    - create `.env` file in your root directory of the project and add following environment variables-
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
    - Once you have done all the above steps, run `npx sequelize db:create` in your shell to create the databse. 
      and then run `npx sequelize db:migrate` 
    - after doing all the above mentioned steps, execute `node src/index.js` or `npm start` if you have start key under scripts element in package.json file to spin up the project and server


#### Disclaimer :-

    - some of the minor features have not been implemented and some small bugs are there in the project
    - these small bugs will be removed in near future or could have been removed if more time was alloted
    - similarly some minor features could have also been added if more time was alloted
    - second backend task of 'Covid App' is very similar to this 'Flight Booking App' and can be made similarly the way this    project has been made
