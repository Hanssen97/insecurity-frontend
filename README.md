# Project in Software security
---
***Group members***:

* **Bjarte Klyve Larsen** - [Klyve](https://github.com/klyve)
* **Jørgen Hanssen** - [Hanssen97](https://github.com/Hanssen97)
* **Stian Sørslett** - [skogensKongle](https://github.com/skogensKongle)
* **Henrik Trehjørningen** - [henriktre](https://github.com/henriktre)
* **Morten Omholt-jensen** - [mortenoj](https://github.com/mortenoj)
* **Jørgen G Bakløkken** - [Bzerkk](https://github.com/Bzerkk)

---

# Demo

A demo is available at [http://cairn-218923.appspot.com/](http://cairn-218923.appspot.com/) 

Note that the demo doesnt have SSL certificate and is not secure


---

# Prerequisites

### NodeJS
[NodeJS](https://nodejs.org/en/) is a JavaScript run-time environment which can executes JavaScript outside the browser. 

### NpmJS
[Node Package Manager](https://www.npmjs.com/) is a package manager for NodeJS which structures packages and dependencies in out project.

---
# Install guide


## Setting up the backend


Pull the latest version of the [Server repo](https://github.com/klyve/forum-server)
and follow the instructions provided in the readme of the repository


## Setting up the frontend

- Clone this repository

- Clone the backend repository found at 

- Run `npm install` in the root folder to install dependencies

In the root folder create a file: `src/config.js` and put in the address in the form where the address is the ip adress for the the server that runs the backend repository. If ran locally it would be localhost. Port by default is `8080` in the [backend repository](https://github.com/klyve/forum-server).

```json
{
  "SERVER_ADDRESS" : "http://adress:port/api/graphql"
}
```

- Run `npm start` in the root folder

- Navigate to http://localhost:3000 to view the application in the browser
