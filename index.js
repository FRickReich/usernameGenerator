/*!
 * braces <https://github.com/FRickReich/XMUserGenerator>
 *
 * Copyright (c) 2020, F. Rick Reich.
 * Licensed under the MIT license.
 */

'use strict';

const fs = require('fs');
const path = require('path');

String.prototype.capitalize = function() {
	return this.charAt(0).toUpperCase() + this.substring(1).toLowerCase();
};

const getValues = () => {
	const json = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'words.json'), 'utf8'));

	return json;
};

const createRandomNumber = (maxNumber) => {
	return Math.floor(Math.random() * (maxNumber - 128 + 1) + 128);
};

const createRandomName = (maxNumber) => {
	const data = getValues();

	const adj = data.adjs[Math.floor(Math.random() * (data.adjs.length - 1))];
	const noun = data.nouns[Math.floor(Math.random() * (data.nouns.length - 1))];
	const number = createRandomNumber(maxNumber);

	return `${adj.capitalize()}${noun.capitalize()}${maxNumber !== 0 ? number : ''}`;
};

exports.getUsername = (maxNumber = 50000) => {
	return createRandomName(maxNumber);
};
