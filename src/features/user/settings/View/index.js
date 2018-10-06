import React, {Component} from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';


import './index.min.css';


class SettingsView extends Component {
  constructor(props) {
    super(props);
    document.title = 'Search Page';
    this.state = {
    }
  }

  componentWillMount() {
      this.props.getCurrentSettings("morten");
      setTimeout(() => {
        console.log(this.props.user);
      }, 0);
  }

  render() {

    return (
    <Paper className="SettingsView">
        <h1>Hello world</h1>
    </Paper>
    )
  }
}

export default SettingsView;
