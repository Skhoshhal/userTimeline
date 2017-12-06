import React from 'react';

class Content extends React.Component {
    render() {
        return(
            <div className="content">
                <div className="line"></div>
                <div className="item">
                    <div className="avatar">
                        <img
                            alt="doug"
                            src="http://www.croop.cl/UI/twitter/images/russel.jpg"
                        />
                    </div>
                    <span className="time">
                               An hour ago
                           </span>
                    <p>Ate lunch</p>
                </div>
                <div className="item">
                    <div className="avatar">
                        <img
                            alt="doug"
                            src="http://www.croop.cl/UI/twitter/images/doug.jpg"
                        />
                    </div>
                    <span className="time">
                           2:21 pm
                       </span>
                    <p>How do you do ?</p>
                </div>

                <div className="item">
                    <div className="avatar">
                        <img
                            alt="doug"
                            src="http://www.croop.cl/UI/twitter/images/russel.jpg"
                        />
                    </div>
                    <span className="time">
                               2:30 am
                           </span>
                    <p>Are you ok ?</p>
                </div>

                <div className="item">
                    <div className="avatar">
                        <img
                            alt="doug"
                            src="http://www.croop.cl/UI/twitter/images/doug.jpg"
                        />
                    </div>
                    <span className="time">
                               2:35 am
                           </span>
                    <p>Yes sure everything is ok.</p>
                </div>
            </div>
        )
    }
}

export default Content;