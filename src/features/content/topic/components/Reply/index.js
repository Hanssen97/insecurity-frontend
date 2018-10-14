import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import { translate } from 'react-i18next';

import Typography from '@material-ui/core/Typography';

import OwnerHeader from '../OwnerHeader/index';

import {unWrapText} from '../../../../../common/utils/text';

import './index.min.css';


class Reply extends PureComponent {
  getLocales = () => {
    const { t } = this.props;
    this.texts = t('feature.content.topic.components.reply', {returnObjects: true});
  }

  render() {
    this.getLocales();

    let {owner, likes, text, date} = this.props;

    return (
      <div className="Reply">


        <OwnerHeader
          type='post'
          owner={owner}
          image='media/User.jpg'
          date={date}
        />

        <div className="Body">
            <Typography component="pre" multiline color='inherit'>{unWrapText(text)}</Typography>
            {
              this.props.canReply &&
              <Typography component="p" onClick={this.props.onReply}><b>{this.texts.actions.reply}</b></Typography>
            }
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
