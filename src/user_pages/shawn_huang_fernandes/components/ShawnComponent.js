import React, { useState } from "react";

import Component1 from "./Component1";
import Component2 from "./Component2";
import Component3 from "./Component3";
import Component4 from "./Component4";
import Component5 from "./Component5";

const tableOfContents = ["1", "2", "3", "4", "5"];

const ShawnComponent = () => {
  const [componentIndex, setComponentIndex] = useState("1");

  const renderShawnComponent = () => {
    switch (componentIndex) {
      case "1":
        return <Component1 />;
      case "2":
        return <Component2 />;
      case "3":
        return <Component3 />;
      case "4":
        return <Component4 />;
      case "5":
        return <Component5 />;
      default:
        return <Component1 />;
    }
  };

  const createTableOfContentsLinks = () => {
    return tableOfContents.map(intIndex => {
      return (
        <button key={intIndex} onClick={() => setComponentIndex(intIndex)}>
          Go To Component {intIndex}
        </button>
      );
    });
  };

  return (
    <div>
      <div>{createTableOfContentsLinks()}</div>

      <div className="ShawnWorld">{renderShawnComponent()}</div>
    </div>
  );
};

export default ShawnComponent;
