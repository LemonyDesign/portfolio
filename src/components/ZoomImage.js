import React from "react";
import posed from "react-pose";
import "../styles/base/base.scss";
import "../styles/components/zoomimage.scss";

const transition = {
  duration: 400,
  ease: [0.08, 0.69, 0.2, 0.99]
};

const Image = posed.img({
  zoomedIn: {
    position: "fixed",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    flip: true,
    transition
  },
  zoomedOut: {
    position: "static",
    width: "auto",
    height: "auto",
    flip: true,
    transition
  }
});

const Frame = posed.div({
  zoomedIn: {
    applyAtStart: { display: "block" },
    opacity: 1
  },
  zoomedOut: {
    applyAtEnd: { display: "none" },
    opacity: 0
  }
});

class ZoomImage extends React.Component {
  constructor() {
    super();
    this.state = {
      isZoomed: false
    };
    this.zoomIn = this.zoomIn.bind(this);
    this.zoomOut = this.zoomOut.bind(this);
    this.toggleZoom = this.toggleZoom.bind(this);
  }

  zoomIn() {
    window.addEventListener("scroll", this.zoomOut);
    this.setState({ isZoomed: true });
  }

  zoomOut() {
    window.removeEventListener("scroll", this.zoomOut);
    this.setState({ isZoomed: false });
  }

  toggleZoom() {
    this.state.isZoomed ? this.zoomOut() : this.zoomIn();
  }

  render() {
    const { isZoomed } = this.state;
    const { imageWidth, imageHeight, ...props } = this.props;
    const pose = isZoomed ? "zoomedIn" : "zoomedOut";

    return (
      <div
        className="image-frame"
        onClick={this.toggleZoom}
        style={{ width: imageWidth, height: imageHeight }}
      >
        <Frame pose={pose} className="frame" />
        <Image pose={pose} {...props} />
      </div>
    );
  }
}

export default ZoomImage;
