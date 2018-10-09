export const settings = {
    settings: {
        fields: [
            "language"
        ]
    }
}

export const categoryNode = {
    node: {
        fields: [
            "id",
            "name",
        ]
    }
}

export const category = {
    category: {
        fields: [
            "id",
            "name",
        ]
    }
}

export const categoryEdge = {
    edges: {
        fields: [
            categoryNode
        ]
    }
}

export const error = {
    error: {
        fields: [
            "error",
            "message",
            "statusCode",
        ]
    }
}

export const owner = {
    owner: {
        fields: [
            "username"
        ]
    }
}

export const likes = {
    likes: {
        fields: [
            "username",
        ]
    }
}

export const commentNode = {
    node: {
        fields: [
            "body",
            "timestamp",
            likes,
            owner,
        ]
    }
}

export const commentEdge = {
    edges: {
        fields: [
            commentNode,
        ]
    }
}

export const comments = {
    comments: {
        fields: [
            commentEdge,
        ]
    }
}

export const topicNode = {
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
  
export const categoryTopics = {
    edges: {
        fields: [
            topicNode,
        ],
    }
}

export const access = {
    access: {
        fields: [
            "name",
        ]
    }
}

export const groups = {
    groups: {
        fields: [
            "name",
            access,
        ]
    }
}