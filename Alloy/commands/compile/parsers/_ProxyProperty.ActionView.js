var _ = require('../../../lib/alloy/lodash')._;

exports.parse = function(node, state) {
	_.extend(state, {
		proxyPropertyDefinition: {
			parents: [
				'Ti.Android.Menu'
			]
		}
	});
	return require('./_ProxyProperty').parse(node, state);
};