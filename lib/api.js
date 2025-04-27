import axios from 'axios';
import config from '../posts-config.json';

export const fetchPosts = async () => {
  const requests = config.posts.map(url => axios.get(url));
  const responses = await Promise.all(requests);
  return responses.map(res => res.data);
};