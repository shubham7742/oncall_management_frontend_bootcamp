import Route from '@ember/routing/route';
import { hash } from 'rsvp';
import Ember from 'ember';

export default Route.extend({
	baseUrl: 'http://localhost:8080',
	model(params) {
		var self = this;
		return hash({
			selectOptions: [ 
				{ value: 'F', display_name: 'F' }, 
				{ value: 'A', display_name: 'A' }, 
				{ value: 'B', display_name: 'B' } 
			],
			employeeList: Ember.A(self.get('ajax').request(self.baseUrl+'/employees', {
				method: 'GET'
			}))
		});
	},
	actions: {
		employeeList() { 
			return self.get('ajax').request(self.baseUrl+'/employees', {
				method: 'GET'
			})
		}
	}
});
