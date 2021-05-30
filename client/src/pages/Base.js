import React from "react"
import { useSelector } from "react-redux"

import { tabs } from "../constants/tabs"

import NavBar from "../component/main/NavBar"
import MainContainer from "../component/main/MainContainer"
import Header from "../component/main/Header"

const Base = () => {
	const activeTabName = useSelector((state) => state.tab.active)
	const activeTab = tabs.filter((item) => item.tab === activeTabName)[0]
	return (
		<div className="base">
			<Header />
			<div className="base__body">
				<NavBar tabs={tabs} />
				<MainContainer Component={activeTab.Component} />
			</div>
		</div>
	)
}

export default Base
