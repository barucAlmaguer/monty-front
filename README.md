# Valiot Template App

This is the base project to create front apps for Valiot.

## Getting Started

### Clone the project

`git clone git@github.com:valiot/valiot-template-front.git`

### Change remote

Remove origin remote

`git remote rm origin`

Add new remote

`git remote add origin https://github.com/user/repo.git`

> This assumes that you already have the new repository created

Push `master`

`git push origin -u master`

## Install

Install project dependencies with `yarn`:
> You can use `npm`

```sh
yarn install
# or
# npm
```

## Available Scripts

#### `yarn start`
Start the development server

#### `yarn build`
Build the project for production

#### `yarn deploy`
Deploy the project
> First you need to add the new domain in `CNAME` file in the `./public` folder,<br>
> then change `"homepage": "https://your-project.valiot.io"` in `package.json` with the new domain.

## Folder Structure
After creation, your project should look like this:

```
─── valiot-test-front/
  ├── .editorconfig
  ├── .gitignore
  ├── Default_README.md
  ├── package.json
  ├── pull_request_template.md
  ├── README.md
  ├── plublic/
  │ ├── favicon/
  │ ├── images/
  │ ├── browserconfig.xml
  │ ├── CNAME
  │ ├── index.html
  │ └── manifest.json
  └── src/
    ├── App.js
    ├── App.test.js
    ├── Index.js
    ├── registerServiceWorker.js
    ├── versionTracker.json
    ├── actions/
    ├── assets/
    │ ├── images/
    │ └── stylesheets/
    │   ├── App.css
    │   ├── App.scss
    │   ├── components/
    │   └── layouts/
    ├── components/
    ├── containers/
    ├── reducers/
    └── screens/
```

<br>

----

Made by [Valiot](https://valiot.io/)
