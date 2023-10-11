import React from "react";
import verySmallJson from "../../data/verysmall.json";
import alltypes from "../../data/alltypes.json";
import giant from "../../data/giant.json";
import large from "../../data/large.json";
import { NotOptimizedRenderer } from "@/client/components/NotOptimizedRenderer";

export const PageViewer = () => {
  return <NotOptimizedRenderer json={verySmallJson} />;
};
