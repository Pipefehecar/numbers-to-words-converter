import { NumberConversionForm } from '@/components'
import { cn } from '@/lib'

export default function Home() {
	return (
		<main className={cn('flex border h-screen', 'items-center justify-center','bg-gradient-to-r from-rose-100 to-teal-100')}>
			<NumberConversionForm />
		</main>
	)
}
