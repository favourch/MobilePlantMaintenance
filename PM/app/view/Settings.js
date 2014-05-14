/**
 * @class PM.view.Settings
 * @extends Ext.Panel
 * Description
 */
Ext.define('PM.view.Settings', {
    extend: 'Ext.Panel',
    xtype: 'settingspage',
    requires: 'Ext.Title',

    config: {
        title: 'Settings',
                iconCls: 'settings',
                name: 'settings-name',
                items: [
                {
	            	xtype: 'title',
	            	
		            title: 'Settings',
          	 		
          	 	},
                {
                    xtype : 'button',
                    name : 'json',
                    text : 'JSON',
                    action : 'jsonrequest'
                }
                ]
    }
});