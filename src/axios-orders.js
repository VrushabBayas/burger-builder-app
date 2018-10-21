import axios from 'axios';

const instance = axios.create({
	baseURL: 'https://burger-builder-app-bf744.firebaseio.com/'
});

export default instance;
