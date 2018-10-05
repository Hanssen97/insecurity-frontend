import React, {Component} from 'react';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
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



  render() {

    let replies = [
        {
            author: "morten",
            timestamp: "12.02.2018",
            text: "lskfjaslkfjalksajfla k",
            likes: "23",
        },
        {
            author: "morten",
            timestamp: "12.02.2018",
            text: "lskfjaslkfjalksajfla k",
            likes: "23",
        },
        {
            author: "morten",
            timestamp: "12.02.2018",
            text: "lskfjaslkfjalksajfla k",
            likes: "23",
        },
        {
            author: "morten",
            timestamp: "12.02.2018",
            text: "lskfjaslkfjalksajfla k",
            likes: "23",
        },
    ];

    let comments = replies.map((reply, key) => {
        return (
            <Paper id="key" className="reply" elevation={1} >
                <Typography className="rHeader">
                    <div className="profileImg"></div>
                    <p className="rAuthor">Posted by <b>{reply.author}</b></p>
                    <p className="rTimestamp">{reply.timestamp}</p>
                </Typography>
                <Typography className="rBody">
                    <p>{reply.text}</p>
                    <a href="#">Reply</a>
                </Typography>
                <Typography className="rLikes" component="p">{reply.likes} likes</Typography>
            </Paper>
        );
    });
    return (
        <div className="TopicPage">
            <div className="container">
                <Paper className="topic" elevation={8}>
                    <Typography className="header">
                        <h1>Whats the deal with JS???</h1>
                        <div className="meta">
                            <p className="author">Posted by <b>morten</b></p>
                            <p className="timestamp">12.02.2018</p>
                        </div>
                    </Typography>
                    <Typography className="description" component="p">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </Typography>
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
