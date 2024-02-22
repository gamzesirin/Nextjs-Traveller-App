import React from 'react'

const Footer = () => {
	return (
		<footer className=" p-10 ">
			<div className="flex justify-around text-orange-500 border border-solid border-t-0 border-r-0 border-l-0 p-3 border-orange-400">
				<p>Speak to our expert at1-800-453-6744</p>
				<p className="font-bold">Follow Us</p>
			</div>
			<div className="flex justify-around gap-10 text-black px-20 py-5">
				<div className="flex flex-col gap-1 items-start justify-center">
					<h1 className="font-bold">Contact</h1>
					<p>328 Queensberry Street, North Melbourne VIC3051, Australia.</p>
					<p>hi@viatours.com</p>
				</div>
				<div className="flex flex-col gap-1 items-start justify-center">
					<h1 className="font-bold">Company</h1>
					<p>About</p>
					<p>Data Policy</p>
					<p>Terms & Conditions</p>
				</div>
				<div>
					<h1 className="font-bold">Support</h1>
					<p>Get In Touch</p>
					<p>FAQ</p>
					<p>Privacy Policy</p>
				</div>
				<div>
					<h1 className="font-bold">Newsletter</h1>
					<p>Subscribe to the free newsletter and stay up</p>
				</div>
			</div>
			<div></div>
		</footer>
	)
}

export default Footer
