const config = {
    development: {
        API_URL: 'http://localhost:5000'
    },
    production: {
        API_URL: 'http://localhost:5000'
    }
}

export default config[process.env.NODE_ENV]