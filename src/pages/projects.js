import React from 'react'
import Head from 'next/head'
import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Link from 'next/link'
import Image from 'next/image'
import { GithubIcon } from '@/components/icons'
import project1 from '../../public/images/projects/crypto-screener-cover-image.jpg'
import { motion } from 'framer-motion'
import TransitionEffect from '@/components/TransitionEffect'

const FramerImage = motion(Image)

const FeaturedProject = ({ type, title, summary, img, link, github }) => {

	return (
		<article className='w-full relative flex items-center justify-between rounded-3xl border
		border-solid border-dark bg-light shadow-2xl p-12 rounded-br-2xl dark:bg-dark dark:border-light
		lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4'>

			<div className='absolute top-0 -right-4 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl dark:bg-light
			md:-right-2 md:w-[100%] md:h-[101%] md:rounded-[1.5rem]' />
			<Link href={link} target='_blank' className='w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full lg:mb-6'>
				<FramerImage src={img} alt={title} className='w-full h-auto'
					whileHover={{ scale: 1.05 }}
					transition={{ duration: 0.2 }}
					priority
					sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              50vw"
				/>
			</Link>

			<div className='w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0'>
				<span className='text-primary font-medium text-xl dark:text-primaryDark xs:text-base'>{type}</span>
				<Link href={link} target='_blank' className='hover:underline underline-offset-2'>
					<h2 className='my-2 w-full text-left text-4xl font-bold lg:text-3xl xs:text-2xl'>{title}</h2>
				</Link>
				<p className='my-2 font-medium text-dark dark:text-light sm:text-sm'>{summary}</p>
				<div className='mt-2 flex items-center'>
					<Link href={github} target='_blank' className='w-10 dark:text-light'> <GithubIcon /> </Link>
					<Link href={link} target='_blank' className='ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold dark:bg-light
					 dark:text-dark sm:px-4 sm:text-base'>Посетите проект</Link>
				</div>
			</div>

		</article>
	)
}

const Project = ({ type, title, img, link, github }) => {
	return (
		<article className='w-full flex flex-col items-center justify-center rounded-2xl border
		border-solid border-dark bg-light shadow-2xl p-6 relative dark:bg-dark dark:border-light xs:p-4'>

			<div className='absolute top-0 -right-4 -z-10 w-[102%] h-[103%] rounded-[26px] bg-dark rounded-br-3xl dark:bg-light
			md:-right-2 md:w-[100%] md:h-[101%] md:rounded-[1.5rem]' />
			<Link href={link} target='_blank' className='w-full cursor-pointer overflow-hidden rounded-lg'>
				<FramerImage src={img} alt={title} className='w-full h-auto'
					whileHover={{ scale: 1.05 }}
					transition={{ duration: 0.2 }}
				/>
			</Link>

			<div className='w-full flex flex-col items-start justify-between mt-4'>
				<span className='text-primary font-medium text-xl dark:text-primaryDark lg:text-lg md:text-base'>{type}</span>
				<Link href={link} target='_blank' className='hover:underline underline-offset-2'>
					<h2 className='my-2 w-full text-left text-3xl font-bold lg:text-2xl'>{title}</h2>
				</Link>
				<div className='mt-2 w-full flex items-center justify-between dark:text-light'>
					<Link href={link} target='_blank' className='text-lg font-semibold underline md:text-base'>Посетите</Link>
					<Link href={github} target='_blank' className='w-8 md:w-6'> <GithubIcon /> </Link>
				</div>
			</div>

		</article>
	)
}

const projects = () => {
	return (
		<>
			<Head>
				<title>CodeBucks | Projects Page</title>
				<meta name='description' content='Мое портфолио' />
			</Head>
			<TransitionEffect />
			<main className='w-full mb-16 flex flex-col items-center justify-center dark:text-light'>
				<Layout className='pt-16'>
					<AnimatedText text='Воображение побеждает знания!' className='mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8' />

					<div className='grid grid-cols-12 gap-24 xl:gap-16 lg:gap-8 md:gap-5 sm:gap-x-0'>
						<div className='col-span-12'>
							<FeaturedProject className='mb-16'
								title='Приложение для проверки криптографии'
								img={project1}
								type='Избранный проект'
								link='/'
								github='/'
								summary='Многофункциональное приложение Crypto Screener с использованием React, Tailwind CSS, Context API, React Router и Recharts.
Он показывает детали почти всей криптовалюты. Вы можете легко преобразовать цену в свой
местная валюта.'
							/>
						</div>
						<div className='col-span-6 sm:col-span-12'>
							<Project className='mb-16'
								title='Приложение для проверки криптографии'
								img={project1}
								type='Избранный проект'
								link='/'
								github='/' />
						</div>
						<div className='col-span-6 sm:col-span-12'>
							<Project className='mb-16'
								title='Приложение для проверки криптографии'
								img={project1}
								type='Избранный проект'
								link='/'
								github='/' />
						</div>
						<div className='col-span-12'>
							<FeaturedProject className='mb-16'
								title='Приложение для проверки криптографии'
								img={project1}
								type='Избранный проект'
								link='/'
								github='/'
								summary='Многофункциональное приложение Crypto Screener с использованием React, Tailwind CSS, Context API, React Router и Recharts.
Он показывает детали почти всей криптовалюты. Вы можете легко преобразовать цену в свой
местная валюта.'
							/>
						</div>
						<div className='col-span-6 sm:col-span-12'>
							<Project className='mb-16'
								title='Приложение для проверки криптографии'
								img={project1}
								type='Избранный проект'
								link='/'
								github='/' />
						</div>
						<div className='col-span-6 sm:col-span-12'>
							<Project className='mb-16'
								title='Приложение для проверки криптографии'
								img={project1}
								type='Избранный проект'
								link='/'
								github='/' />
						</div>
					</div>
				</Layout>
			</main>
		</>
	)
}

export default projects