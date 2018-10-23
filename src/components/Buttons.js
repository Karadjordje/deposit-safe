import React, { Component } from 'react';

class Buttons extends Component {

	render() {
		return(
			<div>
				<div className="screen__group">
					<button onClick={this.props.handleClick} className="screen__btn" value="7">
						7
					</button>
					<button onClick={this.props.handleClick} className="screen__btn" value="8">
						8
						<span className="screen__icon">
							<i className="fas fa-arrow-up"></i>
						</span>
					</button>
					<button onClick={this.props.handleClick} className="screen__btn" value="9">
						9
					</button>
				</div>
				<div className="screen__group">
					<button onClick={this.props.handleClick} className="screen__btn" value="4">
						4
						<span className="screen__icon">
							<i className="fas fa-arrow-left"></i>
						</span>
					</button>
					<button onClick={this.props.handleClick} className="screen__btn" value="5">
						5
					</button>
					<button onClick={this.props.handleClick} className="screen__btn" value="6">
						6
						<span className="screen__icon">
							<i className="fas fa-arrow-right"></i>
						</span>
					</button>
				</div>
				<div className="screen__group">
					<button onClick={this.props.handleClick} className="screen__btn" value="1">
						1
					</button>
					<button onClick={this.props.handleClick} className="screen__btn" value="2">
						2
						<span className="screen__icon">
							<i className="fas fa-arrow-down"></i>
						</span>
					</button>
					<button onClick={this.props.handleClick} className="screen__btn" value="3">
						3
					</button>
				</div>
				<div className="screen__group">
					<button onClick={this.props.handleClick} className="screen__btn" value="R">
						R
						<span className="screen__icon">
							B
						</span>
					</button>
					<button onClick={this.props.handleClick} className="screen__btn" value="0">
						0
					</button>
					<button onClick={this.props.handleClick} className="screen__btn" value="L">
						L
						<span className="screen__icon">
							A
						</span>
					</button>
				</div>
			</div>
		);
	}
}

export default Buttons;
