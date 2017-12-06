import React from 'react';
import './timeline.css'

class Timeline extends React.Component {
   render() {
       return(
           <div className="notificationsFrame">
               <div className="panel">
                   <div className="header">

                       <div className="menuIcon">
                           <div className="dashTop"></div>
                           <div className="dashBottom"></div>
                           <div className="circle"></div>
                       </div>
                       <span className="title">Time line</span>

                       <input
                           type="text"
                           className="searchInput"
                           placeholder="Search ..."
                       />
                       <div className="fa fa-search searchIcon"></div>
                   </div>
                   <div className="content">
                       <div className="line"></div>
                       <div className="item">
                           <div className="avatar">
                               <img
                                   alt="doug"
                                   src="http://www.croop.cl/UI/twitter/images/doug.jpg"
                               />
                           </div>
                           <span className="time">
                               An hour ago
                           </span>
                           <p>Hey!</p>
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
                           <p>Hi</p>
                       </div>

                       <div className="item">
                           <div className="avatar">
                               <img
                                   alt="doug"
                                   src="http://www.croop.cl/UI/twitter/images/doug.jpg"
                               />
                           </div>
                           <span className="time">
                               5:30 pm
                           </span>
                           <p>What is you plan for tonight ?</p>
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
                           <p>I will do some other stuffs at home.</p>
                       </div>
                   </div>
               </div>
               </div>
       )
   }
};

export default Timeline;