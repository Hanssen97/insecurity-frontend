import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import { translate } from 'react-i18next';

import Typography from '@material-ui/core/Typography';
import OwnerHeader from '../OwnerHeader/index';


import './index.min.css';


class TopicPreview extends PureComponent {
  constructor(props) {
    super(props);

    this.getLocales();
  }

  getLocales = () => {
    const { t } = this.props;
    this.texts = t('feature.content.topic.components.topicpreview', {returnObjects: true});
  }

  render() {
    let {owner, date, title, description, likes} = this.props;

    return (
      <div className="TopicPreview" onClick={this.props.onClick}>

        <div className="body">
            <div className="topic">
                <Typography
                className="title"
                variant="headline"
                >
                    {title}
                </Typography>

                <Typography
                className="description"
                >
                    {description}
                </Typography>
            </div>



            <OwnerHeader
              type="post"
              owner={owner}
              image="https://www.stickytiger.co.uk/user/products/U0026_Large_1_Inch_Circle_Punch.jpg"
              date={date}
            />

        </div>

        <div className="meta">
          <Typography className="likes" component="p">
            <b>{likes}</b> {this.texts.meta.likes}
          </Typography>
          <Typography className="replies" component="p">
            <b>{likes}</b> {this.texts.meta.replies}
          </Typography>
        </div>


      </div>
    )
  }
}



TopicPreview.propTypes = {
  owner: PropTypes.string.isRequired,
};

export default translate('translations')(TopicPreview);
