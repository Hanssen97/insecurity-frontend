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

export const createComment = (topic, body) => {
  return gotQL.mutation(address, queries.createMessage(topic, body), options())
  .then(response => ({comment: response.data.createMessage}))
  .catch(error => ({error}))
}

export const changeEmail = (email, password) => {
  return gotQL.mutation(address, queries.changeEmail(email, password), options())
  .then(response => ({settings: response.data}))
  .catch(error => ({error}))
}

export const changePassword = (password, newPassword) => {
  return gotQL.mutation(address, queries.changePassword(password, newPassword), options())
  .then(response => ({settings: response.data}))
  .catch(error => ({error}))
}

export const changeLanguage = (value) => {
  const language = `{\\"language\\": \\"${value}\\"}`;

  return gotQL.mutation(address, queries.changeSettings(language), options())
  .then(response => ({settings: response.data}))
  .catch(error => ({error}))
}

export const search = (query) => {
  return gotQL.query(address, queries.search(query), options())
  .then(response => ({result: response.data}))
  .catch(error => ({error}))
}
