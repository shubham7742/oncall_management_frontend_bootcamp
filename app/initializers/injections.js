export function initialize(application) {
  // application.inject('route', 'foo', 'service:foo');

	application.inject('service:apis', 'ajax', 'service:ajax');
	application.inject('route', 'ajax', 'service:ajax');
	application.inject('component', 'ajax', 'service:ajax');

}

export default {
	name: 'injections',
	initialize
};
