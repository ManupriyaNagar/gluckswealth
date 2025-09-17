import React from "react";
import { FaUserTie, FaChalkboardTeacher, FaGraduationCap, FaSchool, FaUserAltSlash, FaUtensils } from "react-icons/fa";
import { HiOutlineCheck } from "react-icons/hi";

const CircleIcon = ({ size, bg, children }) => (
  <div 
    className="rounded-full flex items-center justify-center"
    style={{ 
      width: size, 
      height: size, 
      backgroundColor: bg 
    }}
  >
    {children}
  </div>
);

const family = [
  { id: "p", age: "45Y", label: "Businessman", icon: <FaUserTie size={24} /> },
  { id: "t", age: "42Y", label: "School Teacher", icon: <FaChalkboardTeacher size={24} /> },
  { id: "c", age: "18Y", label: "College", icon: <FaGraduationCap size={24} /> },
  { id: "s", age: "8Y", label: "School", icon: <FaSchool size={24} /> },
  { id: "r", age: "70Y", label: "Retired", icon: <FaUserAltSlash size={24} /> },
  { id: "h", age: "65Y", label: "Housewife", icon: <FaUtensils size={24} /> },
];

const columns = ["Mutual Fund", "Fixed Income", "Insurance", "Others"];

// Matrix showing which products apply to which family members
const matrix = [
  // Businessman
  [true, true, true, true],
  // Teacher  
  [true, true, true, true],
  // College
  [true, true, true, false],
  // School
  [false, true, false, false],
  // Retired
  [false, true, true, false],
  // Housewife
  [true, false, true, true],
];

const CheckBadge = () => (
  <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-green-600">
    <HiOutlineCheck size={16} className="text-white" />
  </div>
);

const FamilyMatrix = () => {
  return (
    <section className="px-6 lg:px-12 py-12 bg-gray-50 min-h-screen">
      <div className="container  mx-auto">
        <h1 className="text-4xl lg:text-5xl text-center font-bold text-gray-900 mb-12">
          We Don't Target Individuals, We Target Families
        </h1>

        <div className="bg-white rounded-lg  overflow-hidden">
          {/* Header Row */}
          <div className="grid grid-cols-5 border-b border-gray-200">
            {/* First column header */}
            <div className="p-6 bg-gray-50">
              <h3 className="text-2xl uppercase font-semibold text-gray-900">
              3 Generation  of india
              </h3>
            </div>
            
            {/* Product columns headers */}
            {columns.map((column, idx) => (
              <div key={column} className="p-6 bg-gray-50 text-center border-l border-gray-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {column}
                </h3>
                {column === "Others" && (
                  <p className="text-xs text-gray-500 leading-tight">
                    (NPS, PMS, AIF, Loans, Gold, NCDs/Bonds,<br />
                    Peer to Peer Lending - P2P)
                  </p>
                )}
              </div>
            ))}
          </div>

          {/* Family Member Rows */}
          {family.map((member, rowIdx) => (
            <div key={member.id} className="grid grid-cols-5 border-b border-gray-200 last:border-b-0">
              {/* Family member info */}
              <div className="p-6 flex items-center gap-4">
                <CircleIcon size={60} bg="#fa003f">
                  <div className="text-white">
                    {member.icon}
                  </div>
                </CircleIcon>
                <div>
                  <div className="text-lg font-semibold text-gray-900">
                    {member.age}
                  </div>
                  <div className="text-sm text-gray-600">
                    {member.label}
                  </div>
                </div>
              </div>

              {/* Product checkmarks */}
              {columns.map((column, colIdx) => (
                <div key={column} className="p-6 flex items-center justify-center border-l border-gray-200">
                  {matrix[rowIdx][colIdx] && <CheckBadge />}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FamilyMatrix;