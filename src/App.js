import React from "react";
import canaveral_logo from "./assets/canaveral-logo.png";
import github_logo from "./assets/github-logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      {/* Quick Install */}
      <header className="App-header">
        <img src={canaveral_logo} className="App-logo" alt="canaveral-logo" />
        <div className="Body-content">
          <div className="Quick-install-container">
            <div className="Quick-install-header">
              <div className="Title-text">Quick Install:</div>
              Homebrew
            </div>
            <div className="Install-box">
              <div className="Install-box-inner-container">
                <div className="Install-box-text-container">
                  <div
                    className="Install-box-text"
                    style={{ color: "#a6a6a6" }}
                  >
                    $&nbsp;
                  </div>
                  <div className="Install-box-text">
                    brew tap jchengjr77/homebrew-private
                    https://github.com/jchengjr77/homebrew-private.git
                  </div>
                </div>
                <div className="Install-box-text-container">
                  <div
                    className="Install-box-text"
                    style={{ color: "#a6a6a6" }}
                  >
                    $&nbsp;
                  </div>
                  <div className="Install-box-text">brew install canaveral</div>
                </div>
              </div>
            </div>
            <div className="Quick-install-method-spacing" />
            <div className="Quick-install-header">Go Modules</div>
            <div className="Install-box">
              <div className="Install-box-inner-container">
                <div className="Install-box-text-container">
                  <div
                    className="Install-box-text"
                    style={{ color: "#a6a6a6" }}
                  >
                    $&nbsp;
                  </div>
                  <div className="Install-box-text">
                    go get github.com/jchengjr77/canaveral
                  </div>
                </div>
                <div className="Install-box-text-container">
                  <div
                    className="Install-box-text"
                    style={{ color: "#a6a6a6" }}
                  >
                    $&nbsp;
                  </div>
                  <div className="Install-box-text">
                    go install github.com/jchengjr77/canaveral
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Separating Bar */}
          <div className="Vertical-bar" />
          {/* Explore */}
          <div className="Info-container">
            Explore:
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-start"
              }}
            >
              <img
                src={github_logo}
                className="Github-logo"
                alt="canaveral-logo"
              />
              <div style={{ alignSelf: "center", fontSize: "20px", paddingTop: "10px", color: "#a0a0a0" }}>
                Github.com/jchengjr77/canaveral
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
