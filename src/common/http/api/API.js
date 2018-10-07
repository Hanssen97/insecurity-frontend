export async function fetchUser() {
    return new Promise((resolve, reject) => {
       setTimeout(() => {
         resolve({name: "Morten"});
       }, 400);
     }).then(data => data)
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
      ]), 700);
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
      }), 400);
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
