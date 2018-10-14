import React, {Component} from 'react';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';

import OwnerHeader from '../components/OwnerHeader';
import Reply from '../components/Reply';
import CommentBox from '../components/CommentBox';

import {unWrapText} from '../../../../common/utils/text';


import './index.min.css';


class Topic extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      commentBox: {
        open: false,
        reply: null
      }

    }
  }

  componentDidMount() {
    const fullPath = this.props.location.pathname;
    const id = fullPath.replace(/ *\/[^)]*\/ */g, '');
    this.props.getTopic(id);

    this.setState({
      id,
    });
  }

  postCommment = comment => {
    this.props.postComment(this.state.id, comment);
    this.setState({
      commentBox: {
        open: false,
        reply: null
      }
    })
  }

  render() {
    if (this.props.feedback.fetching) {
      return (
        <div className="Progress">
          <CircularProgress color="inherit"/>
        </div>
      )
    }

    document.title = `${this.props.content.topic.title} - Cairn`

    let topic = this.props.content.topic;

    let comments = topic.comments.edges.map((reply, key) => {
      return (
        <Reply
          key={key}
          owner={reply.node.owner.username}
          likes={(!reply.node.likes) ? "0" : reply.node.likes}
          text={reply.node.body}
          date={reply.node.timestamp}
          canReply={Boolean(this.props.session.user)}
          onReply={() => this.setState({
            commentBox: {
              open: true,
              reply: reply.node
            }
          })}
        />
      );
    });

    return (
      <Paper className="Topic">
        <div className="Post">
          <div className="Header">
            <Typography
              className="Title"
              variant="h5"
            >
              {topic.title}
            </Typography>

            <OwnerHeader
              type='post'
              owner={topic.owner.username}
              image='media/User.jpg'
              date={topic.timestamp}
            />
          </div>

          <Typography
            className="Description"
            variant="body2"
            component="pre"
          >
            {unWrapText(topic.body)}
          </Typography>

          <div className="PostActions">
            {
              this.props.session.user &&
                <Tooltip title="Comment on post">
                  <IconButton onClick={() => this.setState({
                      commentBox: {
                        open: true,
                        reply: null
                      }
                    })}>
                    <Icon color="inherit"> comment </Icon>
                  </IconButton>
                </Tooltip>
            }
          </div>
        </div>

        <div className="Replies">
          {comments}
        </div>



        <CommentBox
          open={this.state.commentBox.open}
          reply={this.state.commentBox.reply}
          onCancel={() => this.setState({
            commentBox: {
              open: false,
              reply: null
            }
          })}
          onSubmit={this.postCommment}
        />



      </Paper>
    )
  }
}

export default Topic;
