var _ = require('../../../lib/alloy/lodash')._;

exports.parse = function(node, state) {
	_.extend(state, {
		itemsArray: 'leftNavButtons',
		property: 'leftNavButtons',
		itemArrayDefinition: {
			parents: [
				'Ti.UI.Window'
			],
			children: [
				'ALL'
			]
		}
	});
	return require('./Alloy.Abstract._ItemArray').parse(node, state);
};