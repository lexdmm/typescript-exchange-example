## Typescript Exchange Example

## Install
``` bash
# install dependencies
npm install

# serve with hot reload at http://localhost:3000
npm start
```
## Description
The objective of this project is to show the use of Typescritp for back-end development.
I didn't focus on the front end.
My idea here is to show you how to create abstract classes, use of decorators, method interfaces, asynchronous methods and polymorphism.

## Running local environment

After installation, when running **npm start**, a library called **concurrently** that will raise the **"npm run watch"** compiler, the fake API, **"npm run json-server"** and the litle-server to simulate the host on port 3000 **"npm run server"**.
So everything will be ready to work.

If you have problems with compatibility with the libraries, remove the **node-modules** folder and then the "^" seat of the **devDependencies** from the package.json file and run npm install again. **This will keep the libraries in the fixed version**. 
Below the dependencies without the sign in the example package.json:
``` bash
"devDependencies": {
    "@types/jquery": "2.0.56",
    "concurrently": "6.0.0",
    "json-server": "0.16.3",
    "lite-server": "2.6.1",
    "typescript": "2.9.2"
  }
```






