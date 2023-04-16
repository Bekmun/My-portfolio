import React from 'react'
import Layout from './Layout.js'
import Link from 'next/link'

const Footer = () => {
	return (
		<footer className='w-full border-t-2 border-solid border-dark font-medium text-lg dark:border-light dark:text-light sm:text-base'>
			<Layout className='py-8 flex items-center justify-between md:flex-col md:py-6'>
				<span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
				<div className='flex items-center md:my-1'>
					Построить с <span className='text-2x1 text-primary px-1 dark:text-primaryDark'>&#9825;</span> к&nbsp; <Link href='/' className='underline underline-offset-2' target={'_blank'}>Кодбакс</Link>
				</div>
				<Link href='/' target={'_blank'} className='underline underline-offset-2'>Скажи привет</Link>
			</Layout>
		</footer>
	)
}

export default Footer