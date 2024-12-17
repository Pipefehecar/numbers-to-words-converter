'use client'
import { cn, numberConvertionValidationSchema } from '@/lib'
import { convertNumberToWord, getLastFiveConversions } from '@/services'
import { ConvertNumberToWordResponse, ConvertionFormData } from '@/types'
import { ArrowPathIcon, ChevronDownIcon } from '@heroicons/react/24/solid'
import { yupResolver } from '@hookform/resolvers/yup'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

export const NumberConversionForm: React.FC = () => {
	const [isLoading, setIsLoading] = useState(false)
	const [wordsConverted, setWordsConverted] = useState<string>()
	const [lastFiveConversions, setLastFiveConversions] =
		useState<ConvertNumberToWordResponse[]>()
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm<ConvertionFormData>({
		mode: 'onChange',
		resolver: yupResolver(numberConvertionValidationSchema)
	})
	const onSubmit = async (data: ConvertionFormData) => {
		setIsLoading(true)
		try {
			const response = await convertNumberToWord(data.numberField)

			if (response) {
				setWordsConverted(response)
			}
		} catch (error) {
			console.error(error)
		} finally {
			setIsLoading(false)
		}
	}

	const onShowLastFiveResults = async () => {
		if (lastFiveConversions && lastFiveConversions.length > 0) {
			setLastFiveConversions([])
			return
		}
		try {
			const response = await getLastFiveConversions()
			if (response) {
				setLastFiveConversions(response)
			}
		} catch (error) {}
	}
	return (
		<div className={cn('w-1/3')}>
			<div
				className={cn(
					'border relative',
					'bg-white',
					'p-4 rounded-xl pb-12',
					'w-full',
					'gap-4',
					'flex flex-col'
				)}
			>
				<div className={cn('flex w-full border-b pb-2')}>
					<h2 className={cn('text-xl font-bold')}>📝 Wordify Numbers </h2>
				</div>
				<div className={cn('flex flex-col w-full pb-2 gap-2')}>
					<p>Convert your numbers into words instantly with just one click!</p>
					<form
						onSubmit={handleSubmit(onSubmit)}
						className={cn('flex flex-col gap-4')}
					>
						<div className={cn('flex flex-col gap-2', 'w-full')}>
							<input
								{...register('numberField')}
								className={cn('flex w-full', 'border rounded-xl p-4')}
								placeholder="e.g., 123456"
								type="number"
								min={0}
							/>
							{errors.numberField && (
								<p role="alert" className="text-red-500">
									{errors.numberField.message}
								</p>
							)}
						</div>
						<button
							type="submit"
							className={cn(
								'bg-gradient-to-r from-indigo-400 to-cyan-400',
								'border',
								'p-2 w-16 h-16 rounded-full',
								'text-black font-semibold',
								'flex items-center justify-center',
								'absolute -bottom-6 left-1/2 transform -translate-x-1/2'
							)}
						>
							<ArrowPathIcon className="size-8 text-white" />
						</button>
					</form>

					{wordsConverted && (
						<div
							className={cn(
								'w-full flex',
								'border border-dashed border-indigo-400',
								'p-4 rounded-xl'
							)}
						>
							<p className="capitalize">{wordsConverted}</p>
						</div>
					)}
				</div>
			</div>
			<div className={cn('w-full mt-5 ')}>
				<button
					type="button"
					onClick={onShowLastFiveResults}
					className=" flex gap-2 items-center"
				>
					<p className="text-indigo-500">Show last 5 conversions</p>
					<ChevronDownIcon
						className={cn('size-5 text-indigo-500')}
					/>
				</button>
				{lastFiveConversions && lastFiveConversions.length > 0 && (
					<div className={cn('rounded-xl', 'bg-white p-4')}>
						{lastFiveConversions.map((conversion, index) => (
							<div className={cn('flex justify-between', 'border-b')}>
								<div className="flex-[0.1]">
									<p>{index + 1}</p>
								</div>
								<div className="flex-[0.3]">
									<p>{conversion.number}</p>
								</div>
								<div className="flex-1">
									<p>{conversion.words}</p>
								</div>
							</div>
						))}
					</div>
				)}
			</div>
		</div>
	)
}
