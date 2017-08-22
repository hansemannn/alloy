var _ = require('../../../lib/alloy/lodash')._;

exports.parse = function(node, state) {
	_.extend(state, {
		itemArrayDefinition: {
			parents: [
				'Ti.UI.AlertDialog',
				'Ti.UI.OptionDialog'
			],
			children: [
				'Alloy.Abstract.ButtonName'
			],
			property: 'buttonNames'
		}
	});
	return require('./Alloy.Abstract._ItemArray').parse(node, state);
};