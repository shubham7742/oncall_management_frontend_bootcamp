import Component from '@ember/component';

export default Component.extend({
	baseUrl: 'http://localhost:8080',
	employee: {
		name: '',
		managerId: null,
		email: ''
	},
	actions: {
		createEmployeeSubmit(employee) {
			var self = this;
			console.log("Creating employee...");
			console.log(employee);
			self.get('ajax').request(self.baseUrl + '/employees', {
				'data': employee,
				'method': 'POST'
			})
		}
	}
});
