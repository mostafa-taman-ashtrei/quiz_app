import axios from 'axios';
import { Difficulty, Question, QuestionsState } from '../types/questionTypes';

import { shuffleArray } from '../utils/shffle_array';

const fetchQuestions = async (
    count: number,
    difficulty: Difficulty,
    category: number,
    random: boolean,
): Promise<QuestionsState[]> => {
    let url: string;

    if (!random) url = `https://opentdb.com/api.php?amount=${count}&difficulty=${difficulty}&category=${category}&type=multiple`;
    else url = `https://opentdb.com/api.php?amount=${count}&difficulty=${difficulty}&type=multiple`;

    try {
        const res = await axios.get(url);

        const finalData: QuestionsState[] = res.data.results.map((q: Question) => ({
            ...q,
            answers: shuffleArray([...q.incorrect_answers, q.correct_answer]),
        }));

        return finalData;
    } catch (e) {
        console.log(e);
        throw new Error('FAiled To fetch data ):');
    }
};

export default fetchQuestions;
