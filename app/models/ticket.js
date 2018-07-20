import DS from 'ember-data';

export default DS.Model.extend({
   heading:DS.attr('string'),
	description:DS.attr('string'),
	teamId: DS.attr('number'),
	assignee: DS.attr('number'),
	severity: DS.attr('number'),
	escalationDurations:DS.attr()
});
