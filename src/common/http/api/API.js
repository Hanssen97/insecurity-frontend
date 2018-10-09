import gotQL from 'gotql';
import * as queries from '../graphql/queries';
import config from '../../../config.json';

const address = config.SERVER_ADDRESS;


const options = () => ({
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Authorization": `Bearer ${localStorage.getItem("token")}`
  },
  debug: false,
});


export const login = (username, password) => {
  return gotQL.mutation(address, queries.login(username, password), options())
  .then(response => ({user: response.data.login}))
  .catch(error => ({error}))
}

export const register = (username, email, password) => {
  return gotQL.mutation(address, queries.register(username, email, password), options())
  .then(response => ({user: response.data.register}))
  .catch(error => ({error}))
}

export const getUser = () => {
  return gotQL.query(address, queries.getUser(), options())
  .then(response => ({user: response.data.me}))
  .catch(error => ({error}))
}

export const getCategories = () => {
  return gotQL.query(address, queries.getCategories(), options())
  .then(response => ({categories: response.data.categories}))
  .catch(error => ({error}))
}

export const getCategory = (id) => {
  return gotQL.query(address, queries.getCategory(id), options())
  .then(response => ({category: response.data.category}))
  .catch(error => ({error}))
}

export const getTopics = (category) => {
  return gotQL.query(address, queries.getTopics(category), options())
  .then(response => ({topics: response.data.topics}))
  .catch(error => ({error}))
}

export const getTopic = (id) => {
  return gotQL.query(address, queries.getTopic(id), options())
  .then(response => ({topic: response.data.topic}))
  .catch(error => ({error}))
}

export const createTopic = (category, title, body) => {
  return gotQL.mutation(address, queries.createTopic(category, title, body), options())
  .then(response => ({topic: response.data.createTopic}))
  .catch(error => ({error}))
}

export const getSettings = () => {
  return gotQL.query(address, queries.getUser(), options())
  .then(response => ({user: response.data.me}))
  .catch(error => ({error}))
}

// export const changeLanguage = () => {
//   return gotQL.query(address, queries.getUser(), options())
//   .then(response => ({user: response.data.me}))
//   .catch(error => ({error}))
// }


export const search = (query) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve({
      categories: [
        {
          name: "JavaScript",
          description: "JavaScript nerds, assemble!!",
        },
        {
          name: "Assembly",
          description: "FML",
        },
      ],
      topics: [
        {
          title: "Long title for forum. lorem lorem lorem etc",
          description: "Long question for forum. Lorem Ipsum dolor sit amet etc..... ",
          owner: "morten",
          date: "12.12.2018",
          likes: "2",
          category: "progamming",
        },
        {
          title: "Long title for forum. lorem lorem lorem etc",
          description: "Long question for forum. Lorem Ipsum dolor sit amet etc..... ",
          owner: "morten",
          date: "12.12.2018",
          likes: "12",
          category: "progamming",
        }
      ]
    }), 1000);
  }).then(data => data)
}


export const fetchSettings = (uId) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve({
      username: "morten",
      email: "morten@morten.no",
      profilePicture: "https://cdn0.tnwcdn.com/wp-content/blogs.dir/1/files/2018/05/Wyvern-programming-languages-in-one.jpg",
    }), 100);
  }).then(data => data)
}

export const changeUsername = (username) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve({
      username,
      email: "morten@morten.no",
      profilePicture: "https://cdn0.tnwcdn.com/wp-content/blogs.dir/1/files/2018/05/Wyvern-programming-languages-in-one.jpg",
    }), 100);
  }).then(data => data)
}

export const changeEmail = (email) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve({
      username: "morten",
      email,
      profilePicture: "https://cdn0.tnwcdn.com/wp-content/blogs.dir/1/files/2018/05/Wyvern-programming-languages-in-one.jpg",
    }), 100);
  }).then(data => data)
}

export const changeLanguage = (language) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve({
      username: "morten",
      language,
      profilePicture: "https://cdn0.tnwcdn.com/wp-content/blogs.dir/1/files/2018/05/Wyvern-programming-languages-in-one.jpg",
    }), 100);
  }).then(data => data)
}
