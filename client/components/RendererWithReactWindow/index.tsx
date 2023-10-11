import React, { useState } from "react";
import { FixedSizeList as List } from "react-window";

export const RendererWithReactWindow = ({ json }: { json: any }) => {
  const [visibleData, setVisibleData] = useState(json);

  // Handle loading data as the user scrolls
  const handleScroll = ({
    visibleStartIndex,
    visibleStopIndex,
  }: {
    visibleStartIndex: number;
    visibleStopIndex: number;
  }) => {
    // Calculate the visible data range and update visibleData state
    const visibleDataSlice = json.slice(
      visibleStartIndex,
      visibleStopIndex + 1
    );
    setVisibleData(visibleDataSlice);
  };

  console.log("Rendering JSONNode with data:", json);

  return (
    <List
      height={500} // Set a fixed height for the visible area
      itemCount={visibleData.length}
      itemSize={50} // Adjust to your desired item size
      width={400} // Set a fixed width for the visible area
      onItemsRendered={handleScroll}
    >
      {({ index, style }) => (
        <div style={style}>
          <JSONNode data={visibleData[index]} />
        </div>
      )}
    </List>
  );
};

function JSONNode({ data }: { data: any }) {
  const [expanded, setExpanded] = useState(false);

  // Handle expanding/collapsing nodes with child nodes
  const toggleExpand = () => {
    if (Array.isArray(data) || (typeof data === "object" && data !== null)) {
      setExpanded(!expanded);
    }
  };

  console.log("Rendering JSONNode with data:", data);

  return (
    <div>
      <span onClick={toggleExpand} style={{ cursor: "pointer" }}>
        {expanded ? "[-] " : "[+] "} {data.name || data.key || "Node"}:{" "}
        {typeof data === "object" && data !== null ? "Object" : data}
      </span>
      {expanded && (
        <div style={{ marginLeft: 20 }}>
          {Object.keys(data).map((key, index) => (
            <div key={index}>
              <JSONNode data={data[key]} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
