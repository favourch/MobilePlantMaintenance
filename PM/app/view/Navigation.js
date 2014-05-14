/**
 * @class PM.view.Navigation
 * @extends Ext.List
 * Description
 */
Ext.define('PM.view.Navigation', {
   extend: 'Ext.List',
				xtype: 'navigation',
				requires : ['Ext.data.Store'],
				config: {
								cls : 'nav-list',
								itemTpl : '{itemname}',
								store: 'MenuList'
				}
});