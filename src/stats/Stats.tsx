import React from "react";

import './Stats.css';

export function Stats(
	props: {
		state: string
	}
) {
	const mockData: { [state: string]: { [key: string]: number } } = {
		"Deutschland": {
			"total": 42899,
			"difference_to_yesterday": 4971,
			"per_1k": 3.864637597548339,
			"because_age": 22030,
			"because_job": 12661,
			"because_medical_reasons": 2303,
			"because_in_care": 7340
		},
		"Baden-Württemberg": {
			"total": 42899,
			"difference_to_yesterday": 4971,
			"per_1k": 3.864637597548339,
			"because_age": 22030,
			"because_job": 12661,
			"because_medical_reasons": 2303,
			"because_in_care": 7340
		}
	}

	const selectedState = mockData[props.state];

	return (
		<div className="stats">
			<h1>{props.state}</h1>

			<div className="vaccinatedTotal">
				{selectedState.total}
			</div>
			<div className="vaccinatedTotalText">
				vaccinated
			</div>

			<div className="progressBar">
				<div className="progressBarText">{(selectedState.per_1k / 10).toFixed(2)}%</div>
				<div className="progressBarProgress" style={{width: `${selectedState.per_1k / 10}%`}}/>
			</div>
		</div>
	)
}
