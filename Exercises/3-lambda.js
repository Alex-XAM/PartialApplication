'use strict';

const tagged = (pref, str) => `[${pref}] ${str}`;

const tagDate = myString => {
  const currentDate = new Date().toISOString().slice(0, 10);
  tagged(currentDate, myString);
};

module.exports = { tagDate };
