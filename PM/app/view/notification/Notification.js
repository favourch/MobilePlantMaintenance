/**
 * @class PM.view.notification.Notification
 * @extends Ext.Container
 * Description
 */
Ext.define('PM.view.notification.Notification', {
    extend: 'Ext.Container',
    requires: [
        'PM.view.notification.Main'
    ],
    xtype: 'notification',

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