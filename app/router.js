import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('create-employee');
  this.route('create-team');
  this.route('create-ticket');
  this.route('tickets');
  this.route('teams');
  this.route('login');
  this.route('team-tickets',{ path: 'teams/:team_id'});
  this.route('create-log');
  this.route('show', {path: 'tickets/:ticket_id'});
  this.route('edit-ticket', {path: 'tickets/edit/:ticket_id'});
  this.route('admin');
  this.route('dashboard', {path: 'login/:emp_id'});
});

export default Router;
