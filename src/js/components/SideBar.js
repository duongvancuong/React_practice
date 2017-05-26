import React, { Component } from 'react';

class SideBar extends Component {
  render() {
    const styleFloatRight = {
      float: "right"
    }

    return (
      <div>
        <div className="sidebar-menu">
          <div className="logo"> <a href="#" className="sidebar-icon"> <span className="fa fa-bars"></span> </a> <a href="#"> <span id="logo" ></span>
          </a> </div>
              <div className="menu">
                <ul id="menu" >
                  <li id="menu-home" ><a href="index.html"><i className="fa fa-tachometer"></i><span>Dashboard</span></a></li>
                   <li><a href="#"><i className="fa fa-shopping-cart"></i><span>E-Commerce</span><span className="fa fa-angle-right" style={styleFloatRight}></span></a>
                     <ul id="menu-academico-sub" >
                        <li id="menu-academico-avaliacoes" ><a href="product.html">Product</a></li>
                        <li id="menu-academico-boletim" ><a href="price.html">Price</a></li>
                       </ul>
                   </li>
                </ul>
              </div>
         </div>
        <div className="clearfix"> </div>
      </div>
    )
  }
}

export default SideBar;
