import DS from 'ember-data';

export default DS.Model.extend({
ticketId:DS.attr('number'),
empId:DS.attr('number'),
logMessage:DS.attr('string')
});
