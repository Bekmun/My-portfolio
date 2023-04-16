import Image from 'next/image'
import Head from 'next/head'
import React, { useEffect, useRef } from 'react'
import { useInView, useMotionValue, useSpring } from 'framer-motion'
import AnimatedText from '@/components/AnimatedText.js'
import Layout from '@/components/Layout.js'
import avatar from '../../public/images/profile/avatar-4-min.jpg'
import Skills from '@/components/Skills.js'
import Experience from '@/components/Experience.js'
import Education from '@/components/Education'
import TransitionEffect from '@/components/TransitionEffect'

const AnimatedNumbers = ({ value }) => {
	const ref = useRef(null)

	const motionValue = useMotionValue(0)
	const springValue = useSpring(motionValue, { duration: 3000 })
	const isInView = useInView(ref, { once: true })

	useEffect(() => {
		if (isInView) {
			motionValue.set(value)
		}
	}, [isInView, value, motionValue])

	useEffect(() => {
		springValue.on('change', (latest) => {
			if (ref.current && latest.toFixed(0) <= value) {
				ref.current.textContent = latest.toFixed(0)
			}
		})
	}, [springValue, value])

	return <span ref={ref}></span>
}

const about = () => {
	return (
		<>
			<Head>
				<title>CodeBucks | Обо мне Page</title>
				<meta name='description' content='Мое портфолио' />
			</Head>
			<TransitionEffect />
			<main className='flex w-full flex-col items-center justify-center dark:text-light'>
				<Layout className='pt-16'>
					<AnimatedText text='Страсть питает цель!' className='mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8' />
					<div className='grid w-full grid-cols-8 gap-16 sm:gap-8'>
						<div className='col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8'>
							<h2 className='mb-4 font-bold uppercase text-dark/75 dark:text-light/75'>Обо мне</h2>
							<p className='font-medium'>
								Привет, я Bekbolot, веб-разработчик с радостью создаю красивых, функциональных, веб-сайты. Я всегда ищу
								новые и инновационные способы воплотить идеи моих клиентов в жизнь.
							</p>
							<p className='font-medium my-4'>
								Работаю ли я над веб-сайтом, мобильным приложением или
								другой цифровой продукт, я приношу свою приверженность превосходному мышлению, ориентированному на пользователя,
								каждый проект, над которым я работаю. Я с нетерпением жду возможности применить свои навыки и страсть к вашему следующему проекту.
							</p>
						</div>
						<div className='col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 dark:border-light dark:bg-dark
						xl:col-span-4 md:order-1 md:col-span-8'>
							<div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-2xl bg-dark dark:bg-light' />
							<Image src={avatar} alt='Bekbolot image' className='w-full h-auto rounded-2xl' priority
								sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw" />
						</div>
						<div className='col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row md:order-3'>
							<div className='flex flex-col items-end justify-center xl:items-center'>
								<span className='inline-blok text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
									<AnimatedNumbers value={20} />+
								</span>
								<h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75
								xl:text-center md:text-lg sm:text-base xs:text-sm'>довольные клиенты</h2>
							</div>
							<div className='flex flex-col items-end justify-center xl:items-center'>
								<span className='inline-blok text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
									<AnimatedNumbers value={10} />+
								</span>
								<h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75
								xl:text-center md:text-lg sm:text-base xs:text-sm'>завершенные проекты</h2>
							</div>
							<div className='flex flex-col items-end justify-center xl:items-center'>
								<span className='inline-blok text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
									<AnimatedNumbers value={1} />+
								</span>
								<h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75
								xl:text-center md:text-lg sm:text-base xs:text-sm'>Год опыта</h2>
							</div>
						</div>
					</div>
					<Skills />
					<Experience />
					<Education />
				</Layout>
			</main>
		</>
	)
}

export default about