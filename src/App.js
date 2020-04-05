/** @jsx jsx */
import { jsx } from '@emotion/core'
import * as React from 'react';

import { ContextOne } from './ContextOne';
import { ContextTwo } from './ContextTwo';


export function App() {
	// [A]
	let { state, dispatch } = React.useContext(ContextOne);

	let { name, setName } = React.useContext(ContextTwo);

	// [B]
	React.useEffect(
		() => {
			document.body.style.backgroundColor = state.currentColor;
		},
		[ state.currentColor ]
	);

	// [C]
	let inc = () => dispatch({ type: 'increment' });
	let dec = () => dispatch({ type: 'decrement' });
	let reset = () => dispatch({ type: 'reset' });
	let setColor = (color) => () => dispatch({ type: 'set-color', payload: color });

	return (
		<React.Fragment>
			<div style={{ textAlign: 'center' }}>
				<p>
					Current color is: <b>{state.currentColor}</b>
				</p>
				<p>
					Current count: <b>{state.count}</b>
				</p>
			</div>
			<div style={{ paddingTop: 40 }}>
				<p>Count controls:</p>
				<button onClick={inc}>Increment!</button>
				<button onClick={dec}>Decrement!</button>
			</div>
			<div>
				<p>Color controls:</p>
				<button onClick={setColor('green')}>Change to green!</button>
				<button onClick={setColor('papayawhip')}>Change to papayawhip!</button>
			</div>
			<div>
				<p>Reset changes:</p>
				<button onClick={reset}>Reset!</button>
			</div>
			<div>
				<p>{name}</p>
				<button onClick={() => setName('blue')}>setName</button>
            </div>
            <div css={theme => ({ backgroundColor: theme.color, margin: theme.some })}>
            some other text
          </div>
		</React.Fragment>
	);
}
