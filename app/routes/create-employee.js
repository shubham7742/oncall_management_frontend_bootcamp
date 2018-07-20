import Route from '@ember/routing/route';
import { hash } from 'rsvp';
import Ember from 'ember';
import EmberENV from 'oncall-management-frontend/config/environment';

export default Ember.Route.extend({
	 model(params) {
	 	var self = this;
	 	return hash({
	 		selectOptions: [ 
	 			{ value: 'F', display_name: 'F' }, 
	 			{ value: 'A', display_name: 'A' }, 
	 			{ value: 'B', display_name: 'B' } 
	 		],
	 		employeeList: Ember.A(self.get('ajax').request(EmberENV.baseUrl+'/api/employees', {
	 			method: 'GET',
	 			// headers:{
	 				// token: localStorage["oncall_uuid"]
	 			// }
	 		})),
	 		
	 	});
	 	// return this.store.createRecord('employee');
	 },
	 actions: {
	 	employeeList() { 
	 		return self.get('ajax').request(self.baseUrl+'/employees', {
	 			method: 'GET'
	 		})
	 	}
	 	
	 }
});
