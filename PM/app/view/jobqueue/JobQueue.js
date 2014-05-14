/**
 * @class PM.view.jobqueue.JobQueue
 * @extends Ext.Panel
 * Description
 */
Ext.define('PM.view.jobqueue.JobQueue', {
    extend: 'Ext.Panel',
    xtype: 'jobqueue',
    requires: [
                'Ext.TitleBar',
                'Ext.field.DatePicker'
        ],

    config: {
            title: 'jobqueuesearch',

            items: [
            {
                xtype: 'fieldset',
                id: '',
                title: 'Job Queue Search',
                defaults: {
                    labelWidth: '60%'
                },

                items: [ 
                                               
                    {
                        xtype         : 'textfield',
                        name          : 'main_work_center',
                        label         : 'Main Work Center',
                        placeHolder   : '',
                        autoCapitalize: true,
                        clearIcon     : true  
                    },
                    {
                        xtype      : 'textfield',
                        name       : 'planner_group',
                        label      : 'Planner Group',
                        required      : true,
                        clearIcon  : true
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
                        name       : 'req_assignment',
                        label      : 'Request Assignment',
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
                        
                    }
                    ]
            }
            ]
    }
});