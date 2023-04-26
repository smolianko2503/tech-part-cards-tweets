import axios from 'axios';

const BASE_URL = 'https://64452c77b80f57f581b3210f.mockapi.io/cards';

export async function getTweetsCards(page) {
  const response = await axios.get(`${BASE_URL}?page=${page}&limit=3`);
  return response.data;
}

export async function getOllTweetsCards() {
  const response = await axios.get(`${BASE_URL}`);
  return response.data;
}

export async function updateFollowers(id, followers) {
  const response = await axios.put(`${BASE_URL}/${id}`, followers);
  return response.data;
}
