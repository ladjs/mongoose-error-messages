const test = require('ava');
const mongoose = require('mongoose');

mongoose.Error.messages = require('..');

test('sets message', t => {
  t.is(
    mongoose.Error.messages.general.default,
    '{PATH} was invalid; please contact us if necessary.'
  );
});
