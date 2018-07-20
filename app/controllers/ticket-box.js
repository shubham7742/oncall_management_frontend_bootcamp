import Controller from '@ember/controller';
import {observer}from '@ember/object';

export default Controller.extend({

	teamIdobserved: oberserver('teamId', function() {
		console.log(this.get('teamId'));
	}),

	baseUrl: 'http://172.17.32.218:8080',
	 		assigneeList: Ember.A(Ember.$.ajax(this.get('baseUrl')+'/api/employees?team='+1, {
	 			method: 'GET',
	 			headers:  {
	 				token: localStorage["oncall_uuid"],
	 				context:"user"
	 			},
	 			success: function(data) {
	 				console.log(data);
	 			}}
	 			))
	 		
	 	
	 	// return this.store.createRecord('employee');
	 
});
