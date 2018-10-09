import React, {PureComponent} from 'react';

import Typography from '@material-ui/core/Typography';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import ExpansionPanelActions from '@material-ui/core/ExpansionPanelActions';
import Icon from '@material-ui/core/Icon';

import {unWrapText} from '../../../../../common/utils/text';

import './index.min.css';


class CommentBox extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      comment: ""
    }
  }

  submit = () => {
    if (this.props.reply) {
      this.props.onSubmit(`@${this.props.reply.owner.username} ${this.state.comment}`)
    } else {
      this.props.onSubmit(this.state.comment);
    }
    this.setState({comment: ""});
  }

  cancel = () => {
    this.props.onCancel();
    this.setState({comment: ""});
  }

  render() {
    let header = (!this.props.reply) ? null : (
      <div>
        <div className="ReplyHeader">
          <Typography
            className="Title"
            variant='subtitle1'
          >
            Reply to <b>{this.props.reply.owner.username}</b>
          </Typography>

          <Typography
            className="Quote"
            variant='subtitle1'
            noWrap
          >
            {"\" " + unWrapText(this.props.reply.body) + " \""}
          </Typography>
        </div>


        <Divider />
      </div>
    )

    return (
      <Drawer
        anchor="bottom"
        open={this.props.open}
        onClose={this.cancel}
      >
        <div className="CommentBox">

          {header}


          <textarea
            className="CommentInput"
            autoFocus
            placeholder="write a comment..."
            onChange={e => this.setState({
              comment: e.target.value
            })}
          />

        <div className="Actions">
            <Divider />
            <ExpansionPanelActions>
              <div className="CancelAction">
                <Button className="Button" color="inherit" onClick={this.cancel}>
                  <Typography variant='subtitle1' color='inherit'>
                    Cancel
                  </Typography>
                  <Icon fontSize='small' color="inherit"> delete </Icon>
                </Button>
              </div>
              <div className="SubmitAction">
                <Button className="Button" color="inherit" onClick={this.submit}>
                  <Typography variant='subtitle1' color='inherit'>
                    Submit
                  </Typography>
                  <Icon fontSize='small' color="inherit"> send </Icon>
                </Button>
              </div>
            </ExpansionPanelActions>
          </div>


        </div>
      </Drawer>
    )
  }
}

export default CommentBox;
