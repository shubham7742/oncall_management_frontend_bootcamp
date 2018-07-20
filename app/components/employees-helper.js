import Component from '@ember/component';
import { storageFor } from 'ember-local-storage';

export default Component.extend({
	actions: {
		setUuid(uuid){
			localStorage["oncall_uuid"]=uuid;
		}
	}
});
