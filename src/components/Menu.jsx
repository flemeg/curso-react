import React, { Component } from "react";
import Bet from "./Bet";
import HouseOfCards from "./HouseOfCards";

export default class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = { page: 0 };
  }

  render() {
    let comp;

    switch (this.state.page) {
      case 1:
        comp = <Bet />;
        break;
      case 2:
        comp = <HouseOfCards />;
      default:
        break;
    }

    return (
      <div id="layout">
        <a href="#menu" id="menuLink" className="menu-link">
          <span></span>
        </a>

        <div id="menu">
          <div className="pure-menu">
            <a className="pure-menu-heading" href="#">
              Curso React
            </a>

            <ul className="pure-menu-list">
              <li className="pure-menu-item">
                <a onClick={()=> this.setState({page: 1})} href="#" className="pure-menu-link">
                  Aula 1
                </a>
              </li>
              <li className="pure-menu-item">
                <a onClick={()=> this.setState({page: 2})} href="#" className="pure-menu-link">
                  Aula 2
                </a>
              </li>
              <li className="pure-menu-item">
                <a href="#" className="pure-menu-link">
                  Aula 3
                </a>
              </li>
              <li className="pure-menu-item">
                <a href="#" className="pure-menu-link">
                  Happy Hour
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div id="main">{comp}</div>
      </div>
    );
  }
}
