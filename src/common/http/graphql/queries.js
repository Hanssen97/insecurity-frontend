
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
                nodes.access,
                nodes.groups,
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
                nodes.categoryEdges,
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


export const createTopic = (category, title, body) => {
    return {
        operation: {
            name: "createTopic",
            args: {
                category,
                title,
                body,
            },
            fields: [
                "id",
                nodes.error,
            ]
        }
    }
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

export const createMessage = (topic, body) => {
    return {
        operation: {
            name: "createMessage",
            args: {
                topic,
                body,
            },
            fields: [
                "body",
                "timestamp",
                nodes.owner,
                nodes.likes,
                nodes.error
            ],
        }
    }
}



export const changeEmail = (email, password) => {
    return {
        operation: {
            name: "changeEmail",
            args: {
                email,
                password,
            },
            fields: [
                "username",
                "email",
                nodes.settings,
                nodes.error
            ],
        }
    }
}

export const changePassword = (password, newPassword) => {
    return {
        operation: {
            name: "changePassword",
            args: {
                password,
                newPassword,
            },
            fields: [
                "username",
                "email",
                nodes.settings,
                nodes.error
            ],
        }
    }
}

export const changeSettings = (settings) => {
    return {
        operation: {
            name: "changeSettings",
            args: {
                settings
            },
            fields: [
                "username",
                "email",
                nodes.settings,
                nodes.error
            ],
        }
    }
}

export const search = (value) => {
    return {
        operation: {
            name: "search",
            args: {
                value,
            },
            fields: [
                nodes.categorySearch,
                nodes.topicSearch,
                nodes.error,
            ]
        }
    }
}

