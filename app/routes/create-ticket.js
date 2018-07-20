import Route from '@ember/routing/route';
import { hash } from 'rsvp';
import Ember from 'ember';
import EmberENV from 'oncall-management-frontend/config/environment';

export default Route.extend({
	 model(params) {
	 	var self = this;
	 	console.log(params)
	 	return hash({
	 		selectOptions: [ 
	 			{ value: 'F', display_name: 'F' }, 
	 			{ value: 'A', display_name: 'A' }, 
	 			{ value: 'B', display_name: 'B' } 
	 		],
	 		// assigneeList: Ember.$.ajax(EmberENV.baseUrl+'/api/employees?team='+params.teamId, {
	 		// 	method: 'GET',
	 		// 	headers:  {
	 		// 		token: localStorage["oncall_uuid"],
	 		// 		context:"user"
	 		// 	}})
	 		
	 	});
	 	// return this.store.createRecord('employee');
	 },
	 // actions: {
	 // 	ticketList() { 
	 // 		return self.get('ajax').request(self.baseUrl+'/tickets', {
	 // 			method: 'GET'
	 // 		})
	 // 	},
	 // // 	 beforeModel(/* transition */) {
  // //   this.transitionTo('tickets'); // Implicitly aborts the on-going transition.
  // // }

	 // },
	   
});
