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
# Install guide

## Setting up the backend
pull the latest version of the
[Server repo](https://github.com/klyve/forum-server)
and follow the instructions provided in the readme of the repository

---
## Setting up the frontend
to get started, navigate to the root directory and run

### `npm install`
create the file `src/config.js` and put in the adress in the form
```json
{
  "SERVER_ADDRESS" : "http://adress:port/api/graphql"
}
```

do
#### `npm start`
and navigate to http://localhost:3000
to view it in the browser
