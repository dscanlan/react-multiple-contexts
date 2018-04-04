import React from 'react';
import axios from 'axios';

const headers = () => {};
const to = promise => {
	return promise
		.then(data => {
			return [null, data];
		})
		.catch(err => [err]);
};
const Web = {
	get: async url => await to(axios.get(url)),
	del: async url => await to(axios.delete(url, headers())),
	update: async (url, body) => await to(axios.put(url, body, headers())),
	post: async (url, body) => await to(axios.post(url, body, headers()))
};

export default Web;
