import * as Yup from 'yup'

export const numberConvertionValidationSchema = Yup.object({
	numberField: Yup.number()
		.typeError('Must be a valid number')
		.positive('The number must be positive')
		.max(1_000_000_000_000_000, 'The number cannot exceed one quadrillion')
		.required('This field is required')
})
