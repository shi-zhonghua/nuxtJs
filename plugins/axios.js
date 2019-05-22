import * as axios from 'axios'

let options = {}
if (process.server) {
  options.baseURL = `https://jsonplaceholder.typicode.com/`,
    // options.baseURL = `http://${process.env.HOST || 'jsonplaceholder.typicode.com/'}:${process.env.PORT || 3000}`
}

export default axios.create(options)
