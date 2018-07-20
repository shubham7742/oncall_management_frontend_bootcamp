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
	 		employeeList: Ember.A(self.get('ajax').request(EmberENV.baseUrl+'/api/employees', {
	 			method: 'GET',
	 			// headers: {
	 			// 	'context':'user',
	 			// 	'token' : localStorage["oncall_uuid"]
	 			// }
	 		})),
	 		// ticketsOfTeam: teamId=>{console.log(teamId); return self.get('ajax').request(self.baseUrl+'/tickets'+'/'+'2' ,{method:'GET'})}
	 		 //Ember.A(self.get('ajax').request(self.baseUrl+'/tickets'+'/'+teamId , {
	 			//method: 'GET'
	 	//})),
	 	// return this.store.createRecord('employee');
	 })},
	 // actions: {
	 // 	employeeList() { 
	 // 		return self.get('ajax').request(self.baseUrl+'/employees', {
	 // 			method: 'GET'
	 // 		})
	 // 	},
		// processThis(uuid) {
		// 	alert(uuid);
		// }
	 // }
});
