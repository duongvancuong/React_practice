import React, { Component } from 'react';
import MenuButton from './MenuButton';

class Header extends Component {
  render() {
    return (
      <div>
        <div className="header-main">
          <div className="header-left">
            <div className="logo-name">
              <a href="index.html"> <h1>Shoppy</h1></a>
            </div>
            <div className="search-box">
              <form>
                <input type="text" placeholder="Search..."/>
                <input type="submit" value=""/>
              </form>
            </div>
            <div className="clearfix"> </div>
          </div>

          <div className="header-right">
            <div className="profile_details_left">
              <ul className="nofitications-dropdown">
                <li className="dropdown head-dpdn">
                  <a href="#" className="dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="fa fa-envelope"></i><span className="badge">3</span></a>
                  <ul className="dropdown-menu">
                    <li>
                      <div className="notification_header">
                        <h3>You have 3 new messages</h3>
                      </div>
                    </li>
                    <li>
                      <a href="#">
                        <div className="user_img"><img src="dist/images/p4.png" alt="" /></div>
                        <div className="notification_desc">
                          <p>Lorem ipsum dolor</p>
                          <p><span>1 hour ago</span></p>
                        </div>
                        <div className="clearfix"></div>
                      </a>
                    </li>
                    <li>
                      <div className="notification_bottom">
                        <a href="#">See all messages</a>
                      </div>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>

          <div className="profile_details">
            <ul>
              <li className="dropdown profile_details_drop">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                  <div className="profile_img">
                    <span className="prfil-img"><img src="dist/images/p1.png" alt=""/> </span>
                    <div className="user-name">
                      <p>Malorum</p>
                      <span>Administrator</span>
                    </div>
                    <i className="fa fa-angle-down lnr"></i>
                    <i className="fa fa-angle-up lnr"></i>
                    <div className="clearfix"></div>
                  </div>
                </a>
                <ul className="dropdown-menu drp-mnu">
                  <li> <a href="#"><i className="fa fa-cog"></i> Settings</a> </li>
                  <li> <a href="#"><i className="fa fa-user"></i> Profile</a> </li>
                  <li> <a href="#"><i className="fa fa-sign-out"></i> Logout</a> </li>
                </ul>
              </li>
            </ul>
          </div>
          </div>
          <div className="clearfix"> </div>
        </div>
      <div className="clearfix"> </div>
    </div>
    )
  }
}

export default Header;
