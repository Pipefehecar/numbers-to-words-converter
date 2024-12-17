import axios, { AxiosInstance, AxiosResponse } from 'axios'

axios.defaults.validateStatus = () => true

const axiosInstance: AxiosInstance = axios.create({
	baseURL: process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:3001',
	headers: {
		'Content-Type': 'application/json',
		Accept: 'application/json'
	}
})

axiosInstance.interceptors.response.use(
	(response: AxiosResponse) => {
		return response
	},
	error => {
		console.error('[Response Error]', error)

		if (error.response) {
			const { status, data } = error.response

			if (status === 401) {
				console.error('Unauthorized! Redirecting to login...')
			} else if (status === 500) {
				console.error('Server error. Please try again later.')
			} else {
				console.error(data.message || 'An error occurred')
			}
		} else if (error.request) {
			console.error('No response from server. Please check your network.')
		} else {
			console.error('Error:', error.message)
		}

		return Promise.reject(error)
	}
)

export default axiosInstance
