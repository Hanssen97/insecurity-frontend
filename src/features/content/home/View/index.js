import React, {Component} from 'react';

import Typography from '@material-ui/core/Typography';

import './index.min.css';


class Home extends Component {
  constructor(props) {
    super(props);
    document.title = 'Home Page';
  }
  render() {
    return (
      <div className="Home">
        <h1> here comes home </h1>
      </div>
    )
  }
}

export default Home;
