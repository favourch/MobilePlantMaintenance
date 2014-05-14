Ext.define('PM.view.jobqueue.Viewport', {
				extend: 'Ext.Container',
				xtype: 'jobqueue_viewport',
				requires: [
				'PM.view.jobqueue.JobQueue',
				'PM.view.Navigation',
				'Ext.TitleBar'
				],
				config: {
								layout: 'hbox',
								flex: 1,
								scrollable: true,
								
								items : [{
									xtype: 'jobqueue'																							
								}]
				}
});
