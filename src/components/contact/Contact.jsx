import Frame from '../../../public/img/Frame1.png'
import Image from 'next/image'
import React from 'react'

const Contact = () => {
	return (
		<div className="bg-footer-image flex justify-around items-center">
			<div className="gap-5 flex flex-col  p-20">
				<h1 className="text-4xl font-semibold">Subscribe to our newsletter</h1>
				<p>Get the latest updates and offers right in your inbox</p>
				<div className="flex gap-3">
					<input type="text" placeholder="Enter your email" className="p-2 rounded-md" />
					<button className="bg-white p-2 rounded-md text-orange-300">Subscribe</button>
				</div>
			</div>
			<Image src={Frame} alt="resim" />
		</div>
	)
}

export default Contact
