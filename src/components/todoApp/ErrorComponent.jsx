import React from "react";

export default function ErrorComponent() {
	return (
		<div className="alert alert-danger" style={{ fontSize: 20 }}>
			Oops! It looks like an error. Please contact support... <br />
			Email at:{" "}
			<span style={{ fontFamily: "Courier", fontWeight: 900 }}>
				shubhamd@umd.edu
			</span>
		</div>
	);
}
