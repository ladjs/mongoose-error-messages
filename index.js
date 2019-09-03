const mongoose = require('mongoose');

const errors = {
  general: {
    default: '{PATH} was invalid; please contact us if necessary.',
    required: '{PATH} is required.',
    unique: '{PATH} of "{VALUE}" is not unique.'
  },
  Number: {
    min: '{PATH} of ({VALUE}) is less than minimum allowed value of ({MIN}).',
    max: '{PATH} of ({VALUE}) is more than maximum allowed value ({MAX}).'
  },
  Date: {
    min: '{PATH} of ({VALUE}) is before minimum allowed value ({MIN}).',
    max: '{PATH} of ({VALUE}) is after maximum allowed value ({MAX}).'
  },
  String: {
    enum: '{PATH} has an invalid selection of "{VALUE}".',
    match: '{PATH} has an invalid value "{VALUE}".',
    minlength:
      '{PATH} of "{VALUE}" is shorter than the minimum allowed length ({MINLENGTH}).',
    maxlength:
      '{PATH} of "{VALUE}" is longer than the maximum allowed length ({MAXLENGTH}).'
  }
};

mongoose.Error.messages = {
  ...mongoose.Error.messages,
  ...errors
};

module.exports = mongoose.Error.messages;
