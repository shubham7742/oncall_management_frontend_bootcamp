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
	 		teamTicketList: Ember.A(self.get('ajax').request(EmberENV.baseUrl+'/tickets'+'/'+ params.team_id ,{
	 			method: 'GET'
	 		}).then(function(j){return j;})),
	 		
	 	});
	 	// return this.store.createRecord('employee');
	 },
	

	 // actions: {
	 // 	teamTicketlist() { 
	 // 		return self.get('ajax').request(self.baseUrl+'/tickets'+'/'+ params.team_id , {
	 // 			method: 'GET'
	 // 		})
	 // 	}
	 	
	 
	 });
