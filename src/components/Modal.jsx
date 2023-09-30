import React from "react";
import "./Modal.css";

const Modal = ({ children, open, close, title }) => (
	<div
		className={`modal ${open ? "modal-show" : ""}`}
		tabIndex='-1'
		role='dialog'
		onClick={(evt) => {
			if (evt.target === evt.currentTarget) close();
		}}>
		<div className='modal-dialog modal-lg' role='document'>
			<div className='modal-content'>
				<div className='modal-header w-100'>
					<h2 className='m-0'>{title}</h2>
					<button
						type='button'
						className='btn-close'
						aria-label='Close'
						onClick={close}
					/>
				</div>
				<div className='modal-body'>{children}</div>
			</div>
		</div>
	</div>
);

export default Modal;
