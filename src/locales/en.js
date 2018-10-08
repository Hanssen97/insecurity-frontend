import modules from './en/index';

export default {
  'layout.main':
    modules.layout.main,

  'feature.user.settings':
    modules.feature.user.settings,

  'feature.session.login':
    modules.feature.session.login,
  'feature.session.register':
    modules.feature.session.register,

  'feature.content.home':
    modules.feature.content.home,
  'feature.content.search':
    modules.feature.content.search,
  'feature.content.topic.create':
    modules.feature.content.topic.create,
  'feature.content.topic.components.ownerheader':
    modules.feature.content.topic.components.ownerheader,
  'feature.content.topic.components.reply':
    modules.feature.content.topic.components.reply,
  'feature.content.topic.components.topicpreview':
    modules.feature.content.topic.components.topicpreview,
}
