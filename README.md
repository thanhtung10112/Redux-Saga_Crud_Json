**Redux-SAGA-JSON-CRUD**

## Setup:

### `npm and yarn :`

    yarn add redux
    yarn add react-router
    yarn add react-router-dom
    yarn add mdb-react-ui-kit
    yarn add redux-saga-effects
    yarn add redux-devtools-extension

    yarn add redux-logger
    yarn add axios
    yarn add react-redux
    yarn add redux-saga
    yarn add react-toastify
    yarn add sweetalert2

    yarn add react-hook-form
    yarn add @hookform/resolvers
    yarn add yup

### `SRC: `

    |_ src
        |_ components
            |_ Header.js

        |_ pages
            |_ About.js
            |_ AddEditUser.js
            |_ Home.js
            |_ UserInfo.js

        |_ redux
            |_ actions.js
            |_ actionTypes.js
            |_ api.js
            |_ reducer.js
            |_ rootReducer.js
            |_ store.js
            |_ userSaga.js

## `Json: `

    |_ db.json
    |_ package.json
        |_ "scripts": {
            "server": "json-server --watch db.json --port 5000"
        }

## Run db.json

    npm run server

## Run the project up in dev mode

    yarn start
