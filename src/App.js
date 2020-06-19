import React, { useState, useEffect } from "react";
import canaveral_logo from "./assets/canaveral-logo.png";
import github_logo from "./assets/github-logo.svg";
import {
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails
} from "@material-ui/core";
import {
  makeStyles,
  createMuiTheme,
  ThemeProvider
} from "@material-ui/core/styles";
import { ChevronRight } from "@material-ui/icons";
import { Typography } from "@material-ui/core";
import "./App.css";

const theme = createMuiTheme({
  shadows: ["none"]
});
const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper,
    shadows: ["none"]
  },
  list: {
    borderColor: "#a46ddb !important",
    borderWidth: 1
  },
  dropdownHeaderText: {
    fontSize: theme.typography.pxToRem(18),
    fontWeight: theme.typography.fontWeightRegular,
    color: "#878787"
  },
  dropdownText: {
    fontSize: theme.typography.pxToRem(14),
    fontWeight: theme.typography.fontWeightRegular,
    color: "#878787"
  }
}));

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
}

function App() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  const { height, width } = useWindowDimensions();
  const classes = useStyles();
  const desktop = height*0.75 < width;
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        {/* Quick Install */}
        <header className="App-header">
          <img
            src={canaveral_logo}
            className="App-logo"
            alt="canaveral-logo"
            style={{ paddingTop: desktop ? "" : "5vh" }}
          />
          <div
            className="Body-content"
            style={{ flexDirection: desktop ? "" : "column" }}
          >
            <div className="Quick-install-container">
              <div className="Quick-install-header">
                <div className="Title-text">Quick Install:</div>
                Homebrew
              </div>
              <div
                className="Install-box"
                style={{ width: desktop ? "" : "80vw" }}
              >
                <div
                  className="Install-box-inner-container"
                  style={{ width: desktop ? "" : "80vw" }}
                >
                  <div className="Install-box-text-container">
                    <div className="Install-box-dollar-sign">$&nbsp;</div>
                    <div className="Install-box-text">
                      brew tap jchengjr77/homebrew-private
                      https://github.com/jchengjr77/homebrew-private.git
                    </div>
                  </div>
                  <div className="Install-box-text-container">
                    <div className="Install-box-dollar-sign">$&nbsp;</div>
                    <div className="Install-box-text">
                      brew install canaveral
                    </div>
                  </div>
                </div>
              </div>
              <div className="Quick-install-method-spacing" />
              <div className="Quick-install-header">Go Modules</div>
              <div
                className="Install-box"
                style={{ width: desktop ? "" : "80vw" }}
              >
                <div
                  className="Install-box-inner-container"
                  style={{ width: desktop ? "" : "80vw" }}
                >
                  <div className="Install-box-text-container">
                    <div className="Install-box-dollar-sign">$&nbsp;</div>
                    <div className="Install-box-text">
                      go get github.com/jchengjr77/canaveral
                    </div>
                  </div>
                  <div className="Install-box-text-container">
                    <div className="Install-box-dollar-sign">$&nbsp;</div>
                    <div className="Install-box-text">
                      go install github.com/jchengjr77/canaveral
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Separating Bar */}
            {desktop && <div className="Vertical-bar" />}
            {!desktop && (
              <div>
                <div style={{ padding: "3vmin" }} />
                <div className="Horizontal-bar" />
                <div style={{ padding: "3vmin" }} />
              </div>
            )}
            {/* Explore */}
            <div className="Info-container">
              <div>
                Explore:
                <div className="Github-container">
                  {desktop && (
                    <a href="https://github.com/jchengjr77/canaveral">
                      <img
                        src={github_logo}
                        className="Github-logo"
                        alt="canaveral-logo"
                      />
                    </a>
                  )}
                  <a
                    className="Github-link"
                    href={"https://github.com/jchengjr77/canaveral"}
                  >
                    <Typography className={classes.dropdownHeaderText} style={{fontSize: desktop ? "" : "5vmin"}}>
                      Github.com/jchengjr77/canaveral
                    </Typography>
                  </a>
                </div>
              </div>
              <div className="Right-entity-spacing" />
              <div>
                FAQ:
                <div
                  className={classes.root}
                  style={{ width: desktop ? "" : "80vw" }}
                >
                  <ExpansionPanel expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                    <ExpansionPanelSummary expandIcon={<ChevronRight />}>
                      <Typography className={classes.dropdownHeaderText}>
                        What is Canaveral?
                      </Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                      <Typography className={classes.dropdownText}>
                        Canaveral is a Command Line Interface (CLI) tool that
                        can add, remove, and view your projects. It is a tool
                        built by developers for developers. Don't worry about
                        where your projects are located, how they are organized,
                        what their names are, or how to set them up. Canaveral
                        does that for you.
                      </Typography>
                    </ExpansionPanelDetails>
                  </ExpansionPanel>
                  <ExpansionPanel expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                    <ExpansionPanelSummary expandIcon={<ChevronRight />}>
                      <Typography className={classes.dropdownHeaderText}>
                        Who is it for?
                      </Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                      <Typography className={classes.dropdownText}>
                        Canaveral is for anyone who doesn't want to deal with
                        setting up projects, ensuring that projects are created
                        the same way every time, or making sure all of their
                        projects are in the same place. In short, Canaveral is
                        for developers everywhere.
                      </Typography>
                    </ExpansionPanelDetails>
                  </ExpansionPanel>
                  <ExpansionPanel expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                    <ExpansionPanelSummary expandIcon={<ChevronRight />}>
                      <Typography className={classes.dropdownHeaderText}>
                        How do I use it?
                      </Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                      <Typography className={classes.dropdownText}>
                        Install Canaveral through either of the methods listed
                        under Quick Install. For more details, click the Github
                        link above to see our project repo and documentation!
                      </Typography>
                    </ExpansionPanelDetails>
                  </ExpansionPanel>
                </div>
                <div style={{ padding: "1vh" }} />
                <div style={{ width: desktop ? "" : "80vw" }}>
                  Creators and Contributors
                  <div className="Creators-contributors-text">
                    <a href={"https://github.com/jchengjr77"}>
                      <Typography className={classes.dropdownHeaderText}>
                        JJ Cheng
                      </Typography>
                    </a>
                    &nbsp;
                    <Typography className={classes.dropdownHeaderText}>
                      and
                    </Typography>
                    &nbsp;
                    <a href={"https://github.com/SeanPrendi"}>
                      <Typography className={classes.dropdownHeaderText}>
                        Sean Prendi
                      </Typography>
                    </a>
                  </div>
                  <div style={{ paddingLeft: "1vw", paddingTop: "1vh" }}>
                    <a
                      href={
                        "https://github.com/jchengjr77/canaveral/#contributing"
                      }
                    >
                      <Typography className={classes.dropdownText}>
                        Interested in helping out?
                      </Typography>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div style={{ paddingTop: desktop ? "" : "5vh" }} />
        </header>
      </div>
    </ThemeProvider>
  );
}

export default App;
