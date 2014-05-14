/**
 * @class PM.view.notification.NotificationNav
 * @extends Ext.List
 * Description
 */
Ext.define('PM.view.notification.NotificationNav', {
    extend: 'Ext.List',
    requires: [
        ''
    ],
    xtype:'notificationnav',

    config: {

    store: {
        fields: ['name'],
        data: [
            {name: 'Cowper'},
            {name: 'Everett'},
            {name: 'University'},
            {name: 'Forest'}
        ]
    },
    height: 'auto',

    itemTpl: '{name}',

    listeners: {
        select: function(view, record) {
            Ext.Msg.alert('Selected!', 'You selected ' + record.get('name'));
        }
    }
    }
});