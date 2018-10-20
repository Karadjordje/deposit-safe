import React, { Component } from 'react';
import './css/main.css';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			status: 'Unlocked',
			interface: '',
		};

		this.handleBtnClick = this.handleBtnClick.bind(this);
		this.idleUser = this.idleUser.bind(this);
	}

	handleBtnClick(e) {
		console.log(e.target.value);
		let btnVal = e.target.value;
		let interfaceVal = this.state.interface + btnVal;
		this.setState({
			interface: interfaceVal,
		});
	}

	idleUser() {
		let time;
		let screen = document.querySelector('.screen');
		let btns = document.querySelectorAll('button');

		window.onload = resetTimer;
		btns.forEach(btn => {
			btn.addEventListener('click', function() {
				resetTimer();
			});
		});

		function turnOffScreen() {
			screen.style.background = '#47b2b2';
		}

		function resetTimer() {
			if (screen.style.background === 'rgb(71, 178, 178)') {
				screen.style.background = '#7fffff';
			}
			clearTimeout(time);
			time = setTimeout(turnOffScreen, 5000);
		}
	}

	componentDidMount() {
		this.idleUser();
	}

	render() {
		return (
			<div className="panel">
				<div className="screen">
					<input type="text" className="status" defaultValue={this.state.status} />
					<input type="text" className="value" defaultValue={this.state.interface} />
				</div>
				<div className="buttons_parent">
					<div className="button_group">
						<button onClick={this.handleBtnClick} className="custom_btn" value="7">
							7
						</button>
						<button onClick={this.handleBtnClick} className="custom_btn" value="8">
							8
							<span className="bottom_right">
								<i className="fas fa-arrow-up"></i>
							</span>
						</button>
						<button onClick={this.handleBtnClick} className="custom_btn" value="9">
							9
						</button>
					</div>
					<div className="button_group">
						<button onClick={this.handleBtnClick} className="custom_btn" value="4">
							4
							<span className="bottom_right">
								<i className="fas fa-arrow-left"></i>
							</span>
						</button>
						<button onClick={this.handleBtnClick} className="custom_btn" value="5">
							5
						</button>
						<button onClick={this.handleBtnClick} className="custom_btn" value="6">
							6
							<span className="bottom_right">
								<i className="fas fa-arrow-right"></i>
							</span>
						</button>
					</div>
					<div className="button_group">
						<button onClick={this.handleBtnClick} className="custom_btn" value="1">
							1
						</button>
						<button onClick={this.handleBtnClick} className="custom_btn" value="2">
							2
							<span className="bottom_right">
								<i className="fas fa-arrow-down"></i>
							</span>
						</button>
						<button onClick={this.handleBtnClick} className="custom_btn" value="3">
							3
						</button>
					</div>
					<div className="button_group">
						<button onClick={this.handleBtnClick} className="custom_btn" value="R">
							R
							<span className="bottom_right">
								B
							</span>
						</button>
						<button onClick={this.handleBtnClick} className="custom_btn" value="0">
							0
						</button>
						<button onClick={this.handleBtnClick} className="custom_btn" value="L">
							L
							<span className="bottom_right">
								A
							</span>
						</button>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
