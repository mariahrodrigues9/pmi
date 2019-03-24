import axios from 'axios'

const main = complement =>
  axios
    .get(
      `https://demo9006285.mockable.io/${
        complement
      }`
    )
    .then(response => {
      return response.data
    })
    .catch((error) => {
      console.log(error);
    });

export default main