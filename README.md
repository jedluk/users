# Users

Simple app build with React, React-Router, Redux and Bootstrap. It uses fake API https://jsonplaceholder.typicode.com/users for serving data. All CRUD operation are handled. 

## Installation
- clone repository ```git clone https://github.com/jedluk/users .```
- install packages with npm  ```npm install```
- run dev environment ```npm run dev-server``` . Client is running on ``` localhost:8080/ ```
- once you finsish the jon build result bundle ```npm run build:dev``` or production bundle (uglyfied and optimized) ```npm run build:prod```

## Private routes

To simulate private routes fake authentication is provided. To log in use following credentials:

```
name: root
password: root
```

Once you log in user name and uuid will be stored in application store and allow you to use entire app.

## Basic functionality
- dashboard page: list of all fake users. Click managment to edit/delete user. Modal will be shown after successful operation
- go to Add New User tab to create new user. Name, username and email fields are required. Save button in lower-right corner give you possiblity to store current data in session storage.

## Testing

Basic unit tests for user service are implemented with usage of JEST. To run tests type in console:

```sh
npm test
```

Asynchronus code is tested with async/await ES8 featrues.