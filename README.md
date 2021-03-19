# BE-commerce

![image of app](image here)
![image of app](image here)

## Application Video Walkthrough

[Video Demo](video here)


## Table of Contents

* [Purpose](#Purpose)

* [Technologies](#Technologies)

* [Instructions](#Instructions)

* [Contact](#Contact)

* [License](#License)

## Purpose

A backend program that runs with `express.js`, allows the user to build their database of various items. User can control what is created, read, updated and deleted using sequelize and mysql2 to communicate with their respected database. A `dotenv` example file is provided for the user to enter in their own credentials to be allowed to run the backend application on their own computer. Users may modify the `dotenv` file. It is recommended that the user utilizes an outside client such as 'Postman' or 'Insomnia Core' to easily navigate through different request. 



## Technologies

* ***Nodejs***
* ***Sequelize*** 
* ***Express*** 
* ***JavaScipt***
* ***MySQL2***
* ***SQL***
* ***API***

## Instructions

1. Git clone the repository on your local machine, open up the file. Run `npm install` to install all dependencies that are required to run the application.
2. Modify the `.env` file to your personal credentials and delete the `.EXAMPLE` or simply create a new `.env` file following the structure in the example (recommended).
3. Create a data base (TablePlus is what was used to create and test this application) the corresponds with the database name in this file (ecommerce_db).
4. In your database run the code provided in the `db` folder in the sql query section of your database client. (TablePlus) 
5. Once the database is set, open the file in your comand line. Run `npm run seeds` to populate the database with starter seeds. 
6. For ease of keeping the server open and updating while you work within the database a simple command line input of `npm run watch`. 
7. Using clients such as: `Postman` or `Insomnia Core` make creating, reading, updating and deleting very user friendly for various requests (recommended).
8. Populate and enjoy.

## Contact

* [Email](mailto:josephjlyons90@gmail.com)
* [LinkedIn](www.linkedin.com/in/joseph-lyons-0a2630200/)

## License

Copyright (c) [2021] [Joseph Lyons]
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
