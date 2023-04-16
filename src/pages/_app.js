import '@/styles/globals.css'
import Head from 'next/head'
import { Montserrat } from 'next/font/google'
import NavBar from '@/components/NavBar.js'
import Footer from '@/components/Footer.js'
import { AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/router'

const montserrat = Montserrat({
	subsets: ['latin', 'cyrillic'],
	variable: '--font-mont'
})

export default function App({ Component, pageProps }) {
	const router = useRouter()
	return (
		<>
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main className={`${montserrat.variable} font-mont bg-light w-full min-h-screen dark:bg-dark`}>
				<NavBar />
				<AnimatePresence mode='wait'>
					<Component key={router.asPath} {...pageProps} />
				</AnimatePresence>
				<Footer />
			</main>
		</>
	)
}
