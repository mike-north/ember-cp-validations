import Ember from 'ember';
import { moduleFor, test } from 'ember-qunit';

moduleFor('validator:<%= dasherizedModuleName %>', 'Unit | Validator | <%= dasherizedModuleName %>', {
  integration: true
});

test('it works', function(assert) {
  var validator = this.subject();
  assert.ok(validator);
});
