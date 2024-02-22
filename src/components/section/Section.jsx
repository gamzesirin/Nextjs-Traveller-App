import Image from 'next/image'
import React from 'react'
import circle from '../../../public/img/banner0.png'

const Section = () => {
	return (
		<div className="flex items-center justify-center">
			<div className="bg-[url('../../public/img/banner.png')] bg-cover bg-center text-start p-20 rounded-lg text-black flex flex-col items-start justify-center space-y-3 w-[850px]">
				<h1 className="text-4xl font-bold">
					Grab up to <span className="text-orange-500">35% off </span> <br></br>
					on your favorite <br></br>Destination
				</h1>
				<p>Limited time offer, dont miss the opportunity</p>
				<button className="bg-orange-500 rounded-lg p-2 text-white">Book Now</button>
			</div>
			<div className="flex items-start justify-start bg-[url('../../public/img/banner1.png')] bg-cover bg-center rounded w-[400px]">
				<Image src={circle} alt="resim" className="h-[370px] w-[30px] " />
			</div>
		</div>
	)
}

export default Section
