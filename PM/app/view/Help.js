/**
 * @class PM.view.Help
 * @extends Ext.Panel
 * Description
 */
Ext.define('PM.view.Help', {
    extend: 'Ext.Panel',
    xtype: 'helppage',

    config: {
        title: 'Help',
                iconCls: 'info',

                items: [
                {
	            	xtype: 'titlebar',
	            	docked: 'top',
		            title: 'Help',
		            items: [
		             {
		              xtype: 'button',
		              ui: 'normal',
		              text: 'Menu'
		             }
		            ]
          	 		
          	 	},
                    {
                        xtype: 'video',
                        url: 'http://av.vimeo.com/64284/137/87347327.mp4?token=1330978144_f9b698fea38cd408d52a2393240c896c',
                        posterUrl: 'http://b.vimeocdn.com/ts/261/062/261062119_640.jpg'
                    }
                ]
    }
});