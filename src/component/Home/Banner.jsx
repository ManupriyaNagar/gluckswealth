import React from "react";

const Banner = ({ title = "Mutual Fund", breadcrumb = ["Home", "Mutual Fund"] }) => {
  return (
    <div className="bg-indigo-50  py-44 px-6">
      <div className="container mx-auto text-center">
        {/* Main Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
          {title}
        </h1>

        {/* Breadcrumb Navigation */}
        <nav className="flex items-center justify-center space-x-2 text-gray-600">
          {breadcrumb.map((item, index) => (
            <React.Fragment key={index}>
              <span
                className={
                  index === breadcrumb.length - 1
                    ? "text-gray-800 font-medium"
                    : "hover:text-gray-800"
                }
              >
                {item}
              </span>
              {index < breadcrumb.length - 1 && (
                <span className="text-gray-400"> &gt;</span>
              )}
            </React.Fragment>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Banner;
