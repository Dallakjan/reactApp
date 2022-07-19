import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID wCJz8fgzuDYhCICsr6iGdKLMRFK58rn9NjWJ9VvnpuI',
  },
});
