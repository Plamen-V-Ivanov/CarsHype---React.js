import { requestFactory } from './requester';

const baseUrl = process.env.NODE_ENV === 'development' 
    ? 'http://localhost:3030'
    : 'http://localhost:3030'; // TODO: Add server url when deployed
const url = `${baseUrl}/data/articles`;

export const articleServiceFactory = (token) => {
    const request = requestFactory(token);

    const getAll = async () => {
        const result = await request.get(url);
        const articles = Object.values(result);
    
        return articles;
    };
    
    const getOne = async (articleId) => {
        const result = await request.get(`${url}/${articleId}`);
    
        return result;
    };
    
    const create = async (articleData) => {
        const result = await request.post(url, articleData);
    
        console.log(result);
    
        return result;
    };
    
    const edit = (articleId, data) => request.put(`${url}/${articleId}`, data);

    const deleteArticle = (articleId) => request.delete(`${url}/${articleId}`);


    return {
        getAll,
        getOne,
        create,
        edit,
        delete: deleteArticle,
    };
}