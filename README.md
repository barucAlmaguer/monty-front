# Playground for valiot front apps

This is the base project to create front apps fot Valiot.

## Getting Started

### Clone the project

`git clone --depth 1 https://github.com/DisruptiveAngels/valiot-test-front`

> This create a shallow clone with just the latest state.

### Change remote

Remove origin remote

`git remote rm origin`

Add new remote

`git remote add origin https://github.com/user/repo.git`

> This assumes that you already have the new repository created

Push `master`

`git push origin -u master`

## Install

Install project pependencies with `yarn`:
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
> then change `"homepage": "https://test-front.valiot.io"` in `package.json` with the new domain.

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
  ├── node_modules/
  ├── plublic/
  │ ├── CNAME
  │ ├── favicon.ico
  │ ├── index.html
  │ └── manifest.json
  └── src/
    ├── App.js
    ├── App.test.js
    ├── Index.js
    ├── registerServiceWorker.js
    ├── assets/
    │ ├── images/
    │ └── stylesheets/
    │   ├── App.css
    │   ├── App.scss
    │   ├── components/
    │   └── layouts/
    ├── components/
    └── screens/
```

<br>

----

Made by 😇 [Disruptive Angels](https://disruptiveangels.com/)