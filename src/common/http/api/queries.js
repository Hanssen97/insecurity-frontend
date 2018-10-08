const settings = {
    settings: {
        fields: [
            "language"
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