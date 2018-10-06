export async function testAsyncFetchUser() {
    return new Promise((resolve, reject) => {
       setTimeout(() => {
         resolve({name: "Morten"});
       }, 2000);
     }).then(data => data)
  }

export async function getCategoriesFromServer() {
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
       title: "Programming Humour",
      },
    ]), 2000);
  }).then(data => data)
}

export const getTopicsFromServer = (category) => {
    console.log("Fetch topics by category =", category);
    return [
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
    ]
  }

export const getTopicFromServer = (id) => {
    console.log("Fetch topic from server with id =", id);
    return {
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
    };
}


export const getSearchResultFromServer = (query) => {
  console.log("Fetch search result from server with query =", query);
    return {
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
    }
}


export const getCurrentSettingsFromServer = (uId) => {
  console.log("Fetch current settings from server with user id =", uId); 
  return {
    username: "morten",
    email: "morten@morten.no",
    profilePicture: "https://cdn0.tnwcdn.com/wp-content/blogs.dir/1/files/2018/05/Wyvern-programming-languages-in-one.jpg",
  }
}