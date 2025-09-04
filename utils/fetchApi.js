import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      'x-rapidapi-host': 'bayut.p.rapidapi.com',
      'x-rapidapi-key': '1538f9f8d9msh1b6e85fb3ccec9cp148117jsn0569c0e8477e', 
    },
  });

  return data;
};

