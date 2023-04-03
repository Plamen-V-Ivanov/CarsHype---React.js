export const Profile = () => {
    return (

        <>
            <section className="profile-section">


                <article>
                    <div className="profile-container">
                        <div className="profile-card">
                            <div className="profile-left-container">
                                <img src="https://static.vecteezy.com/system/resources/previews/005/544/718/original/profile-icon-design-free-vector.jpg" width="100" height="100" />

                                {/* if user logged */}
                                <button className="edit-profile-button">Edit</button>

                            </div>

                            <div className="profile-right-container">

                                <div> <span className="user-info-label"> Username: </span><span className="user-info">PlamenIvanov</span></div>
                                <div><span className="user-info-label"> Email: </span><span className="user-info">abvabv@abv.bg</span></div>
                                <div><span className="user-info-label"> Gener: </span><span className="user-info">male</span></div>
                                <div><span className="user-info-label"> Posts: </span><span className="user-info">0</span></div>

                            </div>
                        </div>
                    </div>

                </article>

            </section >


            {/* if articles */}

         

            <section id="postIndex" className="widthWrapper" style={{ margin: "0px auto" }}>
            <h2 className="profile-page-heading">Username's articles:</h2>

                <article>
                    <div className="article-container">
                        <div className="article-card">
                            <div className="left-container">
                                <img src="https://www.familyhandyman.com/wp-content/uploads/2020/03/Brake-Caliper-GettyImages-691429614.jpg" width="200" height="200" />
                                {/* <div className="article-likes"><span>Likes:</span><span>0</span></div>
            <div className="article-comments"><span>Comments:</span><span>0</span></div> */}
                                <div className="likes-and-comments-contrainer">

                                    <span>Likes: </span><span>0</span>
                                    <span>Comments: </span><span>0</span>

                                </div>
                                <span className="comment-buttons">
                                    <button className="comment-button">Like</button>
                                    <button className="comment-button">Comment</button>
                                    {/* if author 
            <button className="comment-button">Edit</button> */}
                                </span>
                            </div>

                            <div className="right-container">
                                <div>
                                    <h1>Brakes</h1>
                                    <h2>Speeding Up Your Website 101</h2>
                                    <p>It seems like only a select few, besides big companies and corporations, care about web page speed and performance. Browsing the web, it's common to see load times of 5 seconds and pages that weigh 4, 5, sometimes 10 megabytes! Even if that's not you, is your website optimized to its full potential? This post is not about stripping your page, its about optimizing everything so that your website loads as fast as possible.</p>
                                </div>
                                <div className="">Posted by <span className="article-author-name">Name Surname</span> on <span>19.1.2017</span>
                                    <span className="show-button">
                                        <button className="comment-button">Show comments</button>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                </article>

                <article>
                    <div className="article-container">
                        <div className="article-card">
                            <div className="left-container">
                                <img src="https://www.familyhandyman.com/wp-content/uploads/2020/03/Brake-Caliper-GettyImages-691429614.jpg" width="200" height="200" />
                                {/* <div className="article-likes"><span>Likes:</span><span>0</span></div>
            <div className="article-comments"><span>Comments:</span><span>0</span></div> */}
                                <div className="likes-and-comments-contrainer">

                                    <span>Likes: </span><span>0</span>
                                    <span>Comments: </span><span>0</span>

                                </div>
                                <span className="comment-buttons">
                                    <button className="comment-button">Like</button>
                                    <button className="comment-button">Comment</button>
                                    {/* if author 
            <button className="comment-button">Edit</button> */}
                                </span>
                            </div>

                            <div className="right-container">
                                <div>
                                    <h1>Brakes</h1>
                                    <h2>Speeding Up Your Website 101</h2>
                                    <p>It seems like only a select few, besides big companies and corporations, care about web page speed and performance. Browsing the web, it's common to see load times of 5 seconds and pages that weigh 4, 5, sometimes 10 megabytes! Even if that's not you, is your website optimized to its full potential? This post is not about stripping your page, its about optimizing everything so that your website loads as fast as possible.</p>
                                </div>
                                <div className="">Posted by <span className="article-author-name">Name Surname</span> on <span>19.1.2017</span>
                                    <span className="show-button">
                                        <button className="comment-button">Show comments</button>
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="article-comment-section">
                            <div className="comment-author">
                                <span className="comment-author-name">Name Surname</span> commented on <span>19.1.2017</span>:
                                <span className="comment-buttons">
                                    <button className="comment-button">Delete</button>
                                    <button className="comment-button">Edit</button>
                                </span>
                            </div>
                            <div className="comment-body"><p>Cool one!</p></div>
                            <hr></hr>

                            <div className="comment-author">
                                <span className="comment-author-name">Name Surname</span> commented on <span>19.1.2017</span>:
                                <span className="comment-buttons">
                                    <button className="comment-button">Delete</button>
                                    <button className="comment-button">Edit</button>
                                </span>
                            </div>
                            <div className="comment-body"><p>Cool one!</p></div>
                            <hr></hr>
                        </div>
                    </div>


                </article>

                <article>
                    <div className="article-container">
                        <div className="article-card">
                            <div className="left-container">
                                <img src="https://www.familyhandyman.com/wp-content/uploads/2020/03/Brake-Caliper-GettyImages-691429614.jpg" width="200" height="200" />
                                {/* <div className="article-likes"><span>Likes:</span><span>0</span></div>
            <div className="article-comments"><span>Comments:</span><span>0</span></div> */}
                                <div className="likes-and-comments-contrainer">

                                    <span>Likes: </span><span>0</span>
                                    <span>Comments: </span><span>0</span>

                                </div>
                                <span className="comment-buttons">
                                    <button className="comment-button">Like</button>
                                    <button className="comment-button">Comment</button>
                                    {/* if author 
            <button className="comment-button">Edit</button> */}
                                </span>
                            </div>

                            <div className="right-container">
                                <div>
                                    <h1>Brakes</h1>
                                    <h2>Speeding Up Your Website 101</h2>
                                    <p>It seems like only a select few, besides big companies and corporations, care about web page speed and performance. Browsing the web, it's common to see load times of 5 seconds and pages that weigh 4, 5, sometimes 10 megabytes! Even if that's not you, is your website optimized to its full potential? This post is not about stripping your page, its about optimizing everything so that your website loads as fast as possible.</p>
                                </div>
                                <div className="">Posted by <span className="article-author-name">Name Surname</span> on <span>19.1.2017</span>
                                    <span className="show-button">
                                        <button className="comment-button">Show comments</button>
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="article-comment-section">
                            <div className="comment-author">
                                <span className="comment-author-name">Name Surname</span> commented on <span>19.1.2017</span>:
                                <span className="comment-buttons">
                                    <button className="comment-button">Delete</button>
                                    <button className="comment-button">Edit</button>
                                </span>
                            </div>
                            <div className="comment-body"><p>Cool one!</p></div>
                            <hr></hr>

                            <div className="comment-author">
                                <span className="comment-author-name">Name Surname</span> commented on <span>19.1.2017</span>:
                                <span className="comment-buttons">
                                    <button className="comment-button">Delete</button>
                                    <button className="comment-button">Edit</button>
                                </span>
                            </div>
                            <div className="comment-body"><p>Cool one!</p></div>
                            <hr></hr>
                        </div>
                    </div>


                </article>


            </section>



            <section id="postIndex" className="widthWrapper" style={{ margin: "0px auto" }}>
            <h2 className="profile-page-heading">Username's post cars:</h2>

            </section>
  



        </>

    );
}