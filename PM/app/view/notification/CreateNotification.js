/**
 * @class PM.view.notification.CreateNotification
 * @extends Ext.Container
 * Description
 */
Ext.define('PM.view.notification.CreateNotification', {
    extend: 'Ext.Container',
    xtype: 'createnotification',
    requires: [
        'PM.view.Navigation'
    ],
    

    config: {
        title: 'Create',
        id: 'createnotification',
        iconCls : 'user',

        items : [
        {
        	xtype: 'panel',

            title: 'createnotification',
            items: [
            {
                xtype: 'fieldset',
                id: '',
                title: 'Create Notification',
                
                defaults: {
                    labelWidth: '60%'
                },

                items: [
                {
                        xtype         : 'selectfield',
                        name          : 'notification_type',
                        label         : 'Notification Type',
                       options: [{
	                        text: 'NotifiType1',
	                        value: 'NotifiType1'
	                    }, {
	                        text: 'NotifiType2',
	                        value: 'NotifiType2'
	                    },
	                    {
	                        text: 'NotifiType3',
	                        value: 'NotifiType3'
	                    },
	                    {
	                        text: 'NotifiType4',
	                        value: 'NotifiType4'
	                    },
	                    {
	                        text: 'NotifiType5',
	                        value: 'NotifiType5'
	                    }],

                        required : true,
                        autoCapitalize: true,
                    },
                    {
                        xtype      : 'textfield',
                        name       : 'functional_loc',
                        label      : 'Functional Location',
                        clearIcon  : true
                    },
                     {
                        xtype      : 'textfield',
                        name       : 'equipment',
                        label      : 'Equipment',
                        clearIcon  : true
                    },
                     {
                        xtype      : 'textfield',
                        name       : 'description',
                        label      : 'Description',
                        required	: true,
                        clearIcon  : true
                    },
                    {
                        xtype      : 'textfield',
                        name       : 'long-description',
                        label      : 'Long Desc',
                        clearIcon  : true
                    },
                    {
                        xtype      : 'checkboxfield',
                        name       : 'breakdown',
                        label      : 'Breakdown'
                    },
                    {
                        xtype         : 'selectfield',
                        name          : 'code',
                        label         : 'Code',
                       options: [{
                            text: 'None',
                            value: 'none'
                        }, {
                            text: 'Q1A',
                            value: 'Q1A'
                        },
                        {
                            text: 'Q1B',
                            value: 'Q1B'
                        },
                        {
                            text: 'Q1C',
                            value: 'Q1C'
                        },
                        {
                            text: 'Q1D',
                            value: 'Q1D'
                        }],
                        autoCapitalize: true,
                    },
                    {
                        xtype         : 'selectfield',
                        name          : 'priority',
                        label         : 'Priority',
                       options: [{
                            text: 'None',
                            value: 'none'
                        }, {
                            text: 'High',
                            value: 'high'
                        },
                        {
                            text: 'Medium',
                            value: 'medium'
                        },
                        {
                            text: 'Low',
                            value: 'low'
                        }],
                        autoCapitalize: true,
                    },
                    {
                        xtype      : 'selectfield',
                        name       : 'planner-group',
                        label      : 'Planner Group',
                        options: [{
                            text: 'M01',
                            value: 'm01'
                        }, {
                            text: 'M02',
                            value: 'm02'
                        },
                        {
                            text: 'M03',
                            value: 'm03'
                        },
                        {
                            text: 'M04',
                            value: 'M04'
                        }],
                    },
                    
                     {
                        xtype      : 'datepickerfield',
                        name       : 'early_date',
                        label      : 'Early Start Date',
                        clearIcon  : true
                    },
                    
                    {
                        xtype  : 'container',
                        layout: 'hbox',
                        width: '100%',
                        defaults: {
                            
                            style: 'margin: .5em',
                            flex : 1
                        },

                        items : [
                        {
                            xtype: 'label',
                            html: '<h2 style="margin: 10px auto 0px 10px">Attachment</h2>',
                            flex : 5
                        },

                        {
                            xtype: 'button',
                                 text: 'Camera',
                                 ui: 'normal',
                                 flex : 1
                        },
                        {
                            xtype      : 'filefield',
                            name       : 'attachment',
                            text : 'Browse',
                            labelWidth : '30',
                       
                        accept: 'image',
                        flex : 2,
                        clearIcon  : true
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
                                 text: 'Create',
                                 ui: 'confirm'
                                 
                         },
                         {
                                 xtype: 'button',
                                 text: 'Clear',
                                 ui: 'decline'
                         }
                        ]
                        
                    }]
            }]
        }]
    }
});