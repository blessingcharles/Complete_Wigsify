import React from "react"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { userSignUp } from "../redux"
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router-dom"
import "./Signup.css"
const schema = yup.object().shape({
	name: yup.string().required("Name is required").matches(),
	email: yup.string().required("Email is required").email("Enter valid mail"),
	password: yup
		.string()
		.required("You forget to enter password")
		.min(8, "Enter 8 character minimum"),
	mobile: yup
		.number()
		.required("Mobile number is required")
		.test("mobileNoCheck", "Invalid", (num) => {
			let s = num.toString()
			return s.length === 10
		}),
})
const defValue = {
	name: "",
	email: "",
	password: "",
	mobile: "",
}
const Login = () => {
	const logged = useSelector((state) => state.user.logged)
	const dispatch = useDispatch()
	const history = useHistory()
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({ defaultValues: defValue, resolver: yupResolver(schema) })
	const onSubmit = (data) => {
		dispatch(userSignUp(data))
	}
	if (logged === true) {
		history.push("/")
	}
	return (
		<div className="signup">
			<div className="svertical-align">
				<div className="scontainer">
					<div className="avatar">
						<img
							src="https://raw.githubusercontent.com/blessingcharles/WigsiFy/main/Images/logo.png"
							alt="error"
						/>
					</div>
					<form className="signup__form" onSubmit={handleSubmit(onSubmit)}>
						<input
							type="text"
							className="signup__text"
							placeholder="Enter name"
							{...register("name")}
						/>
						{errors.name && (
							<p className="signup__error">errors.name.message</p>
						)}

						<input
							type="text"
							placeholder="Enter Email"
							className="signup__text"
							{...register("email")}
						/>
						{errors.email && (
							<p className="signup__error">errors.email.message</p>
						)}

						<input
							className="signup__text"
							placeholder="Enter Password"
							type="password"
							{...register("password")}
						/>
						{errors.password && (
							<p className="signup__error">errors.password.message</p>
						)}

						<input
							className="signup__text"
							type="text"
							placeholder="Enter Mobile Number"
							{...register("mobile")}
						/>
						{errors.mobile && (
							<p className="signup__error">errors.mobile.message</p>
						)}

						<input type="submit" className="signup__button" />
					</form>
				</div>
			</div>
		</div>
	)
}

export default Login
