import React from "react"
import { Link } from "react-router-dom"
import "./Landing.css"
import './landing_layout.css';

const Landing = () => {
	return (
			<>	
			<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700;900&display=swap" rel="stylesheet" />

			<div className="container">
				<h1>
				<i className="fas fa-circle"></i>
				</h1>
			</div>
		
			<section className="hero" id="hero">
			<div className="container">
				<div className="hero__content">
				<h1 className="hero__content-title">WELCOME TO <span>WIGSIFY </span></h1>
				</div>
			</div>
			</section>
			<center>
				<link href="https://fonts.googleapis.com/css?family=Ubuntu+Mono:400,700" rel="stylesheet" />
				<div className="div_hang">

				<h1 class="cssanimation hangAndDropLeft div_h1">WIGSIFY</h1>

				</div>
			</center>
			<div className="landing__links">
				<div>
					<Link to="/login">LOGIN</Link>
				</div>
				<div>
					<Link to="/signup">SIGNUP</Link>
				</div>
			</div>
			<section className="about" id="about">
			<div className="container">
				<div className="about__content">
					<h2 className="about__container-title">About us</h2>
					<p>
						
						We name this app as ‘WIgSify ‘ (W- WhatsApp, I-Instagram, G- GitHub, Sify-Spotify). 
						This helps geeks to share code, chat amongst themselves and share their interests amongst them. 
						It helps to increase their productive rate during these Covid times. 
						It uses react hooks and nodejs express with RestApi Implementation with user’s registration and login System.
					</p>
				</div>
			</div>
			</section>
			<footer className="footer">
				<div className="container">
					<p>© 2021 All Rights Reserved</p>
				</div>
			</footer>
		</>
	)
}

export default Landing
