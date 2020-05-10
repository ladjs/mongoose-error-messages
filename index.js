const mongoose = require('mongoose');

const errors = {
  general: {
    default: '{PATH} was invalid; please contact us if necessary.',
    required: '{PATH} is required.',
    unique: '{PATH} is not unique.'
  },
  Number: {
    min: '{PATH} is less than minimum allowed value of ({MIN}).',
    max: '{PATH} is more than maximum allowed value ({MAX}).'
  },
  Date: {
    min: '{PATH} is before minimum allowed value ({MIN}).',
    max: '{PATH} is after maximum allowed value ({MAX}).'
  },
  String: {
    enum: '{PATH} has an invalid selection.',
    match: '{PATH} has an invalid value.',
    minlength:
      '{PATH} is shorter than the minimum allowed length ({MINLENGTH}).',
    maxlength: '{PATH} is longer than the maximum allowed length ({MAXLENGTH}).'
  }
};

mongoose.Error.messages = {
  ...mongoose.Error.messages,
  ...errors
};

module.exports = mongoose.Error.messages;
