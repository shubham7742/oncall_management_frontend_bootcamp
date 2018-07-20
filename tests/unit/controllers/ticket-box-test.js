import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Controller | ticket-box', function(hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function(assert) {
    let controller = this.owner.lookup('controller:ticket-box');
    assert.ok(controller);
  });
});
