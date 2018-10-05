import React, {Component} from 'react';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import './index.min.css';


class Topic extends Component {
    constructor(props) {
        super(props);
        document.title = 'Topic Page';
        this.state = {

        }
    }

    
    componentWillMount() {
        this.props.getTopic("22");
    }

    render() {
        let topic = this.props.content.topic;
        let comments = topic.replies.map((reply, key) => {
            return (
                <Paper key={key} className="reply" elevation={1} >
                    <div className="rHeader">
                        <div className="profileImg"></div>
                        <Typography className="rAuthor" component="p">Posted by <b>{reply.author}</b></Typography>
                        <Typography className="rTimestamp" component="p">{reply.timestamp}</Typography>
                    </div>
                    <div className="rBody">
                        <Typography component="p">{reply.text}</Typography>
                        <Typography component="a" href="#">Reply</Typography>
                    </div>
                    <Typography className="rLikes" component="p">{reply.likes} likes</Typography>
                </Paper>
            );
        });
                
        return (
            <div className="TopicPage">
                <div className="container">
                    <Paper className="topic" elevation={8}>
                        <div className="header">
                            <Typography component="h1">{topic.title}</Typography>
                            <div className="meta">
                                <Typography className="author" component="p">Posted by <b>{topic.author}</b></Typography>
                                <Typography className="timestamp" component="p">{topic.timestamp}</Typography>
                            </div>
                        </div>
                        <div className="description">
                            <Typography component="p">{topic.description}</Typography>
                        </div>
                    </Paper>
                    <div className="replies">
                        {comments}
                    </div>
                </div>
            </div>
        )
    }
}

export default Topic;
