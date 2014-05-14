/**
 * @class PM.controller.Main
 * @extends Ext.app.Controller
 * Description
 */
Ext.define('PM.controller.Main', {
    extend: 'Ext.app.Controller',
    requires : ['Ext.data.JsonP'],
    
    config: {

        refs : {
        	homeButton : 'button[action=goHome]',
            jsonrequest : 'button[action=jsonrequest]',
        	appviewport : 'app_viewport'
        },
        control : {
        	homeButton : {
        		tap : 'goHome'
        	},
            jsonrequest : {
                tap : 'makeJSONrequest'
            }

        }
    },
    goHome : function(){
    	var view=this.getAppviewport();
		var container = Ext.ComponentQuery.query('#maincont')[0];
		/*
		if(container.child('#maincomp')){
			container.remove(container.child('#maincomp'));
		}
		if(container.child('#jobq')){
			container.remove(container.child('#jobq'));
		}*/
		container.removeAll(true);
		container.add({
			xtype: 'maincontainerpage'
		});
    },
    makeJSONrequest : function(){
        Ext.Viewport.mask();
        var view=this.getAppviewport();
        var container = Ext.ComponentQuery.query('#maincont')[0];
        Ext.data.JsonP.request({
            //we give it the url to the free worldweatheronline.com api
            url: 'http://localhost:7001/Maintenance/api/v1/status',

            //the callbackKey is used for JSONP requests
            callbackKey: 'callback',

            //now we define the params to be sent to the server
           

            //now we define a callback method which is called when the JSONP response is successful.
            success: function(result) {
                //the result is a json object which is returned by the API we just requested.
                //in this case all we want is the data.weather property, which is an array
                Ext.Msg.alert('Success', 'Data Retrieved');


                
                console.log(result);
                container.removeAll(true);
                container.add({
                    xtype: 'panel',
                    html: 'Hello'
                });

                Ext.Viewport.unmask();

                //and finally unmask the content view
            
            },
            
            failure: function() {
                Ext.Msg.alert('Error', 'There was an error retrieving the weather.');
                Ext.Viewport.unmask();
            }
        });
    }
});