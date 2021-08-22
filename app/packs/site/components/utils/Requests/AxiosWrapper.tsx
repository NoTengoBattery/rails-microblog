import axios from 'axios'

const AxiosWrapper = axios.create({
  headers: { withCredentials: true }
})

export default AxiosWrapper
