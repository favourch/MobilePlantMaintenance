Ext.define('PM.view.Main', {
        extend: 'Ext.TabPanel',
        xtype: 'main',
        requires: [
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
                 
                items : [
                {
                                
                    xtype : 'homepage'   
                },
                {
                        
                    xtype: 'loginpage'  
                },
                {
                    xtype: 'settingspage'
                },
                {
                    xtype: 'helppage'
                }
                ]
        },
        onPanelTap : function(){
             Ext.Msg.alert('You are loging in');   
        }
});
