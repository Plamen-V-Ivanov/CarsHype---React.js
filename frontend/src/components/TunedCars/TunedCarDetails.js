export const TunedCarDetails = () => {
    return (

        <>
            <section className="car-section">


                <article>
                    <div className="car-container">
                        <div className="car-card">
                            <div className="car-left-container">
                                <img src="https://www.tuningblog.eu/wp-content/uploads/2016/06/slammed-black-BMW-M5-F10-Manhart-ADV.1-Tuning.jpg" width="600" height="400" />

                                {/* if user logged */}


                            </div>

                            <div className="car-right-container">

                                <div> <span className="car-info-label"> Make: </span><span className="car-info">BMW</span></div>
                                <div><span className="car-info-label"> Model: </span><span className="car-info">M5</span></div>
                                <div><span className="car-info-label"> Tuner: </span><span className="car-info">Manhart</span></div>
                                <div><span className="car-info-label"> Year: </span><span className="car-info">2010</span></div>
                                <div><span className="car-info-label"> Motor type: </span><span className="car-info">Petrol</span></div>
                                <div><span className="car-info-label"> Power hp: </span><span className="car-info">210</span></div>
                                <div><span className="car-info-label"> Torque Nm: </span><span className="car-info">220</span></div>

                            </div>
                        </div>
                    </div>

                </article>

            </section >


            {/* if articles */}

            <h2 className="car-page-heading">Description:</h2>
            <div className="car-description">
                What is Lorem Ipsum?
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </div>

            <div className="car-likes-and-comments">
                <div className="car-likes-and-comments-stats">
                    <span >Likes: </span><span>0</span>
                </div>
                <div className="car-likes-and-comments-stats">
                    <span >Comments: </span><span>0</span>
                </div>
            </div>

            <div className="car-buttons-container">

                {/* <button className="detail-car-button">Edit</button> */}
                <button className="detail-car-button">Like</button>
                <button className="detail-car-button">Comment</button>
                <button className="detail-car-button">Show comments</button>

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

            <div className="end-separator"> </div>

            











        </>

    );
}