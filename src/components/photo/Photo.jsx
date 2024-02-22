import Image from 'next/image'
import React from 'react'
import x from '../../../public/img/x.png'
import x1 from '../../../public/img/x1.png'
import x2 from '../../../public/img/x2.png'

const Photo = () => {
	return (
		<div className="flex flex-col gap-3">
			<div className="flex justify-around text-purple-600 py-5">
				<h1 className="font-bold text-2xl">Top Attractions</h1>
				<p className="text-xs text">See all</p>
			</div>
			<div className="flex gap-4 justify-center items-center py-5">
				<div className="flex flex-col gap-5">
					<Image src={x} alt="resim" />
					<div className="text-black ">
						<p className="text-xs">April 06 2023</p>
						<p className="text-sm">Kenya vs Tanzania Safari: The Better African Safari Experience</p>
					</div>
				</div>
				<div className="flex flex-col gap-5">
					<Image src={x2} alt="resim" />
					<div className="text-black">
						<p className="text-xs">April 06 2023</p>
						<p className="text-sm">Kenya vs Tanzania Safari: The Better African Safari Experience</p>
					</div>
				</div>
				<div className="flex flex-col gap-5">
					<Image src={x1} alt="resim" />
					<div className="text-black">
						<p className="text-xs">April 06 2023</p>
						<p className="text-sm">Kenya vs Tanzania Safari: The Better African Safari Experience</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Photo
