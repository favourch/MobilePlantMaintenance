/**
 * @class PM.view.Login
 * @extends Ext.Panel
 * Description
 */
Ext.define('PM.view.Login', {
    extend: 'Ext.Panel',
    xtype: 'loginpage',
    

    config: {
        
		title: 'Login',
        iconCls: 'user',
        items:[{

            xtype: 'panel',
            title: 'login',
            
            items: [
            {
                xtype: 'title',
                title: 'Login'
            },
            {
                xtype: 'fieldset',
                id: '',
                title: 'Enter the login Info below',
                
                defaults: {
                    labelWidth: '35%'
                },
                items: [                            
                    {
                        xtype         : 'numberfield',
                        name          : 'client_no',
                        label         : 'Client No',
                        placeHolder   : '000',
                        autoCapitalize: true,
                        required      : true,
                        clearIcon     : true  
                    },
                    {
                            xtype      : 'textfield',
                            name       : 'username',
                            label: 'Username',
                            required      : true,
                            clearIcon  : true
                        
                        /*name       : 'username',
                        label      : 'Username',
                        required      : true,
                        clearIcon  : true*/

                    },
                    {
                        xtype           : 'passwordfield',
                        required      : true,
                        name            : 'password',
                        label           : 'Password',
                        required      : true
                    }
                ]
            },
            
            {
                xtype:'container',
                    defaults: {
                        
                        style: 'margin: .5em',
                        flex : 1
                    },
                    layout: {
                        type: 'hbox'
                    },
                
                items: [
                 {
                         xtype: 'button',
                         text: 'Login',
                         name: 'loginbutton',
                         ui: 'confirm'
                         
                 },
                 {
                         xtype: 'button',
                         text: 'Cancel',
                         ui: 'decline'
                 }
                ]
                        
            }
            ]
        }]
    }
});