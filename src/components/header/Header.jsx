import Image from 'next/image'
import React from 'react'
import logo from '../../../public/img/logo.png'

const Header = () => {
	return (
		<header className="p-10 bg-header-image h-[950px] relative">
			<ul className="flex justify-center items-start gap-56 p-5 ">
				<li>Search destinations or activities</li>
				<Image src={logo} alt="logo" />
				<ul className="flex justify-center gap-8">
					<li>
						<a href="/about">USD</a>
					</li>
					<li>
						<a href="/about">Sign up</a>
					</li>
					<li>
						<a href="/about">Log in</a>
					</li>
				</ul>
			</ul>

			<div className="flex flex-col gap-5 items-center p-10 mt-48">
				<p>Search, compare and book 15,000+ multiday tours all over the world.</p>
				<h1 className="text-6xl font-semibold text-center">
					Tours and Trip packages, <br></br> Globally
				</h1>
			</div>

			<div className="bg-white rounded-full text-black w-[1100px] p-2 mx-auto mt-[360px]">
				<ul className="flex justify-center items-center gap-48">
					<li>
						<p className="font-semibold">Where</p>
						<p className="text-gray-400">Search destinations</p>
					</li>
					<li>
						<p className="font-semibold">When</p>
						<p>February 05 ~ March 14</p>
					</li>
					<li>
						<p className="font-semibold">Tour Type</p>
						<p className="text-gray-400">All tour</p>
					</li>
					<li className="bg-orange-500 rounded-full p-5">
						<p>Search</p>
					</li>
				</ul>
			</div>
		</header>
	)
}

export default Header
