import React, {Component} from 'react';

import Button from '@material-ui/core/Button';

import './login.min.css';


class Portal extends Component {
  constructor(props) {
    super(props);
    this.dispatch = props.dispatch;
    document.title = 'Morten og Jørgen er kule';
  }

  fetchUsers = () => {
    this.props.fetchUser();
  }

  render() {
    return (
      <div className="Login">
        <h1> Fancy login </h1>

          <p> {this.props.session.info} </p>

        <Button onClick={this.fetchUsers}>
          press me!
        </Button>
      </div>
    )
  }
}

export default Portal;
