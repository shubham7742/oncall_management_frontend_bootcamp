import DS from 'ember-data';

export default DS.Model.extend({
teamName:DS.attr('string'),
teamEmail:DS.attr('string'),
crticality:attr('number'),
oncallStartDate:DS.attr('date')
});
