const settings = {
    settings: {
        fields: [
            "language"
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

const comments = {
    comments: {
        fields: [
            owner,
            "body",
            "timestamp",
            likes,
        ]
    }
}

const categoryTopics = {
    topic: {
        fields: [
            "timestamp",
            owner,
            "body",
            "title",
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
                category,
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
                "name",
            ]
        }
    }
}



