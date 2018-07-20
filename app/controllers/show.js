import Controller from '@ember/controller';
import Ember from 'ember';
import EmberENV from 'oncall-management-frontend/config/environment';

export default Controller.extend({
	ticket:{
    heading:'',
	description:'',
	teamId: '',
	assignee: '',
	severity: '',
	escalationDurations:'',
	},
	log:{
		ticketId:'',
        empId:'',
        logMessage:''
	},
	actions:{
		editTicket(ticket){
             var self = this;
			console.log(ticket);
			console.log(ticket.createdAt);
			console.log(ticket.updatedAt);
			Ember.set(ticket,'severity',parseInt(Ember.get(ticket, 'severity'),10))
			Ember.set(ticket,'id',parseInt(Ember.get(ticket, 'id'),10))
			Ember.set(ticket,'reporter',parseInt(Ember.get(ticket, 'reporter'),10))
			Ember.set(ticket,'assignee',parseInt(Ember.get(ticket, 'assignee'),10))
			Ember.set(ticket,'teamId',parseInt(Ember.get(ticket, 'teamId'),10))
			 // var a=(new Date(Date.parse(ticket.createdAt))).toLocaleDateString().split("/")
    //           console.log(a)
    //           Ember.set(ticket, 'createdAt',[a[2],("0"+a[0]).slice(-2),("0"+a[1]).slice(-2)].join("-"))
    //           var a=(new Date(Date.parse(ticket.updatedAt))).toLocaleDateString().split("/")
    //           console.log(a)
    //           Ember.set(ticket, 'updatedAt',[a[2],("0"+a[0]).slice(-2),("0"+a[1]).slice(-2)].join("-"))
    delete ticket.updatedAt;
    delete ticket.createdAt;
			Ember.set(ticket,'escalationDurations',[parseInt(Ember.get(ticket, 'escalationDurations'),10)])
			console.log("Editing ticket....");
			console.log(ticket);
			Ember.$.ajax(EmberENV.baseUrl + '/api/tickets'+'/'+ ticket.id,{
				'data': JSON.stringify(ticket),
				'method': 'PUT',
				'contentType': "application/json; charset=utf-8"

			})
		},
		createLogSubmit(log, a) {
			var self = this;
			console.log("log=");
			console.log(self);
			log.empId=localStorage["oncall_uuid"];
			log.ticketId=a;
			console.log(a);
			console.log("Creating log...");
			console.log(log);

			//Ember.set(log,'ticketId',parseInt(Ember.get(log, 'ticketId'),10))
			Ember.set(log,'empId',parseInt(Ember.get(log, 'empId'),10))

			Ember.$.ajax(EmberENV.baseUrl + '/logs', {
				'data': JSON.stringify(log),
				'method': 'POST',
				'contentType': "application/json; charset=utf-8"

			}
			)
		},
	}
});
