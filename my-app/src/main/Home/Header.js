import React from "react";
import { useState } from "react";

const Header = () => {
  const [state, setState] = useState({
    underOptions: <div className="header-under-options-contain">000</div>,
  });

  const overTab = (e) => {
    const tabs = document.querySelectorAll(".tabs");
    const headerContain = document.querySelector(".header-contain");
    if (e.target === tabs[0]) {
      setState({
        underOptions: (
          <div className="header-under-options-contain">111111111</div>
        ),
      });
    } else if (e.target === tabs[1]) {
      setState({
        underOptions: (
          <div className="header-under-options-contain">222222222</div>
        ),
      });
    } else if (e.target === tabs[2]) {
      setState({
        underOptions: (
          <div className="header-under-options-contain">333333333</div>
        ),
      });
    } else {
      setState({
        underOptions: (
          <div className="header-under-options-contain">444444444</div>
        ),
      });
    }
    headerContain.style.top = "10%";
  };
  const outTab = () => {
    document.querySelector(".header-contain").style.top = "";
  };

  return (
    <React.Fragment>
      <div className="header">
        <div className="header-top-container">
          <h3>LOgo</h3>
        </div>
        <div className="header-tabs-container">
          <div className="tabs" onMouseOver={overTab} onMouseOut={outTab}>
            Men's watches <i className="fas fa-angle-up"></i>
          </div>
          <div className="tabs" onMouseOver={overTab} onMouseOut={outTab}>
            Women's watches <i className="fas fa-angle-up"></i>
          </div>
          <div className="tabs" onMouseOver={overTab} onMouseOut={outTab}>
            Bags <i className="fas fa-angle-up"></i>
          </div>
          <div className="tabs" onMouseOver={overTab} onMouseOut={outTab}>
            Closing & Accessories <i className="fas fa-angle-up"></i>
          </div>
        </div>
      </div>
      <dir className="header-contain">{state.underOptions}</dir>
    </React.Fragment>
  );
};

export default Header;
