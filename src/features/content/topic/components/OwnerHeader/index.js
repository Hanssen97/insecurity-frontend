import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import Typography from '@material-ui/core/Typography';
import './index.min.css';


class OwnerHeader extends PureComponent {
    render() {
      let {type, repliedTo, owner, image, date} = this.props;

      let text = (type === 'reply') ? (
        <p><b>{owner}</b> replied to <b>{repliedTo}</b></p>
      ) : (
        <p> Posted by <b>{owner}</b></p>
      );

      return (
        <div className="OwnerHeader">
          <img alt='' src={image} />

          <Typography
            className="Text"
            variant="subheading"
            >
            {text}
          </Typography>


          <Typography
            className="Date"
            variant="subheading"
          >
            {date}
          </Typography>


        </div>
      )
    }
}



OwnerHeader.propTypes = {
  type: PropTypes.string.isRequired,
  owner: PropTypes.string.isRequired,
  repliedTo: PropTypes.string,
  image: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

export default OwnerHeader;
