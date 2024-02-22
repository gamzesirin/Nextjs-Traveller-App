import Image from 'next/image'
import React from 'react'
import link from '../../../public/img/link.png'
import link1 from '../../../public/img/link1.png'
import link2 from '../../../public/img/link2.png'
import link3 from '../../../public/img/link3.png'
import link4 from '../../../public/img/link4.png'
import link5 from '../../../public/img/link5.png'
import link6 from '../../../public/img/link6.png'
import link7 from '../../../public/img/link7.png'
import link8 from '../../../public/img/link8.png'

const Cards = () => {
	return (
		<div className="p-5">
			<div className="flex justify-around text-purple-600 py-10">
				<h1 className="font-bold text-2xl">Top Attractions</h1>
				<p className="text-xs text">See all</p>
			</div>
			<div className="flex flex-wrap flex-col justify-center items-center text-black gap-10">
				<div className="flex flex-wrap gap-15">
					<div className="flex justify-center items-center gap-8">
						<Image src={link} alt="resim" />
						<div className="flex flex-col justify-center items-start w-56 ">
							<p>Colosseum</p>
							<p>100+ Tours</p>
						</div>
					</div>
					<div className="flex justify-center items-center gap-8">
						<Image src={link1} alt="resim" />
						<div className="flex flex-col justify-center items-start w-56 ">
							<p>Statue of Liberty</p>
							<p>100+ Tours</p>
						</div>
					</div>
					<div className="flex justify-center items-center gap-8">
						<Image src={link2} alt="resim" />
						<div>
							<p>Vatican Museums</p>
							<p>100+ Tours</p>
						</div>
					</div>
				</div>
				<div className="flex flex-wrap gap-15">
					<div className="flex justify-center items-center gap-8">
						<Image src={link3} alt="resim" />
						<div className="flex flex-col justify-center items-start w-56 ">
							<p>Eiffel Tower</p>
							<p>100+ Tours</p>
						</div>
					</div>
					<div className="flex justify-center items-center gap-8">
						{' '}
						<Image src={link4} alt="resim" />
						<div className="flex flex-col justify-center items-start w-56 ">
							<p>Tower of London</p>
							<p>100+ Tours</p>
						</div>
					</div>
					<div className="flex justify-center items-center gap-8">
						{' '}
						<Image src={link5} alt="resim" />
						<div>
							<p>National September</p>
							<p>100+ Tours</p>
						</div>
					</div>
				</div>
				<div className="flex flex-wrap gap-15 pl-16">
					<div className="flex justify-center items-center gap-8">
						{' '}
						<Image src={link6} alt="resim" />
						<div className="flex flex-col justify-center items-start w-56 ">
							<p>Stonehenge</p>
							<p>100+ Tours</p>
						</div>
					</div>
					<div className="flex justify-center items-center gap-8">
						{' '}
						<Image src={link7} alt="resim" />
						<div className="flex flex-col justify-center items-start w-56 ">
							<p>Antelope Canyon</p>
							<p>100+ Tours</p>
						</div>
					</div>
					<div className="flex justify-center items-center gap-8">
						{' '}
						<Image src={link8} alt="resim" />
						<div className="flex flex-col justify-center items-start w-52 ">
							<p>Louvre</p>
							<p>100+ Tours</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Cards
