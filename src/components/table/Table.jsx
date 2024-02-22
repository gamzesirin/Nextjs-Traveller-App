import Image from 'next/image'
import React from 'react'
import a1 from '../../../public/img/a1.png'
import a2 from '../../../public/img/a2.png'
import a3 from '../../../public/img/a3.png'
import a4 from '../../../public/img/a4.png'
import a6 from '../../../public/img/a6.png'
import a7 from '../../../public/img/a7.png'

const Table = () => {
	return (
		<div className="py-10">
			<div className="flex justify-around text-purple-600 py-5">
				<h1 className="font-bold text-2xl">Trending Destinations</h1>
				<p className="text-xs text">See all</p>
			</div>
			<div className="flex gap-3 justify-center p-2">
				<div className="flex flex-col gap-3">
					<div className="flex gap-3">
						<Image src={a1} className="rounded-xl" alt="resim" />
						<Image src={a2} alt="resim" />
					</div>
					<div className="flex gap-5">
						<Image src={a3} alt="resim" />
						<Image src={a4} className="rounded-xl" alt="resim" />
						<Image src={a6} className="rounded-xl" alt="resim" />
					</div>
				</div>
				<div>
					<Image src={a7} className="rounded-xl h-[490px]" alt="resim" />
				</div>
			</div>
		</div>
	)
}

export default Table
