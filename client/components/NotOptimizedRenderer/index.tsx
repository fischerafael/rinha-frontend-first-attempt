import React from "react";

export const NotOptimizedRenderer = ({ json }: { json: any }) => {
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
  return <div>NotOptimizedRenderer</div>;
};
