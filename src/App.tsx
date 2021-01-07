import React, {useState} from 'react';
import './App.css';
import {Map} from './map/Map';
import {Stats} from "./stats/Stats";

function App() {
	const [state, setCurrentState] = useState<string>();

	return (
		<div className="app">
			<Map onChange={changedState => setCurrentState(changedState)}/>
			<Stats state={state ? state : "Deutschland"}/>
		</div>
	);
}

export default App;
