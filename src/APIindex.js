const axios = require('axios')

const api = axios.create({
    baseURL : 'https://my-json-server.typicode.com/SolarEdition3/Numer_PJ'
})

const getRootofequation = () => api.get('/root_of_equation')
// const getMatrix = () => api.get('/matrix')
// const getMatrixInterpolation = () => api.get('/interpolation')
// const getMatrixRegression = () => api.get('/regression')
const apis = {
    getRootofequation,
    // getMatrix,
    // getMatrixInterpolation,
    // getMatrixRegression
}
export default apis