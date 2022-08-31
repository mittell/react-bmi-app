import { useState } from 'react';
import './index.css';

function App() {
	const [weight, setWeight] = useState(0);
	const [height, setHeight] = useState(0);
	const [bmi, setBmi] = useState('');
	const [message, setMessage] = useState('');

	const calcBmi = (e) => {
		e.preventDefault();

		if (weight === 0 || height === 0) {
			alert('Please enter a valid weight and height!');
		} else {
			let bmi = (weight / (height * height)) * 703;
			setBmi(bmi.toFixed(1));

			if (bmi < 25) {
				setMessage('You are underweight!');
			} else if (bmi >= 25 && bmi < 30) {
				setMessage('You are a healthy weight!');
				imgSrc = require('../src/assets/healthy.png');
			} else {
				setMessage('You are overweight!');
				imgSrc = require('../src/assets/overweight.png');
			}
		}
	};

	let imgSrc;

	if (bmi < 1) {
		imgSrc = require('../src/assets/none.png');
	} else {
		if (bmi < 25) {
			imgSrc = require('../src/assets/underweight.png');
		} else if (bmi >= 25 && bmi < 30) {
			imgSrc = require('../src/assets/healthy.png');
		} else {
			imgSrc = require('../src/assets/overweight.png');
		}
	}

	const reload = () => {
		window.location.reload();
	};

	return (
		<div className='app'>
			<div className='container'>
				<h2 className='center'>BMI Calculator</h2>
				<form onSubmit={calcBmi}>
					<div>
						<label>Weight (lbs)</label>
						<input
							type='number'
							value={weight}
							onChange={(e) => setWeight(e.target.value)}
						/>
					</div>
					<div>
						<label>Height (in)</label>
						<input
							type='number'
							value={height}
							onChange={(e) => setHeight(e.target.value)}
						/>
					</div>
					<button type='submit' className='btn'>
						Submit
					</button>
					<button className='btn btn-outline' onClick={reload}>
						Reload
					</button>
				</form>

				<div className='center'>
					<h3>Your BMI is: {bmi}</h3>
					<p>{message}</p>
				</div>

				<div className='img-container'>
					<img src={imgSrc} alt='bmi' />
				</div>
			</div>
		</div>
	);
}

export default App;
