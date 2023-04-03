import { Link } from "react-router-dom";


export const CreateArticle = () => {

    return (

        <div className="form-wrap">

            <div className="tabs">
                <h3 className="signup-tab">Article</h3>
            </div>

            <div className="tabs-content">
                <div id="signup-tab-content" className="active">
                    <form className="signup-form" action="" method="post">
                        <input type="text" className="input" id="post-tag" autocomplete="off" placeholder="Tag" />
                        <input type="text" className="input" id="post-title" autocomplete="off" placeholder="Title" />
                        <textarea className="input" name="post-body" rows="4" cols="50" placeholder="Body"></textarea>
                        <input type="text" className="input" id="post-img-url" autocomplete="off" placeholder="Image URL" />
                        

                        <input type="submit" className="button" value="Post" />
                    </form>

                </div>
            </div>
        </div>


    );
};