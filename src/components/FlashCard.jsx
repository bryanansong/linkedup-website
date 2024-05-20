import { useState } from "react";

const FlashCard = ({ question, answer }) => {
	const [answerVisible, setAnswerVisible] = useState(false);

	const handleClick = () => {
		setAnswerVisible(!answerVisible);
	};

	return (
		<div
			className="card"
			onClick={() => handleClick()}
		>
			{answerVisible ? (
				<div className="card-content">
					<h1 className="card-heading">Answer</h1>
					<h2>{answer}</h2>
				</div>
			) : (
				<div className="card-content">
					<h1 className="card-heading">Question</h1>
					<h2>{question}</h2>
				</div>
			)}
		</div>
	);
};

export default FlashCard;
