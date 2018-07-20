import Component from '@ember/component';

export default Component.extend({
	baseUrl: 'http://localhost:8080',
	 ticket: {
		heading: '',
		description: '',
		teamId: '',
		assignee:'',
		severity:'',
		escalationDurations:'',

	},
	actions: {
		editTicket(ticket) {
			var self = this;
			console.log(ticket);
			Ember.set(ticket,'severity',parseInt(Ember.get(ticket, 'severity'),10))
			Ember.set(ticket,'assignee',parseInt(Ember.get(ticket, 'assignee'),10))
			Ember.set(ticket,'teamId',parseInt(Ember.get(ticket, 'teamId'),10))
			Ember.set(ticket,'escalationDurations',[parseInt(Ember.get(ticket, 'escalationDurations'),10)])
			console.log("Creating ticket...");
			console.log(ticket);
			self.get('ajax').request(self.baseUrl + '/tickets'+'/' ,{
				'data': ticket,
				'method': 'PUT',
				'contentType': "application/json; charset=utf-8"

			})
		},
	},
});
