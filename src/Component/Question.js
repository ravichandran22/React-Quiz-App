// Question.js

import React, {Component} from "react";
import Options from "./Option";

class Question extends Component{
	render() {
		const {question, selectedOption, onOptionChange, onSubmit} = this.props;

		return(
			<div className="">
				<h3 style={{
                    textAlign: 'center',
                    marginBottom: '30px'
                    }}>Question {question.id}</h3>
				<h5 className="mt-2" style={{marginBottom: "30px"}}>{question.question}</h5>
				<form onSubmit={onSubmit} className="mt-2 mb-2">
					<Options
						options={question.options}
						selectedOption={selectedOption}
						onOptionChange={onOptionChange}
					/>
					<button type="submit" className="btn btn-primary mt-3">
						SUBMIT
					</button>
				</form>
				
			</div>
		)
	}
}

export default Question;
