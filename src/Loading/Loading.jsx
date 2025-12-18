import React from "react";

const Loading = () => {
    return (
        <div className="flex gap-3 justify-center">
            <span className="loading loading-ring loading-xs"></span>
            <span className="loading loading-ring loading-sm"></span>
            <span className="loading loading-ring loading-md"></span>
            <span className="loading loading-ring loading-lg"></span>
            <span className="loading loading-ring loading-xl"></span>
        </div>
    );
};

export default Loading;
