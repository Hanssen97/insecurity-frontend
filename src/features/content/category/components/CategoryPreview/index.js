import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';

import './index.min.css';


class CategoryPreview extends PureComponent {

  render() {
    const {name, description} = this.props;

    return (
      <div className="CategoryPreview" onClick={this.props.onClick}>
        <Typography
          className="name"
          variant="h5"
          >
          {name}
        </Typography>

        <Typography
          className="name"
          variant="h4"
          >
          {description}
        </Typography>

      </div>
    )
  }
}



CategoryPreview.propTypes = {
  name: PropTypes.string.isRequired,
};

export default CategoryPreview;
