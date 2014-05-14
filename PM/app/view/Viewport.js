Ext.define('PM.view.Viewport', {
				extend: 'Ext.Container',
				xtype: 'app_viewport',
				requires: [
				'PM.view.MainContainer',
				'Ext.TitleBar'
				
				],
				config: {
								fullscreen: true,
								layout: 'hbox',
								items : [{

											xtype: 'maincontainerpage',
											
											itemId: 'maincont',
											cls: 'slide'
																							
								},
								 {
												xtype : 'navigation',
												width : 200
								},
								{
									xtype : 'titlebar',
			                        title : 'Plant Maintenance',
			                        id: 'titlebar',
			                        docked : 'top',
			                        items :[{
			                                        align : 'left',
			                                        name : 'nav_btn',
			                                        iconCls : 'list',
			                                        ui : 'plain'
			                        },
			                        {
			                        	xtype: 'button',
			                        	iconCls: 'home',
			                        	align: 'right',
			                        	id: 'gohomebtn',
			                        	action: 'goHome'
			                        }
			                        ]
								}]
				}
});

