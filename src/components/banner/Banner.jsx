import Image from 'next/image'
import React from 'react'
import card from '../../../public/img/img.png'
import card1 from '../../../public/img/img1.png'
import card2 from '../../../public/img/img2.png'

const Banner = () => {
	return (
		<div className="bg-orange-200 p-20 text-black">
			<div className="flex justify-around">
				<h1 className="text-2xl font-semibold">Featured Trips</h1>
				<ul className="flex justify-center gap-5">
					<li className=" p-1 hover:rounded-full hover:text-orange-400 hover:bg-white hover:p-1">Adventure</li>
					<li className=" p-1 hover:rounded-full hover:text-orange-400 hover:bg-white  hover:p-1">Nature</li>
					<li className="p-1 hover:rounded-full hover:text-orange-400 hover:bg-white  hover:p-1">Food</li>
				</ul>
			</div>
			<div className="flex gap-3 justify-center p-3">
				<div className="relative">
					<Image src={card} alt="resim" className="rounded-xl" />
					<div className="bg-white rounded-xl relative bottom-10 p-5">
						<p className="text-center text-sm text-gray-400 p-2">Paris, France</p>
						<p className="font-semibold text-purple-800">Centipede Tour - Guided Arizona</p>
						<p className="font-semibold text-purple-800 pb-2">Desert Tour by ATV</p>
						<div className="flex justify-between py-1 border border-gray-300 border-solid border-b-0 border-l-0 border-r-0">
							<p>4 days</p>
							<p>
								<span>From</span>$189.25
							</p>
						</div>
					</div>
				</div>
				<div>
					<Image src={card1} alt="resim" className="rounded-xl" />
					<div className="bg-white rounded-xl relative bottom-10 p-5">
						<p className="text-center text-sm text-gray-400 p-2">New York, USA</p>
						<p className="font-semibold text-purple-800">All Inclusive Ultimate Circle Island</p>
						<p className="font-semibold text-purple-800 pb-2">Day Tour with Lunch</p>
						<div className="flex justify-between py-1 border border-gray-300 border-solid border-b-0 border-l-0 border-r-0">
							<p>4 days</p>
							<p>
								<span>From</span>$189.25
							</p>
						</div>
					</div>
				</div>
				<div>
					<Image src={card2} alt="resim" className="rounded-xl" />
					<div className="bg-white rounded-xl relative bottom-10 p-5">
						<p className="text-center text-sm text-gray-400 p-2">Paris, France</p>
						<p className="font-semibold text-purple-800">Centipede Tour - Guided Arizona</p>
						<p className="font-semibold text-purple-800 pb-2">Desert Tour by ATV</p>
						<div className="flex justify-between py-1 border border-gray-300 border-solid border-b-0 border-l-0 border-r-0">
							<p>4 days</p>
							<p>
								<span>From</span>$771
							</p>
						</div>
					</div>
				</div>
				<div>
					<Image src={card1} alt="resim" className="rounded-xl " />
					<div className="bg-white rounded-xl relative bottom-10 p-5">
						<p className="text-center text-sm text-gray-400 p-2">New York, USA</p>
						<p className="font-semibold text-purple-800">All Inclusive Ultimate Circle Island</p>
						<p className="font-semibold text-purple-800 pb-2">Day Tour with Lunch</p>
						<div className="flex justify-between py-1 border border-gray-300 border-solid border-b-0 border-l-0 border-r-0">
							<p>4 days</p>
							<p>
								<span>From</span>$189.25
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Banner
