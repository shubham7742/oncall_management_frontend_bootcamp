import Route from '@ember/routing/route';
import Ember from 'ember';
import { hash } from 'rsvp';
import EmberENV from 'oncall-management-frontend/config/environment';

export default Route.extend({
	 model(params) {
	 	var self = this;
	 	return hash({
	 		selectOptions: [ 
	 			{ value: 'F', display_name: 'F' }, 
	 			{ value: 'A', display_name: 'A' }, 
	 			{ value: 'B', display_name: 'B' } 
	 		],
	 		logList: Ember.A(self.get('ajax').request(EmberENV.baseUrl+'/logs', {
	 			method: 'GET'
	 		})),
	 		empList: Ember.A(self.get('ajax').request(EmberENV.baseUrl+'/api/employees', {
	 			method: 'GET'
	 		})),
	 		ticketList:Ember.A(self.get('ajax').request(EmberENV.baseUrl+'/api/tickets', {
	 			method: 'GET',
	 			headers:{
	 				context: "user",
	 				token: localStorage["oncall_uuid"]
	 			}
	 		})),
	 	});
	 	// return this.store.createRecord('employee');
	 },
	 actions: {
	 	logList() { 
	 		return self.get('ajax').request(self.baseUrl+'/logs', {
	 			method: 'GET'
	 		})
	 	}
	 }
});
