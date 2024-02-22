import Image from 'next/image'
import React from 'react'
import image from '../../../public/img/image.png'

const Review = () => {
	return (
		<div className="bg-section-image h-[500px] text-center text-black  ">
			<div className="flex flex-col items-center justify-center gap-5 py-16">
				<h1 className="text-3xl font-bold">Customer Reviews</h1>
				<Image src={image} alt="logo" />
				<p className="text-orange-500">Excellent Service!</p>
				<p>
					I had an amazing experience with this company. The service was<br></br>
					top-notch, and the staff was incredibly friendly. I highly<br></br>
					recommend them!
				</p>
				<p>John Smith</p>
				<p>Traveler</p>
			</div>
		</div>
	)
}

export default Review
