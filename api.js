const Axios = require("axios")
const qs = require('querystring')
const http = require('http');
const https = require('https');

function delay(time) {
	return new Promise(resolve => setTimeout(resolve, time))
}

class ApiError extends Error {

}

class VkApi {
	constructor(token, lang = 'ru', version = '5.103') {
		this.lang = lang
		this.version = version
		this.token = token
		this.http = Axios.create({
			httpAgent: new http.Agent({ keepAlive: true }),
			httpsAgent: new https.Agent({ keepAlive: true }),
			timeout: 1000 * 60 * 5,
		})
	}

	call(method, params = {}, raw = false) {
		if (!params.v) {
			params.v = this.version
		}

		if (!params.lang) {
			params.lang = this.lang
		}

		if (!params.access_token) {
			params.access_token = this.token
		}

		return this.http.post(`https://api.vk.com/method/${method}`, qs.stringify(params))
			.catch(e => {
				throw new Error(e.message)
			})
			.then(response => {
				const {data, status, headers} = response

				if (status !== 200) {
					const e = new ApiError("Bad response status " + status)
					e.data = data
					e.headers = headers
					throw e
				}

				if (typeof data.response !== "undefined") {
					if (raw) {
						return data
					} else {
						return data.response
					}
				} else if (typeof data.error !== "undefined") {
					const msg = `VkApiError: ${method} #${data.error.error_code} ${data.error.error_msg} \n`
					const e = new ApiError(msg)
					e.code = parseInt(data.error.error_code, 10)
					throw Object.assign(e, data.error)
				} else {
					throw data
				}
			})
	}
}


function chunkArray(myArray, chunk_size) {
	const arrayLength = myArray.length
	const tempArray = []

	for (let index = 0; index < arrayLength; index += chunk_size) {
		const myChunk = myArray.slice(index, index + chunk_size)
		// Do something if you want with the group
		tempArray.push(myChunk)
	}

	return tempArray
}


module.exports = {VkApi, delay}
