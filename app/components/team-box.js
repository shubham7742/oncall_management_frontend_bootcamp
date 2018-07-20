import Component from '@ember/component';
import Ember from 'ember';
import EmberENV from 'oncall-management-frontend/config/environment';

export default Ember.Component.extend({
	team: {
		teamName: '',
	      teamEmail: '',
	      criticality:'',
		oncallStartDate: ''
	},
	
	
	actions: {
		createTeamSubmit(team) {
			var self = this;
			console.log("Creating team...");
			console.log(team);
			Ember.set(team,'criticality',parseInt(Ember.get(team, 'criticality'),10))
			var a;
			if (team.oncallStartDate!="") {
				a=(new Date(Date.parse(team.oncallStartDate))).toLocaleDateString().split("/")
			} else {
				a=(new Date().toLocaleDateString()).split("/")
			}
              console.log(team.oncallStartDate);
              console.log("a=")
              console.log(a)
              Ember.set(team, 'oncallStartDate',[a[2],("0"+a[0]).slice(-2),("0"+a[1]).slice(-2)].join("-"))
              console.log(team)
			self.get('ajax').request(EmberENV.baseUrl + '/api/teams', {
				'data': team,
				'method': 'POST',
				'contentType': "application/json; charset=utf-8",
				headers:{
					context:"admin",
					token:"admin"
				}
			})
		},
		
  
	}
});





