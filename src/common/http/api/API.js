import * as queries from './queries';
import gotQL from 'gotql';
import config from '../../../config.json';

const address = config.SERVER_ADDRESS;


const options = () => ({
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Authorization": `Bearer ${localStorage.getItem("token")}`
  },
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




export async function fetchAllCategories() {
  console.log("Fetching categories");
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve([
      {
       title: "Akward Situations",
      },
      {
       title: "Bored",
      },
      {
       title: "Cars",
      },
      {
       title: "Dogs",
      },
      {
       title: "Everyday Problems",
      },
      {
       title: "Funny",
      },
      {
       title: "Happy",
      },
      {
       title: "Programming Humor",
      },
    ]), 1000);
  }).then(data => data)
}

export const fetchTopics = (category) => {
    console.log("Fetch topics by category =", category);
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve([
        {
          title: "Topic title 1",
          description: "Long question for forum. Lorem Ipsum dolor sit amet etc..... ",
          owner: "bjarte",
          date: "12.12.2018",
          likes: "1",
          category: "progamming",
        },
        {
          title: "Topic 2",
          description: "Long question for forum. Lorem Ipsum dolor sit amet etc..... ",
          owner: "jørgen",
          date: "1.12.2018",
          likes: "12",
          category: "progamming",
        },
      ]), 800);
    }).then(data => data)
  }

export const fetchTopic = (topic) => {
    console.log("Fetch topic from server with topic =", topic);
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve({
          title: "Long title for forum. lorem lorem lorem etc",
          description: "Long question for forum. Lorem Ipsum dolor sit amet etc..... ",
          owner: "morten",
          date: "12.12.2018",
          replies: [
              {
                  owner: "jørgen",
                  date: "12.02.2018",
                  text: "Reply because lorem ipsum blah blah blah",
                  likes: "23",
              },
              {
                  owner: "bjarte",
                  date: "12.02.2018",
                  text: "Reply because lorem ipsum blah blah blah",
                  likes: "23",
              },
          ],
      }), 600);
    }).then(data => data)
}


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
