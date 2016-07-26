'use strict';

// Requires
var validate = require("validate.js");

var constraints = {
  date: {
    presence: true,
    format: {
      pattern: /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/,
      message: function(value, attribute, validatorOptions, attributes, globalOptions) {
        return validate.format("^%{date} is not a valid dateTime (DD/MM/YYYY)", {
          date: value
        });
      }
    },
  },
  title: {
    presence: true,
    length: {
      minimum: 6,
      message: "Must be at least 6 characters"
    }
  }
};

module.exports = constraints;