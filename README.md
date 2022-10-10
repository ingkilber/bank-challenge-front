
# Full Stack Web Bank

Challenge developer Full Stack , 
which simulates the financial software used in banking institutions

## Screenshots
Click on image to view fullscreen and zoom

### Desktop

<p align="center">
  <img src="./public/bank.png?raw=true" />
</p>

## Installation

- [Xampp](https://www.apachefriends.org/es/index.html)
- [VS-Code](https://code.visualstudio.com/)
- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/es/)
- [React.js](https://es.reactjs.org/)
- [Bootstrap.js](https://getbootstrap.com/)

## Core Structure

    code backend
      ├── package.json
      │
      ├── api (bank-challenge-backend)
      │   ├── app
      │   │   ├── config
      │   │   ├── controllers
      │   │   ├── models
      │   │   └── routes
      │   │
      │   └── node_modules
      ├── package-lock.json
      ├── package.json
      ├── README.md
      └── server.js

    code frontend
      ├── web (bank-challenge-front)
      │   ├── public
      │   ├── src
      │   │   ├── assets
      │   │   ├── component
      │   │   ├── pages
      │   │   └── routes
      │   ├── App.test.js
      │   ├── index.js
      │   ├── reportWebVitals.js
      │   └── setupTests.js
      │
      ├── .gitignore
      ├── package-lock.json
      ├── package.json
      └── README.md

## How to Install & run locally

#### Backend service

- Clone repo [bank-backend](https://github.com/ingkilber/bank-challenge-front\bank-challenge-backend)
- Open the cloned repo;

  *MSQL*
- Open XAMPP Control panal and start [apache] and [mysql] .
- open link localhost/phpmyadmin
- give a database name as (ncr-bank) hit on create button.
- after creating database name click on import.
- browse the file in directory C:\bank-challenge-backend\database\ncr-bank.sql
- after importing successfully.

  *API NODE.JS*
- abrir VS-Code and access the folder [bank-challenge-backend]
- `npm install` to install the dependecies;
- `node server.js` to start the server;

#### Frontend service
*Backend service must be already running locally*

- Clone repo [bank-frontend](https://github.com/ingkilber/bank-challenge-front)
- Open the cloned repo;
- `yarn install` or `npm install` to install the dependecies;
- `yarn start` or `npm start` to start the app;
