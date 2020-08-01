# Users

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

Simple app build with React, React-Router, Redux and Bootstrap. It uses fake API https://jsonplaceholder.typicode.com/users for serving data. All CRUD operation are handled.

## Owner notes

### Private routes

To simulate private routes fake authentication is provided. To log in use following credentials:

```
name: root
password: root
```

Once you log in user name and uuid will be stored in application store and allow you to use entire app.

### Basic functionality

- dashboard page: list of all fake users. Click managment to edit/delete user. Modal will be shown after successful operation
- go to Add New User tab to create new user. Name, username and email fields are required. Save button in lower-right corner give you possiblity to store current data in session storage.

### Testing

Basic unit tests for user service are implemented with usage of JEST. To run tests type in console:

```sh
yarn test
```

Asynchronus code is tested with async/await ES8 featrue.
