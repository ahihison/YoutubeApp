import axios from "axios";

export const BASE_URL = "https://youtube-v31.p.rapidapi.com";

// const options = {
//   params: {
//     maxResults: 50,
//   },
//   headers: {
//     "X-RapidAPI-Key": "14fe2f5380msh35f9f5b53030ecdp134c52jsn6617e616a460",
//     "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
//   },
// };
// import axios from "axios";

const options = {
  params: {
    maxResults: "50",
  },
  headers: {
    "X-RapidAPI-Key": "14fe2f5380msh35f9f5b53030ecdp134c52jsn6617e616a460",
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

// axios
//   .request(options)
//   .then(function (response) {
//     console.log(response.data);
//   })
//   .catch(function (error) {
//     console.error(error);
//   });
export const fectchFromApi = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  return data;
};
