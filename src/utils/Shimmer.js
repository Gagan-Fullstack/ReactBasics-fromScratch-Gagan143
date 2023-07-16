import React from "react";
import { ShimmerPostList } from "react-shimmer-effects";

class Example extends React.Component {
  render() {
    return (
      <>
        <div className="div-shimmer"></div>
        <ShimmerPostList
          postStyle="STYLE_FIVE"
          col={4}
          row={3}
          gap={30}
          className="dark-shimmer"
        />
      </>
    );
  }
}

export default Example;
