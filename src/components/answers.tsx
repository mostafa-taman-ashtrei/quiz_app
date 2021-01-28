import React from 'react';
import { AnswerType } from '../types/answerType';

interface props {
    answers: AnswerType[]
}

const AnswerCard: React.FC<props> = ({ answers }: props) => {
    console.log(answers);
    return (
        <div>
            {
                answers.map((a: AnswerType) => (
                    <>
                        <h3>
                            Q:
                            {a.question}
                        </h3>
                        <p>
                            Your ans :
                            {' '}
                            {a.ans}
                            {
                                a.correct ? <span>✔️</span>
                                    : (
                                        <>
                                            <span>❌</span>
                                            <p>
                                                Correct ans:
                                                {' '}
                                                {a.ca}
                                            </p>
                                        </>
                                    )
                            }
                        </p>
                        <hr />
                    </>
                ))
            }
        </div>
    );
};

export default AnswerCard;
