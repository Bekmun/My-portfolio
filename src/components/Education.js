import React, { useRef } from 'react'
import { motion, useScroll } from 'framer-motion'
import Lilcon from './Lilcon.js'

const Details = ({ type, time, place, info }) => {
	const ref = useRef(null)
	return (
		<li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%] sm:w-[100%] sm:my-4'>
			<Lilcon reference={ref} />
			<motion.div
				initial={{ y: 50 }}
				whileInView={{ y: 0 }}
				transition={{ duration: 0.5, type: 'spring' }}>
				<h3 className='capitalize font-bold text-2xl sm:text-xl xs:text-lg'>{type}</h3>
				<span className='capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm'>
					{time} | {place}
				</span>
				<p className='font-medium w-full md:text-sm'>{info}</p>
			</motion.div>
		</li>
	)
}

const Education = () => {
	const ref = useRef(null)
	const { scrollYProgress } = useScroll(
		{
			target: ref,
			offset: ['start end', 'center start']
		}
	)

	return (
		<div className='my-32 md:my-16 sm:my-8'>
			<h2 className='font-bold text-8xl mb-32 text-center lg:text-7xl lg:mb-16 sm:mb-8 sm:text-6xl xs:text-4xl'>Образование</h2>
			<div ref={ref} className='w-[75%] mx-auto relative'>

				<motion.div
					style={{ scaleY: scrollYProgress }}
					className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light sm:-left-3' />

				<ul className='w-full flex flex-col items-start justify-between ml-4'>
					<Details
						type='Бакалавр наук в области компьютерных наук'
						time='2016-2020'
						place='Массачусетский Институт Технологий (MIT)'
						info='Соответствующие курсы включали структуры данных и алгоритмы, инженерию компьютерных систем и искусственный интеллект.'/>
					<Details
						type='Бакалавр'
						time='2020-2022'
						place='Стэндфордский Университет'
						info='Завершил магистерский проект по глубокому обучению, разработав новую архитектуру нейронной сети для естественных
понимание языка.'/>
					<Details
						type='Курсовая онлайн-работа'
						time='2016-2020'
						place='Coursera And EdX'
						info='Завершенная курсовая работа по продвинутым темам, таким как обучение с подкреплением, компьютерное зрение и машины.
Обучение инженерному делу.'/>
				</ul>
			</div>
		</div>
	)
}

export default Education