import React from "react";
import verySmallJson from "../../data/verysmall.json";
import alltypes from "../../data/alltypes.json";
import giant from "../../data/giant.json";
import large from "../../data/large.json";

export const PageViewer = () => {
  return <JSONRender json={verySmallJson} />;
};

const JSONRender = ({ json }: { json: any }) => {
  const renderJSON = (json: any) => {
    if (typeof json === "object" && json !== null) {
      return (
        <ul>
          {Object.keys(json).map((key, index) => (
            <li key={index}>
              <strong>{key}:</strong> {renderJSON(json[key])}
            </li>
          ))}
        </ul>
      );
    }
    if (Array.isArray(json)) {
      return (
        <ul>
          {json.map((item, index) => (
            <li key={index}>{renderJSON(item)}</li>
          ))}
        </ul>
      );
    }
    return <span>{json}</span>;
  };

  return <div className="json-tree-viewer">{renderJSON(json)}</div>;
};
