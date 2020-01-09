import api from '../config/api';

export default {
	login: (email, password) => api.post('/login', { 
		"email": email,
		"password": password
	})
};
