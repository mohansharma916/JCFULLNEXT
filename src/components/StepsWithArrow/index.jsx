import React from "react";

const Arrow = ({ text, color }) => {
  return (
    <div className="flex">
      <div className="arrow__text">{text}</div>
      <div className="arrow__icon">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 6L18 12L12 18" />
        </svg>
      </div>
    </div>
  );
};

const StepsWithArrows = () => {
  return (
    <>
      <div className="flex items-center justify-center space-x-12">
        <div className="text-center">
          <div className="text-4xl font-bold mb-2">1</div>
          <div className="relative">
            <div className="w-16 h-1 bg-blue-500 mb-2"></div>
            <div className="w-16 h-12 bg-blue-500 text-white flex items-center justify-center">
              Step 1 Content
            </div>
          </div>
        </div>
      </div>
    </>
    // <div className="flex items-center justify-center">
    //   <div className="relative text-center">
    //     <div className="text-xl font-bold mb-2">Step 1</div>
    //     <div className="w-12 h-12 flex items-center justify-center bg-blue-500 text-white rounded-full">
    //       <span className="text-3xl">➤</span>
    //     </div>
    //     <div className="mt-4">Step 1 Content</div>
    //   </div>
    //   <div className="relative text-center">
    //     <div className="text-xl font-bold mb-2">Step 2</div>
    //     <div className="w-12 h-12 flex items-center justify-center bg-blue-500 text-white rounded-full">
    //       <span className="text-3xl">➤</span>
    //     </div>
    //     <div className="mt-4">Step 2 Content</div>
    //   </div>
    //   <div className="relative text-center">
    //     <div className="text-xl font-bold mb-2">Step 3</div>
    //     <div className="w-12 h-12 flex items-center justify-center bg-blue-500 text-white rounded-full">
    //       <span className="text-3xl">➤</span>
    //     </div>
    //     <div className="mt-4">Step 3 Content</div>
    //   </div>
    //   <div className="relative text-center">
    //     <div className="text-xl font-bold mb-2">Step 4</div>
    //     <div className="w-12 h-12 flex items-center justify-center bg-blue-500 text-white rounded-full">
    //       <span className="text-3xl">➤</span>
    //     </div>
    //     <div className="mt-4">Step 4 Content</div>
    //   </div>
    // </div>
  );
};

export default StepsWithArrows;
