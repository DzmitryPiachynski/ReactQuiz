import './index.css';
import {useState} from "react";

const questions = [
    {
        title: 'React - is ... ?',
        variants: ['library', 'framework', 'application'],
        correct: 0,
    },
    {
        title: 'Component - is ... ',
        variants: ['application', 'part of page or application', 'i have no answer'],
        correct: 1,
    },
    {
        title: 'What is JSX?',
        variants: [
            'simple HTML',
            'function',
            'JavaScript syntax extension to use HTML',
        ],
        correct: 2,
    },
];

function Result({answers}) {
    return (
        <div className="result">
            <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png"/>
            <h2>You guessed {answers} out of {questions.length} answers</h2>
            <a href='/'>
                <button>Try again</button>
            </a>
        </div>
    );
}

function Game({step, question, onClickVariant}) {

    const percentage = Math.round(step / questions.length * 100)

    return (
        <>
            <div className="progress">
                <div style={{width: `${percentage}%`}} className="progress__inner"></div>
            </div>
            <h1>{question.title}</h1>
            <ul>
                {
                    question.variants.map((variant, index) =>
                        <li key={variant}
                            onClick={() => onClickVariant(index)}
                        >
                            {variant}</li>)
                }
            </ul>
        </>
    );
}

function App() {

    const [step, setStep] = useState(0)
    const question = questions[step]
    const [answers, setAnswers] = useState(0)

     const onClickVariant = (index) => {
         setStep(step + 1)
         if (index === question.correct) {
             setAnswers(answers + 1)
         }
     }

    return (
        <div className="App">
            {
                step !== questions.length ?
                    <Game step={step} question={question} onClickVariant={onClickVariant}/> :
                    <Result answers={answers}/>
            }
        </div>
    );
}

export default App;