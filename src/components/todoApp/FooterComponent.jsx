import React, { Component } from "react";

export default class FooterComponent extends Component {
	render() {
		return (
			<footer className="footer" style={{ height: 55, position: "fixed" }}>
				<span className="text-muted">
					All rights reserved 2019 &#169; ShubhamDeshkar
					<div>
						Icons made by{" "}
						<a
							href="https://www.flaticon.com/authors/vectors-market"
							title="Vectors Market"
						>
							Vectors Market
						</a>{" "}
						from{" "}
						<a href="https://www.flaticon.com/" title="Flaticon">
							www.flaticon.com
						</a>{" "}
						is licensed by{" "}
						<a
							href="http://creativecommons.org/licenses/by/3.0/"
							title="Creative Commons BY 3.0"
							// eslint-disable-next-line react/jsx-no-target-blank
							target="_blank"
						>
							CC 3.0 BY
						</a>
					</div>
				</span>
			</footer>
		);
	}
}
