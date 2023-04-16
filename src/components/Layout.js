import React from 'react'

const Layout = ({children, className=''}) => {
	return (
		<div className={`w-full h-full inline-block z-0 bg-light px-32 dark:bg-dark lg:px-16 md:px-8 sm:px-4 ${className}`}>
			{children}
		</div>
	)
}

export default Layout