/**
 * @class PM.view.MainContainer
 * @extends Ext.Container
 * Description
 */
Ext.define('PM.view.MainContainer', {
    extend: 'Ext.Container',
    xtype: 'maincontainerpage',

    config: {
        xtype: 'container',
		flex: 1,
		layout: "hbox",
		items : [{
			xtype : 'main',
			id: 'maincomp',
			scrollable: true,
			// Needed to fit the whole content
			width: '100%'
		}]
    }
});