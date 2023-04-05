import { useParams, Outlet, Navigate } from 'react-router-dom';
import { useAuthContext } from '../../contexts/AuthContext';

import { useArticleContext } from "../../contexts/ArticleContext";

export const DataOwner = ({
    children,
}) => {
    const { dataId } = useParams();
    const { getArticle } = useArticleContext();
    const { userId } = useAuthContext();

    const currentArticle = getArticle(dataId);

    // if (currentArticle && currentGame._ownerId !== userId) {
    //     return <Navigate to={`/catalog/${id}`} replace />
    // }

    if (currentArticle && currentArticle._ownerId !== userId) {
        return <Navigate to='/articles' replace />
    }


    return children ? children : <Outlet />
};