// import { moduleForComponent, test } from 'ember-qunit';
// import hbs from 'htmlbars-inline-precompile';

// import { setupRenderingTest } from 'ember-qunit';

import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | post list', function(hooks) {
  setupRenderingTest(hooks);

  const data = [{
    title: 'title',
    desc: 'description'
  }]

  test('it renders', async function(assert) {
    this.posts = data;
    assert.expect(2);

    await render(hbs`{{post-list posts=posts}}`);
    assert.equal(this.element.querySelector('.post-title').textContent.trim(), 'title');
    assert.equal(this.element.querySelector('.partial-desc').textContent.trim(), 'description');
  });
});

