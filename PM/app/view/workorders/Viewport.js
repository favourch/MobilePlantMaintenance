/**
 * @class PM.view.notification.Notification
 * @extends Ext.Container
 * Description
 */
Ext.define('PM.view.workorders.Viewport', {
    extend: 'Ext.Container',
    requires: [
        'PM.view.workorders.Main'
    ],
    xtype: 'workodersviewport',

    config: {
        xtype: 'container',

        flex: 1,
        layout: "hbox",
        
        items : [
       
            {
                xtype : 'workordersmainpage',
                width: '100%',
            }

        ]
    }
});		