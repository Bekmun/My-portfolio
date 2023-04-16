import React, { useState } from 'react'
import Link from 'next/link'
import Logo from './Logo.js'
import { useRouter } from 'next/router.js'
import { motion } from 'framer-motion'
import { DribbbleIcon, GithubIcon, LinkedInIcon, MoonIcon, PinterestIcon, SunIcon, TelegramIcon, TwitterIcon } from './icons.js'
import useThemeSwitcher from './hooks/useThemeSwitcher.js'

const CustomLink = ({ href, title, className = '' }) => {
	const router = useRouter()

	return (
		<Link href={href} className={`${className} relative group`}>
			{title}
			<span className={`absolute h-[1px] inline-block bg-dark left-0 -bottom-0.5 
			group-hover:w-full transition-[width] ease duration-300 ${router.asPath === href ? 'w-full' : 'w-0'} dark:bg-light`}>&nbsp;</span>
		</Link>
	)
}

const CustomMobileLink = ({ href, title, className = '', toggle }) => {
	const router = useRouter()

	const handleClick = () => {
		toggle()
		router.push(href)
	}

	return (
		<button href={href} className={`${className} relative group text-light dark:text-dark`} onClick={handleClick}>
			{title}
			<span className={`absolute h-[1px] inline-block bg-light left-0 -bottom-0.5 
			group-hover:w-full transition-[width] ease duration-300 ${router.asPath === href ? 'w-full' : 'w-0'} dark:bg-dark`}>&nbsp;</span>
		</button>
	)
}

const NavBar = () => {

	const [mode, setMode] = useThemeSwitcher()
	const [isOpen, setIsOpen] = useState(false)

	const handleClick = () => {
		setIsOpen(!isOpen)
	}

	return (
		<header className='w-full px-32 py-8 font-medium flex items-center justify-between dark:text-light relative xl:px-24 lg:px-16 md:px-12 sm:px-8'>

			<button className='flex-col justify-center items-center h-[24px] hidden lg:flex' onClick={handleClick}>
				<span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
				<span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
				<span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
			</button>

			<div className='w-full flex items-center justify-between lg:hidden'>
				<nav>
					<CustomLink href='/' title='Главная' className='mr-4' />
					<CustomLink href='/about' title='Обо мне' className='mx-4' />
					<CustomLink href='/projects' title='Проекты' className='mx-4' />
					<CustomLink href='/articles' title='Статьи' className='ml-4' />
				</nav>
				<nav className='flex items-center justify-center flex-wrap'>
					<motion.a href='https://t.me/bekmun_gem' target={'_blank'}
						whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }} className='w-6 mr-5'>
						<TelegramIcon />
					</motion.a>
					<motion.a href='https://github.com/Bekmun' target={'_blank'}
						whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }} className='w-6 mr-5'>
						<GithubIcon />
					</motion.a>
					<motion.a href='https://ru.pinterest.com/' target={'_blank'}
						whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }} className='w-6 mr-5 bg-light rounded-full'>
						<PinterestIcon />
					</motion.a>
					<motion.a href='https://dribbble.com/' target={'_blank'}
						whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }} className='w-6'>
						<DribbbleIcon />
					</motion.a>

					<button onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}
						className={`ml-3 flex items-center justify-center rounded-full p-1 ${mode === 'light' ? 'bg-dark text-light' : 'bg-light text-dark'}`}
					>
						{
							mode === 'dark' ? <SunIcon className={'fill-dark'} /> : <MoonIcon className={'fill-dark'} />
						}
					</button>
				</nav>
			</div>

			{
				isOpen ?
					<motion.div
						initial={{ scale: 0, opacity: 0, x: '-50%', y: '-50%' }}
						animate={{ scale: 1, opacity: 1 }}
						className='min-w-[70vw] flex flex-col items-center justify-between fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
			z-30 bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md py-32
			'>
						<nav className='flex items-center flex-col justify-center mb-5'>
							<CustomMobileLink href='/' title='Главная' className='mb-4' toggle={handleClick} />
							<CustomMobileLink href='/about' title='Обо мне' className='mb-4' toggle={handleClick} />
							<CustomMobileLink href='/projects' title='Проекты' className='mb-4' toggle={handleClick} />
							<CustomMobileLink href='/articles' title='Статьи' toggle={handleClick} />
						</nav>
						<nav className='flex items-center justify-center flex-wrap'>
							<motion.a href='https://t.me/bekmun_gem' target={'_blank'}
								whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }} className='w-6 mr-5 sm:mr-1'>
								<TelegramIcon />
							</motion.a>
							<motion.a href='https://github.com/Bekmun' target={'_blank'}
								whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }} className='w-6 mr-5 bg-light rounded-full dark:bg-dark sm:mr-1'>
								<GithubIcon />
							</motion.a>
							<motion.a href='https://ru.pinterest.com/' target={'_blank'}
								whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }} className='w-6 mr-5 bg-light rounded-full sm:mr-1'>
								<PinterestIcon />
							</motion.a>
							<motion.a href='https://dribbble.com/' target={'_blank'}
								whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }} className='w-6'>
								<DribbbleIcon />
							</motion.a>

							<button onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}
								className={`ml-3 flex items-center justify-center rounded-full p-1 ${mode === 'light' ? 'bg-dark text-light' : 'bg-light text-dark'}`}
							>
								{
									mode === 'dark' ? <SunIcon className={'fill-dark'} /> : <MoonIcon className={'fill-dark'} />
								}
							</button>
						</nav>
					</motion.div>

					: null
			}

			<div className='absolute left-[50%] top-2 translate-x-[-50%]'>
				<Logo />
			</div>
		</header>
	)
}

export default NavBar