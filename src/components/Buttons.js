import React, { Component } from 'react';

class Buttons extends Component {

	render() {
		return(
			<div className="buttons_parent">
				<div className="button_group">
					<button onClick={this.props.handleClick} className="custom_btn" value="7">
						7
					</button>
					<button onClick={this.props.handleClick} className="custom_btn" value="8">
						8
						<span className="bottom_right">
							<i className="fas fa-arrow-up"></i>
						</span>
					</button>
					<button onClick={this.props.handleClick} className="custom_btn" value="9">
						9
					</button>
				</div>
				<div className="button_group">
					<button onClick={this.props.handleClick} className="custom_btn" value="4">
						4
						<span className="bottom_right">
							<i className="fas fa-arrow-left"></i>
						</span>
					</button>
					<button onClick={this.props.handleClick} className="custom_btn" value="5">
						5
					</button>
					<button onClick={this.props.handleClick} className="custom_btn" value="6">
						6
						<span className="bottom_right">
							<i className="fas fa-arrow-right"></i>
						</span>
					</button>
				</div>
				<div className="button_group">
					<button onClick={this.props.handleClick} className="custom_btn" value="1">
						1
					</button>
					<button onClick={this.props.handleClick} className="custom_btn" value="2">
						2
						<span className="bottom_right">
							<i className="fas fa-arrow-down"></i>
						</span>
					</button>
					<button onClick={this.props.handleClick} className="custom_btn" value="3">
						3
					</button>
				</div>
				<div className="button_group">
					<button onClick={this.props.handleClick} className="custom_btn" value="R">
						R
						<span className="bottom_right">
							B
						</span>
					</button>
					<button onClick={this.props.handleClick} className="custom_btn" value="0">
						0
					</button>
					<button onClick={this.props.handleClick} className="custom_btn" value="L">
						L
						<span className="bottom_right">
							A
						</span>
					</button>
				</div>
			</div>
		);
	}
}

export default Buttons;
