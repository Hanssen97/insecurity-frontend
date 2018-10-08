
import * as nodes from './nodes';


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
                nodes.settings,
                nodes.error,
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
                nodes.settings,
                nodes.error,
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
                nodes.settings,
                nodes.error,
            ]
        }
    }
}

export const getCategories = () => {
    return {
        operation: {
            name: "categories",
            fields: [
                nodes.categoryEdge,
                nodes.error,
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
                nodes.error,
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
                nodes.categoryTopics,
                nodes.error,
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
                nodes.owner,
                nodes.category,
                nodes.comments,
                nodes.error,
            ]
        }
    }
}
