/**
 * @class PM.view.notification.SearchNotification
 * @extends Container
 * Description
 */
Ext.define('PM.view.notification.SearchNotification', {
    extend: 'Ext.Container',
    requires: [
        ''
    ],

    xtype: 'searchnotification',
    config: {
        title: 'Search',
        iconCls: 'search',

        items : [
        {
        	xtype: 'panel',

            title: 'searchnotification',
            items: [
            {
                xtype: 'fieldset',
                id: '',
                title: 'Search Notification',
                
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
                        name       : 'description',
                        label      : 'Description',
                        required	: true,
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
                        name       : 'description',
                        label      : 'Description',
                        required	: true,
                        clearIcon  : true
                    },
                     {
                        xtype      : 'datepickerfield',
                        name       : 'early_date',
                        label      : 'Early Start Date',
                        clearIcon  : true
                    },
                    
                     {
                        xtype      : 'datepickerfield',
                        name       : 'early_date',
                        label      : 'Early Start Date',
                        clearIcon  : true
                    },
                    
                     {
                        xtype      : 'datepickerfield',
                        name       : 'early_date',
                        label      : 'Early Start Date',
                        clearIcon  : true
                    },
                    
                     {
                        xtype      : 'datepickerfield',
                        name       : 'early_date',
                        label      : 'Early Start Date',
                        clearIcon  : true
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
                                 text: 'Search',
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