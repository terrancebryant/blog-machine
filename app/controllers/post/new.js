import Controller from '@ember/controller';
import { get, set } from '@ember/object';

export default Controller.extend({

  title: null,

  body: null,
  /**
   * @method _transitionToPost
   * @param {Object} post 
   */
  _transitionToPost(post) {
    console.log( typeof post)
    this.transitionToRoute('post.show', post);
  },

  actions: {
    /**
     * @method post
     */
    post() {
      let title = get(this, 'title');
      let body = get(this, 'body');
      let post = get(this, 'store').createRecord('post', {
        title: title,
        desc: body,
        date: new Date()
      })
      post.save().then(() => {
        this._transitionToPost(post);
        set(this, 'title', null)
        set(this, 'body', null)
      })
    }
  }
});
