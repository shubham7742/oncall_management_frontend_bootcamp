import Route from '@ember/routing/route';
import { hash } from 'rsvp';
import Ember from 'ember';
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
	 		teamList: Ember.A(self.get('ajax').request(EmberENV.baseUrl+'/api/teams', {
	 			method: 'GET',
	 			headers:  {
	 				token: "admin",
	 				context:"admin"
	 			},
	 		})),
	 	});
	 	// return this.store.createRecord('employee');
	 },
	 // actions: {
	 // 	teamList() { 
	 // 		return self.get('ajax').request(self.baseUrl+'/teams', {
	 // 			method: 'GET'
	 // 		})
	 // 	}
	 // }
});
