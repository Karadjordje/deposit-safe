import React, { Component } from 'react';
import './css/main.css';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {

		};
	}

	render() {
		return (
			<div class="panel">
				<div class="screen">
					<h1 class="value">Record</h1>
					<h3 class="status">Locked</h3>
				</div>
				<div class="buttons_parent">
					<div class="button_group">
						<button class="custom_btn">
							7
						</button>
						<button class="custom_btn">
							8
							<span class="bottom_right">
								<i class="fas fa-arrow-up"></i>
							</span>
						</button>
						<button class="custom_btn">
							9
						</button>
					</div>
					<div class="button_group">
						<button class="custom_btn">
							4
							<span class="bottom_right">
								<i class="fas fa-arrow-left"></i>
							</span>
						</button>
						<button class="custom_btn">
							5
						</button>
						<button class="custom_btn">
							6
							<span class="bottom_right">
								<i class="fas fa-arrow-right"></i>
							</span>
						</button>
					</div>
					<div class="button_group">
						<button class="custom_btn">
							1
						</button>
						<button class="custom_btn">
							2
							<span class="bottom_right">
								<i class="fas fa-arrow-down"></i>
							</span>
						</button>
						<button class="custom_btn">
							3
						</button>
					</div>
					<div class="button_group">
						<button class="custom_btn">
							R
							<span class="bottom_right">
								B
							</span>
						</button>
						<button class="custom_btn">
							0
						</button>
						<button class="custom_btn">
							L
							<span class="bottom_right">
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
