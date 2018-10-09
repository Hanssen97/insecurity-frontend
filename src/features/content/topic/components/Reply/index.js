import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import { translate } from 'react-i18next';

import Typography from '@material-ui/core/Typography';

import OwnerHeader from '../OwnerHeader/index';

import './index.min.css';


class Reply extends PureComponent {
  constructor(props) {
    super(props);

    this.getLocales();
  }

  componentDidUpdate() {
    this.getLocales();
  }

  getLocales = () => {
    const { t } = this.props;
    this.texts = t('feature.content.topic.components.reply', {returnObjects: true});
  }

  render() {
    let {owner, likes, text, date} = this.props;
    return (
      <div className="Reply">


        <OwnerHeader
          type='post'
          owner={owner}
          image='https://www.stickytiger.co.uk/user/products/U0026_Large_1_Inch_Circle_Punch.jpg'
          date={date}
        />

        <div className="Body">
            <Typography component="p" color='inherit'>{text}</Typography>
            <Typography component="p" onClick={this.props.onReply}><b>{this.texts.actions.reply}</b></Typography>
        </div>

        <div className="Meta">
          <Typography className="Likes" component="p"><b>{likes}</b> {this.texts.meta.likes}</Typography>
        </div>


      </div>
    )
  }
}



Reply.propTypes = {
  owner: PropTypes.string.isRequired,
};

export default translate('translations')(Reply);
