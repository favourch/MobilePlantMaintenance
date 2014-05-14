Ext.define('PM.controller.App',{
				extend: 'Ext.app.Controller', 
				requires : [
					'PM.view.jobqueue.JobQueue',
					'PM.view.notification.CreateNotification',
					'PM.view.notification.Notification',
					'PM.view.notification.Main',
					'PM.view.workorders.Main',
        			'PM.view.workorders.Viewport'
				],   
				config:{
								refs:{
												main : 'main',
												maincontainer : 'maincontainerpage',
												homeButton : 'button[action=goHome]',
												navigation : 'navigation',
												appviewport : 'app_viewport',
												mainContainer : 'maincontainer',
												navBtn : 'button[name="nav_btn"]',
												loginbutton : 'button[name="loginbutton"]',
												na : 'button[name="na"]',
												titlebar: '#titlebar'
								},
				
								control : {
												homeButton : {
														tap: 'clearNav'
												},
												navBtn : {
																tap : 'toggleNav'
												},
												loginbutton : {
													tap : 'doLogin'
												},
												maincontainer : {
													tap : 'toggleNav'
												},
												navigation : {
																itemtap : 'slideMenuHandler',
												}

								}
				},
				
				/**
				 * Toggle the slide navogation view
				 */
				doLogin : function(){
					Ext.Msg.alert('You are logging in');
					
				},
				toggleNav : function(){

								var me = this,
								mainEl = me.getMaincontainer().element;
								
								if (mainEl.hasCls('out')) {
												mainEl.removeCls('out').addCls('in'); 
												me.getMaincontainer().setMasked(false);
								} else {
												mainEl.removeCls('in').addCls('out');  
												me.getMaincontainer().setMasked(true);
								}
				},
				/* clear Nav if the navigation is shown */
				clearNav : function(){

								var me = this,
								mainEl = me.getMaincontainer().element;
								
								if (mainEl.hasCls('out')) {
												mainEl.removeCls('out').addCls('in'); 
												me.getMaincontainer().setMasked(false);
								}
				},
				slideMenuHandler: function(list, index, target, record){
					//this.getMain().destroy();
					//Ext.Viewport.add(this.getHomeView());
					this.toggleNav();
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
					/*container.add({
								xtype: 'createnotification'
							});
					*/
					switch(index){
						case 0:
							container.add({
								xtype: 'jobqueue_viewport'
							});
							break;
						case 1:
							container.add({
								xtype: 'notification'
							});
							break;
						case 2:
							container.add({
								xtype: 'workodersviewport'
							});
							break;
						case 3:
							container.add({
								xtype: 'jobqueue'
							});
							break;
						case 4:
							container.add({
								xtype: 'settingspage'
							});
							break;
						case 5:
							container.add({
								xtype: 'helppage'
							});
							break;
					}
					
				},
				toggleNava : function(){

								
				},
				messagePopUp : function(){
					Ext.Msg.alert('I was painted to the screen');
				}
});