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
	 		ticketList: Ember.A(self.get('ajax').request(EmberENV.baseUrl+'/tickets', {
	 			method: 'GET'
	 		})),
	 		ticket:{
               heading: '',
		       description: '',
		       teamId: '',
		       assignee:'',
		       severity:'',
		       escalationDurations:'',
	 		},
	 		editTicket: t=>{       
                var self = this
                
                Ember.set(ticket,'severity',parseInt(Ember.get(ticket, 'severity'),10))
			Ember.set(ticket,'assignee',parseInt(Ember.get(ticket, 'assignee'),10))
			Ember.set(ticket,'teamId',parseInt(Ember.get(ticket, 'teamId'),10))
			Ember.set(ticket,'escalationDurations',[parseInt(Ember.get(ticket, 'escalationDurations'),10)])
			 console.log('Creating ticket....');
			 console.log(ticket);
                self.get('ajax').request(EmberENV.baseUrl + '/tickets'+'/' +params.ticket_id, {
				'data': ticket,
				'method': 'PUT',
				'contentType': "application/json; charset=utf-8"

	     })
	}
	 		
	 		
	 	});
	 	// return this.store.createRecord('employee');
	 },
	  
	   
});
