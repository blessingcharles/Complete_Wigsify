import React from "react"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { userLogin } from "../redux"
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router-dom"
import "./Login.css"
const schema = yup.object().shape({
	email: yup.string().required("Email is required").email("Enter valid mail"),
	password: yup
		.string()
		.required("You forget to enter password")
		.min(4, "Enter 8 character minimum"),
})
const defValue = {
	email: "",
	password: "",
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
		dispatch(userLogin(data))
	}
	if (logged === true) {
		history.push("/")
	}
	return (
		<div className="login">
			<div className="lvertical-align">
				<div className="lcontainer">
					<div className="avatar">
						<img
							src="https://raw.githubusercontent.com/blessingcharles/WigsiFy/main/Images/logo.png"
							alt="error"
						/>
					</div>
					<form className="login__form" onSubmit={handleSubmit(onSubmit)}>
						<input
							className="login__text"
							placeholder="Enter email"
							type="text"
							{...register("email")}
						/>
						{errors.email && (
							<p className="login__error">{errors.email.message}</p>
						)}
						<input
							type="password"
							className="login__text"
							placeholder="Enter password"
							{...register("password")}
						/>
						{errors.password && (
							<p className="login__error">{errors.password.message}</p>
						)}

						<input className="login__button" type="submit" value="SUBMIT" />
					</form>
				</div>
			</div>
		</div>
	)
}

export default Login
