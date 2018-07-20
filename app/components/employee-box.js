import Component from '@ember/component';
import Ember from 'ember';
import EmberENV from 'oncall-management-frontend/config/environment';
export default Component.extend({
	employee: {
		"name": '',
		"managerId": 0,
		"email": '',
		"phoneNo":''
	},
	teamEmployeeRelation:{
         "teamId":'',
         "empId":'',
         "oncallOrder":''
	},
	teamEmployee:'',
	actions: {
		createEmployeeSubmit(employee, teamEmployee) {
			var self = this;
			console.log("Creating employee...");
			console.log(employee);
			Ember.set(employee,'managerId',parseInt(Ember.get(employee, 'managerId'),10))
			self.get('ajax').request(EmberENV.baseUrl + '/api/employees', {
				'data': employee,
				'method': 'POST',
				'contentType': "application/json; charset=utf-8",
                 success:function(data){
                 	console.log(self);
                       var arr=self.get('teamEmployee').split("(");

                       var i=0;
                       for(i=1;i<arr.length;i++)
                       {
                           var arr1=arr[i].split(",");
                           var a,b;
                           a=parseInt(arr1[0]);
                          var c=arr1[1].split(")");
                          b=parseInt(c[0]);
                          Ember.set(self.get('teamEmployeeRelation'),'teamId',a);
                          Ember.set(self.get('teamEmployeeRelation'),'empId',data.id);
                          Ember.set(self.get('teamEmployeeRelation'),'oncallOrder',b);
                          console.log(a,b,data.id);
                          self.get('ajax').request(EmberENV.baseUrl + '/api/team_employee', {
				           'data': self.get('teamEmployeeRelation'),
				            'method': 'POST',
				            'contentType': "application/json; charset=utf-8"

                       })
                 
		}
	}
 })},
		submitConfirm(employee){
			// this.get('onConfirm')();
			console.log("submitting...");
			console.log(employee);
			console.log(this.getEmployee);
		}
	}
});

