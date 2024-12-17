import { ConvertNumberToWordResponse } from '@/types'
import axiosInstance from '../axios.config'
import { Endpoints } from '../endpoints'

export const convertNumberToWord = async (
	numberToConvert: number
): Promise<string | null> => {
	try {
		const response = await axiosInstance.post<ConvertNumberToWordResponse>(
			Endpoints.POST_CONVERT_NUMBER_TO_WORD,
			{
				number: numberToConvert
			}
		)

		if (response.data) {
			return response.data.words
		}
        
		return null
	} catch (error) {
		console.error(error)
		return null
	}
}

export const getLastFiveConversions =async (): Promise<ConvertNumberToWordResponse[] | null > => {
    try {
		const response = await axiosInstance.get<ConvertNumberToWordResponse[]>(
			Endpoints.GET_LAST_FIVE_CONVERSIONS,
			
		)

		if (response.data) {
			return response.data
		}
        
		return null
	} catch (error) {
		console.error(error)
		return null
	}
}