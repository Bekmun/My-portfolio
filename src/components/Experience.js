import React, { useRef } from 'react'
import { motion, useScroll } from 'framer-motion'
import Lilcon from './Lilcon.js'

const Details = ({ position, company, companyLink, time, address, work }) => {
	const ref = useRef(null)
	return (
		<li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%] sm:w-[100%] sm:my-4'>
			<Lilcon reference={ref} />
			<motion.div
				initial={{ y: 50 }}
				whileInView={{ y: 0 }}
				transition={{ duration: 0.5, type: 'spring' }}>
				<h3 className='capitalize font-bold text-2xl sm:text-xl xs:text-lg'>{position}&nbsp;<a href={companyLink} target='_blank'
					className='text-primary capitalize dark:text-primaryDark'>@{company}</a></h3>
				<span className='capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm'>
					{time} | {address}
				</span>
				<p className='font-medium w-full md:text-sm'>
					{work}
				</p>
			</motion.div>
		</li>
	)
}

const Experience = () => {
	const ref = useRef(null)
	const { scrollYProgress } = useScroll(
		{
			target: ref,
			offset: ['start end', 'center start']
		}
	)

	return (
		<div className='mt-32 md:mt-16 sm:mt-8'>
			<h2 className='font-bold text-8xl mb-32 text-center lg:text-7xl lg:mb-16 sm:mb-8 sm:text-6xl xs:text-4xl'>Опыт</h2>
			<div ref={ref} className='w-[75%] mx-auto relative'>

				<motion.div
					style={{ scaleY: scrollYProgress }}
					className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light sm:-left-3' />

				<ul className='w-full flex flex-col items-start justify-between ml-4'>
					<Details
						position='Software Engineer' company='Google'
						companyLink='www.google.com'
						time='2022-Present' address='Mountain View, CA'
						work="Работал в команде, ответственной за разработку новых функций для Google.
						поисковой системы, включая повышение точности и релевантности результатов поиска и
						разработка новых инструментов для анализа и визуализации данных." />
					<Details
						position='Intern' company='Facebook'
						companyLink='www.google.com'
						time='Summer 2021' address='Menlo Park, CA.'
						work="Работал в команде, ответственной за разработку новых функций для Facebook.
						поисковой системы, включая повышение точности и релевантности результатов поиска и
						разработка новых инструментов для анализа и визуализации данных." />
					<Details
						position='Software Developer' company='Amazon'
						companyLink='www.google.com'
						time='2020-2021' address='Seattle, WA.'
						work="Работал в команде, ответственной за разработку новых функций для Amazon.
						поисковой системы, включая повышение точности и релевантности результатов поиска и
						разработка новых инструментов для анализа и визуализации данных." />
					<Details
						position='Software Engineer Intern' company='Microsoft'
						companyLink='www.google.com'
						time='Summer 2019' address='Redmond, WA.'
						work="Работал в команде, ответственной за разработку новых функций для Microsoft.
						поисковой системы, включая повышение точности и релевантности результатов поиска и
						разработка новых инструментов для анализа и визуализации данных." />
				</ul>
			</div>
		</div>
	)
}

export default Experience