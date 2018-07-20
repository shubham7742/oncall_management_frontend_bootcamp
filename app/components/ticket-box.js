import Component from '@ember/component';
import {hash} from 'rsvp';
import EmberENV from 'oncall-management-frontend/config/environment';

export default Component.extend({
	 ticket: {
		heading: '',
		description: '',
		teamId: '',
		assignee:'',
		severity:'',
		escalationDurations:15,

	},
	
	actions: {
		createTicketSubmit(ticket) {
			var self = this;
			console.log(ticket);
			Ember.set(ticket,'severity',parseInt(Ember.get(ticket, 'severity'),10))
			Ember.set(ticket,'assignee',parseInt(Ember.get(ticket, 'assignee'),10))
			Ember.set(ticket,'teamId',parseInt(Ember.get(ticket, 'teamId'),10))
			Ember.set(ticket,'escalationDurations',[parseInt(Ember.get(ticket, 'escalationDurations'),10)])
			console.log("Creating ticket...");
			ticket["reporter"] = localStorage["oncall_uuid"];
			console.log(ticket);
			self.get('ajax').request(EmberENV.baseUrl + '/api/tickets', {
				'data': ticket,
				'method': 'POST',
				'contentType': "application/json; charset=utf-8",
				headers: ()=> {return{
					"context": "user",
					"token":localStorage["oncall_uuid"]
				}}

			})
		},
	},
	// getEscTime(levels){
	// 	var self = this;
		
	// 	return self.get('ajax').request(self.baseUrl + '/getEscTime'+'/'+ teamId+'/' + levels, {
	// 			'method': 'GET',
 //     })
	// }
});






