import Banner from '../components/banner/Banner'
import Cards from '../components/cards/Cards'
import Contact from '../components/contact/Contact'
import Footer from '../components/footer/Footer'
import Header from '../components/header/Header'
import Photo from '../components/photo/Photo'
import React from 'react'
import Review from '../components/review/Review'
import Section from '../components/section/Section'
import Table from '../components/table/Table'

const Home = () => {
	return (
		<React.Fragment>
			<Header />

			<Banner />

			<Table />

			<Section />

			<Cards />

			<Review />

			<Banner />

			<Contact />

			<Photo />

			<Footer />
		</React.Fragment>
	)
}

export default Home
