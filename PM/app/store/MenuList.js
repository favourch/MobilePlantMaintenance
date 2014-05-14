/**
 * @class PM.store.MenuList
 * @extends Ext.data.Store
 * Description
 */
Ext.define('PM.store.MenuList', {
    extend: 'Ext.data.Store',

    config: {
        model: 'PM.model.Menu',
        data: [
        	{
        		itemname: 'Task List',
        	},
        	{
        		itemname: 'Notifications'
        	},
        	{
        		itemname: 'Work Orders'
        	},
            {
                itemname: 'Confirmations'
            },
            {
                itemname: 'Materials'
            },
        	{
        		itemname: 'Bills of Material'
        	},
        	{
        		itemname: 'Configuration'
        	},
        	{
        		itemname: 'Help/Documentation'
        	}
        ]
    }
});				