import React from "react";

const youtubePlayerStyles = {
  width: 200,
  height: 150,
  top: 20,
  left: 20
};

const netflixPlayerStyles = {
  width: 350,
  height: 250,
  top: -2,
  left: -2
};

const youtubeActionButtonStyles = {
  width: 16,
  height: 16
};

const netflixActionButtonStyles = {
  width: 30,
  height: 30
};

const youtubeTitleStyle = {
  top: 185,
  left: 20
};

const netflixTitleStyle = {
  top: 10,
  left: 20
};

const netflixActionPanelStyles = {
  top: 50,
  left: 10
};

const youtubeActionPanelStyles = {
  top: 10,
  left: 10
};

const YoutubeRecs = props => {
  const recStyle = {
    border: "2px solid lightgrey",
    width: 80,
    height: 40,
    position: "absolute",
    right: 20,
    top: 20,
    borderRadius: 4,
    transition: "300ms",
    opacity: props.in ? 1 : 0,
    display: "none"
  };
  const firstRecStyle = {
    ...recStyle,
    top: 20
  };
  const secondRecStyle = {
    ...recStyle,
    top: 80
  };
  const thirdRecStyle = {
    ...recStyle,
    top: 140
  };
  return (
    <>
      <div style={firstRecStyle} />
      <div style={secondRecStyle} />
      <div style={thirdRecStyle} />
    </>
  );
};

class FormFactorAnimation extends React.Component {
  state = {
    isNetflix: false
  };

  componentDidMount() {
    this.interval = window.setInterval(() => {
      this.setState(state => ({
        isNetflix: !state.isNetflix
      }));
    }, 2000); // TODO - Revert 2000
  }

  componentWillUnmount() {
    window.clearInterval(this.interval);
  }

  render() {
    const baseStyles = {
      width: 350,
      height: 250,
      border: "2px solid lightgrey",
      position: "relative",
      borderRadius: 4
    };
    let playerStyles = {
      border: "2px solid lightgrey",
      borderRadius: 4,
      position: "absolute",
      transition: "300ms"
    };
    let actionPanelStyles = {
      width: 25,
      height: 25,
      position: "absolute",
      transition: "300ms"
    };
    let actionButtonStyles = {
      width: 20,
      height: 20,
      borderRadius: "50%",
      border: "2px solid black",
      marginBottom: 8,
      transition: "300ms"
    };
    let titleStyles = {
      height: 14,
      width: 160,
      border: "2px solid lightgrey",
      position: "absolute",
      transition: "300ms",
      display: "none"
    };
    const { isNetflix } = this.state;
    if (isNetflix) {
      playerStyles = { ...playerStyles, ...netflixPlayerStyles };
      actionButtonStyles = {
        ...actionButtonStyles,
        ...netflixActionButtonStyles
      };
      titleStyles = { ...titleStyles, ...netflixTitleStyle };
      actionPanelStyles = { ...actionPanelStyles, ...netflixActionPanelStyles };
    } else {
      playerStyles = { ...playerStyles, ...youtubePlayerStyles };
      actionButtonStyles = {
        ...actionButtonStyles,
        ...youtubeActionButtonStyles
      };
      titleStyles = { ...titleStyles, ...youtubeTitleStyle };
      actionPanelStyles = { ...actionPanelStyles, ...youtubeActionPanelStyles };
    }
    return (
      <>
        <div style={baseStyles}>
          <div style={playerStyles}>
            <div style={actionPanelStyles}>
              <div style={actionButtonStyles} />
              <div style={actionButtonStyles} />
              <div style={actionButtonStyles} />
            </div>
          </div>
          <div style={titleStyles} />
          <YoutubeRecs in={!isNetflix} />
        </div>
      </>
    );
  }
}

export default FormFactorAnimation;
