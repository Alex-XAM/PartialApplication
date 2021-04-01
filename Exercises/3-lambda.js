'use strict';

const tagged = (pref, str) => `[${pref}] ${str}`;

const currentDate = new Date().toISOString().slice(0, 10);

const tagDate = str => tagged(currentDate, str);

module.exports = { tagDate };
