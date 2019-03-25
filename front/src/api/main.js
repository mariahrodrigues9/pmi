import axios from 'axios'

const main = axios.create();

main.getOrPost = (method, path, data, config = {}) => {
  const apiUrl = `http://localhost:3000/users/${path}`
  const promise = main[method](apiUrl, data, config)
  .then(async (response) => {
    return response.data
  })
  .catch(error => {
    if (error.response && error.response.data) {
      return error.response.data
    }
    if (method === 'post') {
      alert('Erro de servidor, tente novamente');
    }
    return {errors: {}}
  })
  return promise;
}

export default main