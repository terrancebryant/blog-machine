import { get, computed } from '@ember/object';
import Component from '@ember/component';

export default Component.extend({

  classNames: ['post-list'],

  partialpost: computed(function() {
    let posts = get(this, 'posts')
    return posts.map((post) => {
      let partial = get(post, 'desc').slice(0, 180)
      return {
        id: get(post, 'id'),
        title: get(post, 'title'),
        desc: partial,
        date: get(post, 'date')
      }
    })
  })
});
