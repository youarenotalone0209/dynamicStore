import React, { Component } from 'react';
import history from '../../../services/history';

import { connect } from 'react-redux';
import { Form, Col, Button } from 'react-bootstrap';
import states from '../../../constant/states';

import { addUserInfo } from '../../../actions';

class Demographic extends Component {
	constructor(props) {
		super(props);
		let currentYear = new Date().getFullYear();
		let currentMonth = new Date().getMonth() + 1;
		
		if (this.props.items.length === 0) {
			history.push('/');
		}

		this.months = [];
		this.years = [];

		for (let i = 0; i < 10; i++) {
			this.years.push(currentYear + i);
		}

		for (let i = 12; i > 1; i--) {
			if (i >= currentMonth) {
				this.months.push(i);
			} else {
				break;
			}
		}

		this.months = this.months.reverse();
		this.formData = {};

		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(e) {
		e.preventDefault();
		this.props.addUserInfo(this.formData);
		history.push('/confirmation');
	}

	render() {
		const handleChange = (e) =>  {
			this.formData[e.target.name] = e.target.value.trim();
		};
	
		return (
			<div className="demographic">
				<h4>Check Out</h4>
				<Form name="demographic" onSubmit={(e) => this.handleSubmit(e)}>
					<Form.Row>
						<Form.Group as={Col} controlId="formFirstName">
							<Form.Label>First Name</Form.Label>
							<Form.Control
								placeholder="First Name"
								onChange={handleChange}
								name="firstName"
								required/>
						</Form.Group>

						<Form.Group as={Col} controlId="formFirstName">
							<Form.Label>Last Name</Form.Label>
							<Form.Control
								placeholder="Last Name"
								onChange={handleChange}
								name="lastName"
								required/>
						</Form.Group>
					</Form.Row>

					<Form.Group controlId="formPhone">
						<Form.Label>Phone Number</Form.Label>
						<Form.Control
							placeholder="########## - 10 digits number"
							pattern="^\d{10}$"
							onChange={handleChange}
							name="phone"
							required/>
					</Form.Group>

					<Form.Group controlId="formGridEmail">
						<Form.Label>Email</Form.Label>
						<Form.Control 
							type="email"
							onChange={handleChange}
							name="email"
							placeholder="Enter email"
							required/>
					</Form.Group>

					<Form.Group controlId="formGridAddress1">
						<Form.Label>Address</Form.Label>
						<Form.Control 
							placeholder="1234 Main St"
							onChange={handleChange}
							name="address"
							required/>
					</Form.Group>

					<Form.Row>
						<Form.Group as={Col} md="4" controlId="formGridCity">
							<Form.Label>City</Form.Label>
							<Form.Control
								onChange={handleChange}
								name="city"
								required/>
						</Form.Group>

						<Form.Group as={Col} md="4" controlId="formGridState">
							<Form.Label>State</Form.Label>
							<Form.Control
								as="select"
								onChange={handleChange}
								name="state"
								required>
								{
									states.map((state, index) => {
										return (
											<option key={index}>{state.value}</option>
										);
									})
								}
							</Form.Control>
						</Form.Group>

						<Form.Group as={Col} md="4" controlId="formGridZip">
							<Form.Label>Zip</Form.Label>
							<Form.Control
								pattern="^\d{5}$"
								onChange={handleChange}
								name="zip"
								required/>
						</Form.Group>
					</Form.Row>

					<hr></hr>

					<Form.Row>
						<Form.Group as={Col} sm="9" controlId="formCreditCard">
							<Form.Label>Credit Card Number</Form.Label>
							<Form.Control 
								placeholder="Any 12 Digits Number For Testing Purpose"
								required
								onChange={handleChange}
								name="cardNumber"
								pattern="^\d{12}$"/>
						</Form.Group>
						<Form.Group as={Col} sm="3" controlId="formCVV">
							<Form.Label>CVV</Form.Label>
							<Form.Control
								placeholder="Any 3 Digits Number"
								required
								onChange={handleChange}
								name="cvv"
								pattern="^\d{3}$"/>
						</Form.Group>
					</Form.Row>

					<Form.Row>
						<Form.Group as={Col} xs="6" sm="3" controlId="exampleForm.ControlSelect1">
							<Form.Label>Month</Form.Label>
							<Form.Control
								onChange={handleChange}
								name="month"
								as="select"
								required>
								{
									this.months.map((month, index) => {
										return (
											<option key={index}>{month}</option>
										);
									})
								}
							</Form.Control>
						</Form.Group>

						<Form.Group as={Col} xs="6" sm="3" controlId="exampleForm.ControlSelect2">
							<Form.Label>Year</Form.Label>
							<Form.Control
								as="select"
								onChange={handleChange}
								name="year"
								required>
								{
									this.years.map((year, index) => {
										return (
											<option key={index}>{year}</option>
										);
									})
								}
							</Form.Control>
						</Form.Group>
					</Form.Row>
					<Button variant="success" type="submit">
						Pay
					</Button>
				</Form>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		items: state.items
	};
}
  
export default connect(mapStateToProps, { addUserInfo })(Demographic);