var _ = require('../../../lib/alloy/lodash')._;

exports.parse = function(node, state) {
	_.extend(state, {
		proxyPropertyDefinition: {
			parents: [
				'Ti.UI.iPad.Popover'
			]
		}
	});
	return require('./Alloy.Abstract._ProxyProperty').parse(node, state);
};