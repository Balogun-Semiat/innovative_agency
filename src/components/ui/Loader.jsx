import React from "react";
import { Spin } from "antd";

const Loader = () => {
  return (
    <div>
      <div className="w-full h-screen bg-[rgb(0, 0, 0, 0.6)] flex items-center justify-center">
        <div>
          <Spin />
        </div>
      </div>
    </div>
  );
};

export default Loader;
