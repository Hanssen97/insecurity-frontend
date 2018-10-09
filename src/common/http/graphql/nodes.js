// -----------  User -----------

export const owner = {
    owner: {
        fields: [
            "username"
        ]
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

// -----------  Topic -----------
export const likes = {
    likes: {
        fields: [
            "username",
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

export const topicEdges = {
    edges: {
        fields: [
            topicNode,
        ]
    }
}

export const topicSearch = {
    topic: {
        fields: [
            topicEdges,
        ]
    }
}

// -----------  Comment -----------

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

// -----------  Settings -----------

export const settings = {
    settings: {
        fields: [
            "language"
        ]
    }
}


// -----------  Error -----------
export const error = {
    error: {
        fields: [
            "error",
            "message",
            "statusCode",
        ]
    }
}



// -----------  Category -----------

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


export const categoryEdges = {
    edges: {
        fields: [
            categoryNode,
        ]
    }
}

export const categorySearch = {
    category: {
        fields: [
            categoryEdges,
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