import React from "react"
import { useSelector } from "react-redux"
import Base from "./Base"
import Landing from "./Landing"
const Home = () => {
	
	const userDetails = useSelector((state) => state.user)

	return userDetails.logged ? <Base /> : <Landing />
}

export default Home
