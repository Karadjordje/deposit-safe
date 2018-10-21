import React, { Component } from 'react';
import './css/main.css';

const SEGMENTS = {
	BLANK: '',
	ERROR: 'Error',
	RECORD: 'Record',
	READY: 'Ready',
	LOCKING: 'Locking...',
	UNLOCKING: 'Unlocking...',
	SERVICE: 'Service',
	VALIDATING: 'Validating...',
};

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			locked: false,
			segment: '',
			interface: '',
			idle: false,
			password: null,
		};

		this.handleBtnClick = this.handleBtnClick.bind(this);
		this.idleUser = this.idleUser.bind(this);
		this.runTimeout = this.runTimeout.bind(this);
	}

	handleBtnClick(e) {
		const {
			locked,
		} = this.state;
		let btnVal = e.target.value;

		let newState = {
			idle: false,
			// interface: interfaceVal,
		};

		clearTimeout(this.timeout);

		if (this.state.blocking) {
			return;
		}

		if (!locked) {
			if (btnVal === 'R') {
				newState.segment = SEGMENTS.RECORD;
				newState.interface = '';
			} else if (btnVal === 'L') {
				if (this.state.interface.length !== 4) {
					newState.segment = SEGMENTS.ERROR;
					newState.interface = '';
				} else {
					newState.segment = SEGMENTS.LOCKING;
					newState.block = true;
					newState.interface = '';
					newState.password = this.state.interface;
				}
			} else {
				newState.interface = this.state.interface + btnVal;
			}
		} else {
			newState.interface = this.state.interface + btnVal;

		}
		this.setState(newState, this.runTimeout);
		// unlocked
			// record
				// cetri broja ->
					// locked
						// locking blockira 3 sekunde
							// locked
			// blank
				// do nothing
		// locked
			// blank
				// cetri karaakter
					// false
						// Error state
					// true
						// otkucava blokira 3 sekune
							// unlock
				// timeout clear za 1. sekund inactivity
				// 000000
					// service mode
						// blank
						// service code
							// salje api zahtev sa service code
							// validate
								// error
								// unlocked
		this.idleUser();
	}

	idleUser() {
		clearTimeout(this.idleUserTimer);
		this.idleUserTimer = setTimeout(() => {
			this.setState({ idle: true });
		}, 5000);
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
						return;
					} else if (this.state.interface.length === 4) {
						// try to unlock
						if (this.state.interface === this.state.password) {
							this.setState({ segment: SEGMENTS.UNLOCKING, interface: '', block: true });
						} else {
							this.setState({ segment: SEGMENTS.ERROR, interface: '' });
						}
						this.runTimeout();
						return;
					} else if (this.state.interface === '000000') {
						this.setState({ segment: SEGMENTS.SERVICE, interface: '' });
						this.runTimeout();
						return;
					}
				}
				this.timeout = setTimeout(() => {
					this.setState({
						interface: '',
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
					className="screen"
					style={{
						backgroundColor: this.state.idle ? '#47b2b2' : '#7fffff'
					}}
				>
					<div className="status">{this.state.locked ? 'Locked' : 'Unlocked'}</div>
					<input
						type="text"
						className="value"
						value={this.state.interface || this.state.segment}
						readOnly
					/>
				</div>
				<Buttons handleClick={this.handleBtnClick} />
			</div>
		);
	}
}

const Buttons = ({ handleClick }) => <div className="buttons_parent">
	<div className="button_group">
		<button onClick={handleClick} className="custom_btn" value="7">
			7
		</button>
		<button onClick={handleClick} className="custom_btn" value="8">
			8
			<span className="bottom_right">
				<i className="fas fa-arrow-up"></i>
			</span>
		</button>
		<button onClick={handleClick} className="custom_btn" value="9">
			9
		</button>
	</div>
	<div className="button_group">
		<button onClick={handleClick} className="custom_btn" value="4">
			4
			<span className="bottom_right">
				<i className="fas fa-arrow-left"></i>
			</span>
		</button>
		<button onClick={handleClick} className="custom_btn" value="5">
			5
		</button>
		<button onClick={handleClick} className="custom_btn" value="6">
			6
			<span className="bottom_right">
				<i className="fas fa-arrow-right"></i>
			</span>
		</button>
	</div>
	<div className="button_group">
		<button onClick={handleClick} className="custom_btn" value="1">
			1
		</button>
		<button onClick={handleClick} className="custom_btn" value="2">
			2
			<span className="bottom_right">
				<i className="fas fa-arrow-down"></i>
			</span>
		</button>
		<button onClick={handleClick} className="custom_btn" value="3">
			3
		</button>
	</div>
	<div className="button_group">
		<button onClick={handleClick} className="custom_btn" value="R">
			R
			<span className="bottom_right">
				B
			</span>
		</button>
		<button onClick={handleClick} className="custom_btn" value="0">
			0
		</button>
		<button onClick={handleClick} className="custom_btn" value="L">
			L
			<span className="bottom_right">
				A
			</span>
		</button>
	</div>
</div>


export default App;
