import Route from '@ember/routing/route';
import Ember from 'ember';
import { hash } from 'rsvp';
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
	 		teamList: Ember.A(self.get('ajax').request(EmberENV.baseUrl+'/api/teams', {
	 			method: 'GET',
	 			headers:{
	 				context: 'admin',
	 				token: 'admin'

	 			}
	 		})),
	 		// ticketsOfTeam: teamId=>{console.log(teamId); return self.get('ajax').request(self.baseUrl+'/tickets'+'/'+'2' ,{method:'GET'})}
	 		 //Ember.A(self.get('ajax').request(self.baseUrl+'/tickets'+'/'+teamId , {
	 			//method: 'GET'
	 	//})),
	 	// return this.store.createRecord('employee');
	 })},
	 // actions: {
	 // 	teamList() { 
	 // 		return self.get('ajax').request(self.baseUrl+'/teams', {
	 // 			method: 'GET'
	 // 		})
	 // 	},
	 	
	 // }
});
