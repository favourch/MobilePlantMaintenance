Ext.define('PM.view.notification.Main', {
        extend: 'Ext.TabPanel',
        xtype: 'notificationmainpage',
        requires: [
                'PM.view.notification.SearchNotification',
                'PM.view.notification.CreateNotification',
                'PM.view.Login',
                'PM.view.Settings',
                'PM.view.Help',
                'Ext.form.Panel',
                'Ext.form.FieldSet',
                'Ext.field.Number',
                'Ext.field.Field',
                'Ext.field.Password'
                ],
        config: {
                tabBarPosition : 'bottom',
                defaults: {
                    scrollable: true
                },
                
                items : [
                {
                                
                    xtype : 'createnotification'  

                },
                {
                        
                    xtype: 'searchnotification'  
                }
                ]
        }
});