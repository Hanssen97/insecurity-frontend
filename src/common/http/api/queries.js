const settings = {
    settings: {
        fields: [
            "language"
        ]
    }
}

const categoryNode = {
    node: {
        fields: [
            "id",
            "name",
        ]
    }
}

const category = {
    category: {
        fields: [
            "id",
            "name",
        ]
    }
}

const categoryEdge = {
    edges: {
        fields: [
            categoryNode
        ]
    }
}

const error = {
    error: {
        fields: [
            "error",
            "message",
            "statusCode",
        ]
    }
}

const owner = {
    owner: {
        fields: [
            "username"
        ]
    }
}

const likes = {
    likes: {
        fields: [
            "username",
        ]
    }
}

const commentNode = {
    node: {
        fields: [
            "body",
            "timestamp",
            likes,
            owner,
        ]
    }
}

const commentEdge = {
    edges: {
        fields: [
            commentNode,
        ]
    }
}

const comments = {
    comments: {
        fields: [
            commentEdge,
        ]
    }
}

const topicNode = {
    node: {
        fields: [
            "id",
            "timestamp",
            owner,
            "body",
            "title",
        ]
    }
}
  
const categoryTopics = {
    edges: {
        fields: [
            topicNode,
        ],
    }
}

export const login = (username, password) => {
    return {
        operation: {
            name: "login",
            args: {
                username,
                password,
            },
            fields: [
                "username",
                "email",
                "token",
                settings,
                error,
            ]
        }
    }
}

export const register = (username, email, password) => {
    return {
        operation: {
            name: "register",
            args: {
                username,
                email,
                password,
            },
            fields: [
                "username",
                "email",
                "token",
                settings,
                error,
            ]
        }
    }
}

export const getUser = () => {
    return {
        operation: {
            name: "me",
            fields: [
                "username",
                "email",
                settings,
                error,
            ]
        }
    }
}

export const getCategories = () => {
    return {
        operation: {
            name: "categories",
            fields: [
                categoryEdge,
                error,
            ]
        }
    }
}

export const getCategory = (id) => {
    return {
        operation: {
            name: "category",
            args: {
                id,
            },
            fields: [
                "id",
                "name",
                error,
            ]
        }
    }
}

export const getTopics = (category) => {
    return {
        operation: {
            name: "topics",
            args: {
                category,
            },
            fields: [
                categoryTopics,
                error,
            ]
        }
    }
}


export const createTopic = () => {

}

export const getTopic = (id) => {
    return {
        operation: {
            name: "topic",
            args: {
                id,
            },
            fields: [
                "title",
                "timestamp",
                "body",
                "title",
                owner,
                category,
                comments,
                error,
            ]
        }
    }
}
