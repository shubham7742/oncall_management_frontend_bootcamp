import Component from '@ember/component';
import Ember from 'ember';
import EmberENV from 'oncall-management-frontend/config/environment';
export default Component.extend({
	log: {
		ticketId: '',
		empId: '',
		logMessage: ''
	
	},
	actions: {
		createLogSubmit(log) {
			var self = this;
			console.log("Creating log...");
			console.log(log);
			Ember.set(log,'ticketId',parseInt(Ember.get(log, 'ticketId'),10))
			Ember.set(log,'empId',parseInt(Ember.get(log, 'empId'),10))
			self.get('ajax').request(EmberENV.baseUrl + '/logs', {
				'data': log,
				'method': 'POST',
				'contentType': "application/json; charset=utf-8"

			}
			)
		},
		
	}
});
