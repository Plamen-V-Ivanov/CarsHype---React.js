import { createContext, useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { articleServiceFactory } from '../services/articleService';

export const ArticleContext = createContext();

export const ArticleProvider = ({
    children,
}) => {
    const navigate = useNavigate();
    const [articles, setArticles] = useState([]);
    const articleService = articleServiceFactory();

    useEffect(() => {
        articleService.getAll()
            .then(result => {
                setArticles(result)
            })
    }, []);

    const onCreateArticleSubmit = async (data) => {
        const newArticle = await articleService.create(data);

        setArticles(state => [...state, newArticle]);

        navigate('/articles');
    };

    const onArticleEditSubmit = async (values) => {
        const result = await articleService.edit(values._id, values);

        setArticles(state => state.map(x => x._id === values._id ? result : x));

        // navigate(`/articles/${values._id}`);
        navigate('/articles');

    };

    const deleteArticle = (articleId) => {
        setArticles(state => state.filter(article => article._id !== articleId));
    };

    const getArticle = (articleId) => {
        return articles.find(article => article._id === articleId);
    };

    const contextValues = {
        articles,
        onCreateArticleSubmit,
        onArticleEditSubmit,
        deleteArticle,
        getArticle,
    };

    return (
        <ArticleContext.Provider value={contextValues}>
            {children}
        </ArticleContext.Provider>
    );
};

export const useArticleContext = () => {
    const context = useContext(ArticleContext);

    return context;
};