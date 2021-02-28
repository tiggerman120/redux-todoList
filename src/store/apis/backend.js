import axios from 'axios';

export default axios.create({
  baseURL: "https://garrett-bearer-auth.herokuapp.com"
});