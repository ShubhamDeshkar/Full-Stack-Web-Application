import React, { Component } from "react";
import moment from "moment";
import { Form, Formik, Field, ErrorMessage } from "formik";
import AuthenticationService from "./AuthenticationService";
import TodoDataService from "./TodoDataService";

class TodoComponent extends Component {
	constructor(props) {
		super(props);
		this.state = {
			id: this.props.match.params.id,
			description: "",
			targetDate: moment(new Date()).format("YYYY-MM-DD")
		};

		this.onSubmit = this.onSubmit.bind(this);
		this.validate = this.validate.bind(this);
	}

	componentDidMount() {
		if (this.state.id === -1) return;

		let name = AuthenticationService.getUser();
		TodoDataService.retrieveTodo(name, this.state.id).then(response =>
			this.setState({
				description: response.data.description,
				targetDate: moment(response.data.targetDate).format("YYYY-MM-DD")
			})
		);
	}

	onSubmit(values) {
		let name = AuthenticationService.getUser();

		if (this.state.id === -1) {
			TodoDataService.createTodo(name, {
				id: this.state.id,
				description: values.description,
				targetDate: values.targetDate
			}).then(() => this.props.history.push("/todos"));
		} else {
			TodoDataService.updateTodo(name, this.state.id, {
				id: this.state.id,
				description: values.description,
				targetDate: values.targetDate
			}).then(() => this.props.history.push("/todos"));
		}
	}

	validate(values) {
		let error = {};
		if (!values.description) error.description = "Description cannot be empty";
		else if (values.description.length < 5)
			error.description = "Description should have at least 5 characters";

		if (!moment(values.targetDate).isValid())
			error.targetDate = "Enter a valid date";

		return error;
	}

	render() {
		let description = this.state.description;
		let targetDate = this.state.targetDate;

		return (
			<div className="container" style={{ width: 800, minHeight: "100vh" }}>
				<h1 className="display-4 text-center">Edit your Todo here...</h1>
				<Formik
					initialValues={{ description, targetDate }}
					onSubmit={this.onSubmit}
					validateOnChange={false}
					validateOnBlur={false}
					validate={this.validate}
					enableReinitialize={true}
				>
					{props => (
						<Form className="mt-4">
							<ErrorMessage
								name="description"
								component="div"
								className="alert alert-danger"
							/>
							<ErrorMessage
								name="targetDate"
								component="div"
								className="alert alert-danger"
							/>
							<fieldset className="form-group">
								<label>Description</label>
								<Field
									className="form-control"
									type="text"
									name="description"
								/>
								<label className="mt-4">Target Date</label>
								<Field className="form-control" type="date" name="targetDate" />
							</fieldset>
							<button
								className="btn btn-success"
								type="submit"
								style={{ width: 100 }}
							>
								Save
							</button>
						</Form>
					)}
				</Formik>
			</div>
		);
	}
}

export default TodoComponent;
