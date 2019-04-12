import React, { Component } from 'react';
import './css/main.css';
import Buttons from './components/Buttons';
import {SEGMENTS, serialNum, base_url} from './constants.js';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			locked: false,
			segment: '',
			myinterface: '',
			idle: false,
			record: false,
			block: false,
			password: null,
		};

		this.handleBtnClick = this.handleBtnClick.bind(this);
		this.idleUser = this.idleUser.bind(this);
		this.runTimeout = this.runTimeout.bind(this);
		this.fetchData = this.fetchData.bind(this);
	}

	handleBtnClick(e) {
		const {
			locked,
		} = this.state;
		let btnVal = e.target.value;

		let newState = {
			idle: false,
		};

		if (this.state.block) {
			return;
		}

		clearTimeout(this.timeout);

		if (!locked) {
			if (btnVal === 'R') {
				this.setState({
					record: true,
				});
				newState.segment = SEGMENTS.RECORD;
				newState.myinterface = '';
			} else if (btnVal === 'L') {
				if (this.state.myinterface.length !== 4) {
					this.setState({
						record: false,
					});
					newState.segment = SEGMENTS.ERROR;
					newState.myinterface = '';
				} else if(this.state.record) {
					newState.segment = SEGMENTS.LOCKING;
					newState.block = true;
					newState.password = this.state.myinterface;
					newState.myinterface = '';
				}
			} else {
				newState.myinterface = this.state.myinterface + btnVal;
			}
		} else {
			newState.myinterface = this.state.myinterface + btnVal;
		}

		this.setState(newState, this.runTimeout);
		this.idleUser();
	}

	idleUser() {
		clearTimeout(this.idleUserTimer);
		this.idleUserTimer = setTimeout(() => {
			this.setState({ idle: true });
		}, 5000);
	}

	fetchData() {
		// Change message to validation while waiting for response
		this.setState({
			segment: SEGMENTS.VALIDATING,
			myinterface: '',
			block: true
		});

		let fetch_url = `${base_url}code=${this.state.myinterface}`;

		const myOptions = {
			method: 'GET',
			cache: 'default'
		};

		fetch(fetch_url, myOptions)
			.then(response => response.json())
			.then(response => {
				console.log('response', response);
				if (response.sn === serialNum) {
					this.setState({
						segment: SEGMENTS.UNLOCKING,
						myinterface: '',
						block: true
					});
				} else {
					this.setState({
						segment: SEGMENTS.ERROR,
						myinterface: '',
						block: false
					});
				}
			})
			.catch(error => { // If there is no internet for example
				console.log(error);
				this.setState({
					segment: SEGMENTS.ERROR,
					myinterface: '',
					block: false
				});
			});
	}

	runTimeout() {
		clearTimeout(this.timeout);
		if (this.state.segment === SEGMENTS.LOCKING || this.state.segment === SEGMENTS.UNLOCKING) {
			this.timeout = setTimeout(() => {
				this.setState({
					block: false,
					segment: SEGMENTS.BLANK,
					locked: this.state.segment === SEGMENTS.LOCKING,
				});
			}, 3000);
		} else {
			this.timeout = setTimeout(function(){
				if (this.state.locked) {
					if (this.state.segment === SEGMENTS.SERVICE) {
						if (this.state.myinterface !== '') {
							this.fetchData();
						}
						return;
					} else if (this.state.myinterface.length === 4) {
						// try to unlock
						if (this.state.myinterface === this.state.password) {
							this.setState({
								segment: SEGMENTS.UNLOCKING,
								myinterface: '',
								block: true
							});
						} else {
							this.setState({
								segment: SEGMENTS.ERROR,
								myinterface: ''
							});
						}
						this.runTimeout();
						return;
					} else if (this.state.myinterface === '000000') {
						this.setState({
							segment: SEGMENTS.SERVICE,
							myinterface: ''
						});
						this.runTimeout();
						return;
					}
				}
				this.timeout = setTimeout(() => {
					this.setState({
						myinterface: '',
						segment: SEGMENTS.BLANK,
					});
				}, 500);
			}.bind(this), 500);
		}
	}

	componentDidMount() {
		this.idleUser();
	}

	render() {
		return (
			<div className="panel">
				<div
					className="panel__screen"
					style={{
						backgroundColor: this.state.idle ? '#47b2b2' : '#7fffff'
					}}
				>
					<div className="panel__status">{this.state.locked ? 'Locked' : 'Unlocked'}</div>
					<input
						type="text"
						className="panel__value"
						value={this.state.myinterface || this.state.segment}
						readOnly
					/>
				</div>
				<Buttons handleClick={this.handleBtnClick} />

				<span className="panel__serial">
					S/N: 4815162342
				</span>
			</div>
		);
	}
}

export default App;
