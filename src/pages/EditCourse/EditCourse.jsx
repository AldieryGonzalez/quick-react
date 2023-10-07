import React, { useEffect } from "react";
import { useNavigate, useOutletContext, useParams } from "react-router";
import { useFormData } from "../../utilities/useFormData";
import { useDbUpdate } from "../../utilities/firebase";

const EditCourse = () => {
	const { isloading, courses } = useOutletContext();
	const { id } = useParams();
	const [updateData, result] = useDbUpdate("/");
	const validateUserData = (key, val) => {
		switch (key) {
			case "title":
				return /(^\w\w)/.test(val)
					? ""
					: "Must be least two characters";
			case "meets":
				return /^((M|Tu|W|Th|F)+ ([01]\d|2[0-3]):[0-5]\d-([01]\d|2[0-3]):[0-5]\d)?$/.test(
					val
				)
					? ""
					: "Must contain days and start-end, e.g., MWF 12:00-13:20";
			default:
				return "";
		}
	};

	const [state, change, setState] = useFormData(validateUserData);
	useEffect(() => {
		if (courses) {
			const course = courses[id];
			setState({ values: { title: course.title, meets: course.meets } });
		}
	}, [courses]);

	const submit = (evt) => {
		evt.preventDefault();
		if (!state.errors) {
			console.log(state.values);
		}
	};

	if (isloading) return <h1>Loading ...</h1>;

	return (
		<form
			onSubmit={submit}
			noValidate
			className={state.errors ? "was-validated" : null}>
			<InputField
				name='title'
				text='Class Title'
				state={state}
				change={change}
			/>
			<InputField
				name='meets'
				text='Meet Time'
				state={state}
				change={change}
			/>
			<ButtonBar message={""} />
		</form>
	);
};

const InputField = ({ name, text, state, change }) => (
	<div className='mb-3'>
		<label htmlFor={name} className='form-label'>
			{text}
		</label>
		<input
			className='form-control'
			id={name}
			name={name}
			defaultValue={state.values?.[name]}
			onChange={change}
		/>
		<div className='invalid-feedback'>{state.errors?.[name]}</div>
	</div>
);
const ButtonBar = ({ message, disabled }) => {
	const navigate = useNavigate();
	return (
		<div className='d-flex'>
			<button
				type='button'
				className='btn btn-outline-dark me-2'
				onClick={() => navigate(-1)}>
				Cancel
			</button>
			<button
				type='submit'
				className='btn btn-primary me-auto'
				disabled={disabled}>
				Submit
			</button>
			<span className='p-2'>{message}</span>
		</div>
	);
};

export default EditCourse;
