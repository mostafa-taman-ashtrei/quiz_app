import axios from 'axios';
import { Category } from '../types/categoryTypes';

const getCategories = async (): Promise<Category[]> => {
    try {
        const res = await axios.get('https://opentdb.com/api_category.php');
        const finalData = res.data.trivia_categories.map((c: Category) => ({ ...c }));
        return finalData;
    } catch (e) {
        console.log(e);
        throw new Error('FAiled to fetch categories');
    }
};

export default getCategories;
