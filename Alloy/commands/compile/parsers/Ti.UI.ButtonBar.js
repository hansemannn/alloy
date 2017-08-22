var _ = require('../../../lib/alloy/lodash')._;

exports.parse = function(node, state) {
	state = _.extend(state, {
		itemContainerDefinition: {
			children: [
				{ name:'Alloy.Abstract.BarItemTypes', property:'labels' }
			],
			translations: [
				{ from: 'Alloy.Abstract.Labels', to: 'Alloy.Abstract.BarItemTypes' }
			]
		}
	});
	return require('./Alloy.Abstract._ItemContainer').parse(node, state);
};
