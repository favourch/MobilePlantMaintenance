/**
 * @class Sencha.view.Home
 * @extends extendsClass
 * Description
 */
Ext.define('PM.view.Home', {
    extend: 'Ext.Panel',
    requires: ['Ext.TitleBar','Ext.navigation.View'],
    xtype: 'homepage', 

    config: {
        title: 'Home',
        iconCls: 'home',

        styleHtmlContent: true,
        scrollable: true,

        items:	[
              	 	{
              	 		xtype: 'panel',
              	 		title: 'Welcome',
              	 		html: '<p style="text-align:center">Welcome to Mobile Plant Maintenance!!!</p><p style="text-align:justify">You will need to configure some settings if you are first time user. Click the Settings button or Settings Menu and follow the screen</p><br />'
              	 	},
              	 	{
              	 		xtype: 'button',
              	 		text: 'Settings',
              	 		title: 'Settings'                  
                  }

              	 	
             ]
    }
});