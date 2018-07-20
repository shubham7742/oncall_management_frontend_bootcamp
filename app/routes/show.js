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
	 		singleTicket: Ember.A(self.get('ajax').request(EmberENV.baseUrl+'/api/tickets'+'/'+ params.ticket_id ,{
	 			method: 'GET',
	 			headers: {
	 				context: 'user',
	 				token: localStorage["oncall_uuid"]
	 			}
	 		}).then(function(j){console.log(j); return j;})),
	 		logList: Ember.A(self.get('ajax').request(EmberENV.baseUrl+'/logs'+'/'+ params.ticket_id, {
	 			method: 'GET'
	 		})),
	 		empList: Ember.A(self.get('ajax').request(EmberENV.baseUrl+'/api/employees', {
	 			method: 'GET',
	 			headers:{
	 				context: "user",
	 				token: localStorage["oncall_uuid"]
	 			}
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
	

	 // actions: {
	 // 	singleticket() { 
	 // 		return self.get('ajax').request(self.baseUrl+'/tickets'+'/'+ params.ticket_id , {
	 // 			method: 'GET'
	 // 		})
	 // 	}
	 	
	 // }
});
