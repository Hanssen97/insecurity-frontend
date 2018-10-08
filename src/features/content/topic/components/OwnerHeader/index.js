import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import { translate } from 'react-i18next';

import Typography from '@material-ui/core/Typography';
import './index.min.css';


class OwnerHeader extends PureComponent {
  constructor(props) {
    super(props);

    this.getLocales();
  }

  getLocales = () => {
    const { t } = this.props;
    this.texts = t('feature.content.topic.components.ownerheader', {returnObjects: true});
  }


  render() {
    let {type, repliedTo, owner, image, date} = this.props;

    let text = (type === 'reply') ? (
      <p><b>{owner}</b> {this.texts.reply} <b>{repliedTo}</b></p>
    ) : (
      <p> {this.texts.post} <b>{owner}</b></p>
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
          {new Date(date).toLocaleString()}
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

export default translate('translations')(OwnerHeader);
