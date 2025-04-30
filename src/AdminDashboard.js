
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { ArrowLeftCircle } from "lucide-react";

// const AdminDashboard = () => { 
//   const [activeSection, setActiveSection] = useState("schedule"); 
//   const [selectedSemester, setSelectedSemester] = useState(null);
//   const [selectedDepartment, setSelectedDepartment] = useState(null);
//   const navigate = useNavigate();

//   const handleSemesterClick = (semester) => {
//     setSelectedSemester(semester);
//     setSelectedDepartment(null);
//   };

//   const handleDepartmentClick = (department) => {
//     setSelectedDepartment(department);
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-[#C4D8E2] to-[#C4D8E2]">
//       {/* Header */}
//       <div className="bg-gray-200 p-6 text-center font-bold flex justify-between items-center">
//         <div className="flex items-center">
//           <img 
//             src="https://th.bing.com/th/id/R.7da5dde699a0c9295cc5dba6ecbaf08d?rik=ZliUBSyYYvO49g&riu=http%3a%2f%2fevent.svecw.edu.in%2fimages%2fvishnu+logo.png&ehk=ItZSoCSfbRpvfyEUcKFSDRSsRHw09G5omwqFFKi8qMY%3d&risl=&pid=ImgRaw&r=0" 
// alt="SVECW Logo" 
//             className="h-12 mr-2" 
//           />
//           <span className="text-2xl font-bold">SHRI VISHNU ENGINEERING COLLEGE FOR WOMEN (Autonomous)</span>
//         </div>
//         <button 
//           onClick={() => navigate('/login')}
//           className="bg-gradient-to-r from-blue-500 to-purple-600 px-4 py-2 rounded-full text-white font-medium hover:shadow-lg transition transform hover:scale-105"
//         >
//           Logout
//         </button>
//       </div>

//       {/* Sidebar and Content */}
//       <div className="flex">
//         {/* Sidebar */}
//         <div className="bg-gray-400 text-black p-4 w-60 h-screen">
//           <div 
//             className={`p-2 border-b cursor-pointer font-bold ${activeSection === "schedule" ? "text-white" : ""}`} 
//             onClick={() => setActiveSection("schedule")}
//           >
//             Manage Schedule
//           </div>
//           <div 
//             className={`p-2 border-b cursor-pointer font-bold ${activeSection === "performance" ? "text-white" : ""}`} 
//             onClick={() => setActiveSection("performance")}
//           >
//             Performance Review
//           </div>
//         </div>

//         {/* Main Content */}
//         <div className="flex-1 p-6">
//           {activeSection === "schedule" ? (
//             !selectedSemester ? (
//               // Semester Selection
//               <div className="grid grid-cols-2 gap-6">
//                 {["II Year 1st Semester", "II Year 2nd Semester", "III Year 1st Semester", "III Year 2nd Semester", "IV Year 1st Semester", "IV Year 2nd Semester"].map((semester, index) => (
//                   <div 
//                     key={index} 
//                     className="bg-gradient-to-b from-gray-400 to-white p-9 text-center font-bold text-lg rounded-2xl shadow-xl 
//                       hover:bg-gray-300 cursor-pointer transform transition duration-300 hover:scale-110 border-2 border-gray-400"
//                     onClick={() => handleSemesterClick(semester)}
//                   >
//                     {semester}
//                   </div>
//                 ))}
//               </div>
//             ) : !selectedDepartment ? (
//               // Department Selection
//               <div>
//                 <button 
//                   onClick={() => setSelectedSemester(null)}
//                   className="flex items-center mb-4 text-blue-500 hover:text-blue-700"
//                 >
//                   <ArrowLeftCircle size={24} className="mr-2" /> 
//                 </button>
//                 <div className="grid grid-cols-2 gap-6">
//                   {["CSE A", "CSE B", "CSE C", "CS"].map((dept, index) => (
//                     <div 
//                       key={index} 
//                       className="bg-gradient-to-b from-gray-400 to-white p-9 text-center font-bold text-lg rounded-2xl shadow-xl 
//                       hover:bg-gray-300 cursor-pointer transform transition duration-300 hover:scale-110 border-2 border-gray-400"
//                       onClick={() => handleDepartmentClick(dept)}
//                     >
//                       {dept}
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             ) : (
//               // Upload Schedule Section
//               <div className="flex flex-col items-center mb-4 w-full">
//                 <div className="w-full flex items-center justify-start">
//                   <button 
//                     onClick={() => setSelectedDepartment(null)}
//                     className="flex items-center text-blue-500 hover:text-blue-700"
//                   >
//                     <ArrowLeftCircle size={24} className="mr-2" /> 
//                   </button>
//                 </div>

//                 <div className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-md mt-6">
//                   <h2 className="text-2xl font-bold text-center mb-4">
//                     Upload Schedule for {selectedSemester}  {selectedDepartment}
//                   </h2>
                  

//                   {/* File Upload */}
//                   <label className="border-2 border-dashed border-gray-400 rounded-lg p-6 flex flex-col items-center justify-center cursor-pointer hover:bg-gray-100 transition">
//                     <svg className="w-12 h-12 text-gray-500 mb-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
//                     </svg>
//                     <span className="text-gray-600 font-medium">Click to browse files</span>
//                     <input type="file" className="hidden" />
//                   </label> 

//                   {/* Textarea */}
//                   <textarea 
//                     placeholder="Enter details here..."
//                     className="mt-4 w-full h-32 border border-gray-300 rounded-lg p-3 resize-none focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm"
//                   ></textarea>

//                   {/* Submit Button */}
//                   <button className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 rounded-lg transition">
//                     Submit
//                   </button>
//                 </div>
//               </div>
//             )
//           ) : (
//             // Performance Review Section
//             <div className="flex flex-col items-center">
//               <button 
//                 onClick={() => setActiveSection("schedule")}
//                 className="flex items-center mb-4 text-blue-500 hover:text-blue-700"
//               >
//                 <ArrowLeftCircle size={24} className="mr-2" /> Back
//               </button>
//               <h2 className="text-xl font-bold">Performance Review Section</h2>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AdminDashboard;



// // AdminDashboard Component
// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { ArrowLeftCircle } from "lucide-react";

// import axios from "axios";

// const AdminDashboard = () => {
//   const [activeSection, setActiveSection] = useState("schedule");
//   const [selectedSemester, setSelectedSemester] = useState(null);
//   const [selectedDepartment, setSelectedDepartment] = useState(null);
//   const [adminData, setAdminData] = useState({ username: "", branch: "" });
//   const [yearsData, setYearsData] = useState([]);

//   const navigate = useNavigate();

//   // Fetch data from the backend on component mount
//   useEffect(() => {
//     const username = localStorage.getItem("username");; // Replace with the dynamic value or use state for the username
//     console.log("Making request with username:", username);
  
//     axios.get(`/api/coordinators/getCoordinator?username=${username}`)
//       .then((response) => {
//         setAdminData({
//           username: response.data.username,
//           branch: response.data.branch,
//         });
//         setYearsData(response.data.yearsData); // Assuming this is in the response
//       })
//       .catch((error) => console.error("Error fetching data:", error));
//   }, []);
  
//   const handleSemesterClick = (semester) => {
//     setSelectedSemester(semester);
//     setSelectedDepartment(null);
//   };

//   const handleDepartmentClick = (department) => {
//     setSelectedDepartment(department);
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-[#C4D8E2] to-[#C4D8E2]">
//       {/* Header */}
//       <div className="bg-gray-200 p-6 text-center font-bold flex justify-between items-center">
//         <div className="flex items-center">
//           <img 
//             src="https://th.bing.com/th/id/R.7da5dde699a0c9295cc5dba6ecbaf08d?rik=ZliUBSyYYvO49g&riu=http%3a%2f%2fevent.svecw.edu.in%2fimages%2fvishnu+logo.png&ehk=ItZSoCSfbRpvfyEUcKFSDRSsRHw09G5omwqFFKi8qMY%3d&risl=&pid=ImgRaw&r=0" 
//             alt="SVECW Logo" 
//             className="h-12 mr-2" 
//           />
//           <span className="text-2xl font-bold">SHRI VISHNU ENGINEERING COLLEGE FOR WOMEN (Autonomous)</span>
//         </div>
//         <div className="flex items-center text-lg font-semibold">
//           Welcome, {adminData.username} ({adminData.branch}) {/* Display branch */}
//         </div>
//         <button 
//           onClick={() => navigate('/login')}
//           className="bg-gradient-to-r from-blue-500 to-purple-600 px-4 py-2 rounded-full text-white font-medium hover:shadow-lg transition transform hover:scale-105"
//         >
//           Logout
//         </button>
//       </div>

//       {/* Sidebar and Content */}
//       <div className="flex">
//         {/* Sidebar */}
//         <div className="bg-gray-400 text-black p-4 w-60 h-screen">
//           <div 
//             className={`p-2 border-b cursor-pointer font-bold ${activeSection === "schedule" ? "text-white" : ""}`} 
//             onClick={() => setActiveSection("schedule")}
//           >
//             Manage Schedule
//           </div>
//           <div 
//             className={`p-2 border-b cursor-pointer font-bold ${activeSection === "performance" ? "text-white" : ""}`} 
//             onClick={() => setActiveSection("performance")}
//           >
//             Performance Review
//           </div>
//         </div>

//         {/* Main Content */}
//         <div className="flex-1 p-6">
//           {activeSection === "schedule" ? (
//             !selectedSemester ? (
//               // Semester Selection
//               <div className="grid grid-cols-2 gap-6">
//                 {yearsData.map((yearData, index) => (
//                   <div key={index}>
//                     <h2 className="text-xl font-semibold">{yearData.year}</h2>
//                     {yearData.semesters.map((semester, index) => (
//                       <div 
//                         key={index} 
//                         className="bg-gradient-to-b from-gray-400 to-white p-9 text-center font-bold text-lg rounded-2xl shadow-xl 
//                           hover:bg-gray-300 cursor-pointer transform transition duration-300 hover:scale-110 border-2 border-gray-400"
//                         onClick={() => handleSemesterClick(semester)}
//                       >
//                         {semester}
//                       </div>
//                     ))}
//                   </div>
//                 ))}
//               </div>
//             ) : !selectedDepartment ? (
//               // Department Selection
//               <div>
//                 <button 
//                   onClick={() => setSelectedSemester(null)}
//                   className="flex items-center mb-4 text-blue-500 hover:text-blue-700"
//                 >
//                   <ArrowLeftCircle size={24} className="mr-2" /> 
//                 </button>
//                 <div className="grid grid-cols-2 gap-6">
//                   {["CSE A", "CSE B", "CSE C", "CS"].map((dept, index) => (
//                     <div 
//                       key={index} 
//                       className="bg-gradient-to-b from-gray-400 to-white p-9 text-center font-bold text-lg rounded-2xl shadow-xl 
//                       hover:bg-gray-300 cursor-pointer transform transition duration-300 hover:scale-110 border-2 border-gray-400"
//                       onClick={() => handleDepartmentClick(dept)}
//                     >
//                       {dept}
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             ) : (
//               // Upload Schedule Section
//               <div className="flex flex-col items-center mb-4 w-full">
//                 <div className="w-full flex items-center justify-start">
//                   <button 
//                     onClick={() => setSelectedDepartment(null)}
//                     className="flex items-center text-blue-500 hover:text-blue-700"
//                   >
//                     <ArrowLeftCircle size={24} className="mr-2" /> 
//                   </button>
//                 </div>

//                 <div className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-md mt-6">
//                   <h2 className="text-2xl font-bold text-center mb-4">
//                     Upload Schedule for {selectedSemester} {selectedDepartment}
//                   </h2>
//                   {/* File Upload */}
//                   <label className="border-2 border-dashed border-gray-400 rounded-lg p-6 flex flex-col items-center justify-center cursor-pointer hover:bg-gray-100 transition">
//                     <svg className="w-12 h-12 text-gray-500 mb-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
//                     </svg>
//                     <span className="text-gray-600 font-medium">Click to browse files</span>
//                     <input type="file" className="hidden" />
//                   </label> 

//                   {/* Textarea */}
//                   <textarea 
//                     placeholder="Enter details here..."
//                     className="mt-4 w-full h-32 border border-gray-300 rounded-lg p-3 resize-none focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm"
//                   ></textarea>

//                   {/* Submit Button */}
//                   <button className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 rounded-lg transition">
//                     Submit
//                   </button>
//                 </div>
//               </div>
//             )
//           ) : (
//             // Performance Review Section
//             <div className="flex flex-col items-center">
//               <button 
//                 onClick={() => setActiveSection("schedule")}
//                 className="flex items-center mb-4 text-blue-500 hover:text-blue-700"
//               >
//                 <ArrowLeftCircle size={24} className="mr-2" /> Back
//               </button>
//               <div>Performance Review Section</div>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AdminDashboard;











import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeftCircle } from "lucide-react";
import axios from "axios";

const AdminDashboard = () => {
  const { username } = useParams(); // Get username from URL
  const [activeSection, setActiveSection] = useState("schedule");
  const [selectedSemester, setSelectedSemester] = useState(null);
  const [selectedDepartment, setSelectedDepartment] = useState(null);
  const [adminData, setAdminData] = useState({ username: "", branch: "" });
  const [yearsData, setYearsData] = useState([]);

  const navigate = useNavigate();

  const fetchAdminData = async () => {
    try {
        console.log("Fetching data for username:", username);
        
        const response = await axios.get(`http://localhost:5000/api/coordinators/getCoordinator/${username}`);

        console.log("Response data:", response.data);
        
        setAdminData({
            username: response.data.username,
            branch: response.data.branch,
        });
    } catch (error) {
        console.error("Error fetching coordinator:", error);
    }
};
useEffect(() => {
  fetchAdminData();
}, [username]);
   // Dependency on username ensures it updates if URL changes

  const handleSemesterClick = (semester) => {
    setSelectedSemester(semester);
    setSelectedDepartment(null);
  };

  const handleDepartmentClick = (department) => {
    setSelectedDepartment(department);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#C4D8E2] to-[#C4D8E2]">
      {/* Header */}
      <div className="bg-gray-200 p-6 text-center font-bold flex justify-between items-center">
        {/* <div className="flex items-center">
          <img 
            src="https://th.bing.com/th/id/R.7da5dde699a0c9295cc5dba6ecbaf08d?rik=ZliUBSyYYvO49g&riu=http%3a%2f%2fevent.svecw.edu.in%2fimages%2fvishnu+logo.png&ehk=ItZSoCSfbRpvfyEUcKFSDRSsRHw09G5omwqFFKi8qMY%3d&risl=&pid=ImgRaw&r=0" 
            alt="SVECW Logo" 
            className="h-12 mr-2" 
          />
          <span className="text-2xl font-bold">SHRI VISHNU ENGINEERING COLLEGE FOR WOMEN (Autonomous)</span>
          <br></br>
        <div className="flex items-center text-lg font-semibold">
          Welcome, {adminData.username} ({adminData.branch}) 
        </div>
        </div> */}
        <div className="flex flex-col items-start">
  {/* College Logo and Name */}
  <div className="flex items-center">
    <img 
      src="https://th.bing.com/th/id/R.7da5dde699a0c9295cc5dba6ecbaf08d?rik=ZliUBSyYYvO49g&riu=http%3a%2f%2fevent.svecw.edu.in%2fimages%2fvishnu+logo.png&ehk=ItZSoCSfbRpvfyEUcKFSDRSsRHw09G5omwqFFKi8qMY%3d&risl=&pid=ImgRaw&r=0" 
      alt="SVECW Logo" 
      className="h-12 mr-2" 
    />
    <span className="text-2xl font-bold">
      SHRI VISHNU ENGINEERING COLLEGE FOR WOMEN (Autonomous)
    </span>
  </div>

  {/* Welcome Text */}
  {/* <div className="text-lg font-semibold mt-2">
    Welcome, <span className="font-bold">{adminData.branch}</span> Schedule Coordinator <span className="font-bold uppercase">{adminData.username}</span>
  </div> */}
  <div className="text-lg font-semibold mt-2">
  Welcome, <span className="font-bold">{adminData.branch}</span> 
  <span> Schedule Coordinator </span> 
  <span className="font-bold">{adminData.username} !</span>
</div>


  {/* Admin Details */}
  
</div>

        
        <button 
          onClick={() => navigate('/login') }
          className="bg-gradient-to-r from-blue-500 to-purple-600 px-4 py-2 rounded-full text-white font-medium hover:shadow-lg transition transform hover:scale-105"
        >
          Logout
        </button>
        
      </div>

      {/* Sidebar and Content */}
      <div className="flex">
        {/* Sidebar */}
        <div className="bg-gray-400 text-black p-4 w-60 h-screen">
          <div 
            className={`p-2 border-b cursor-pointer font-bold ${activeSection === "schedule" ? "text-white" : ""}`} 
            onClick={() => setActiveSection("schedule")}
          >
            Manage Schedule
          </div>
          <div 
            className={`p-2 border-b cursor-pointer font-bold ${activeSection === "performance" ? "text-white" : ""}`} 
            onClick={() => setActiveSection("performance")}
          >
            Performance Review
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-6">
        
          {activeSection === "schedule" ? (
            !selectedSemester ? (
              <div className="grid grid-cols-2 gap-6">
                {yearsData.map((yearData, index) => (
                  <div key={index}>
                    <h2 className="text-xl font-semibold">{yearData.year}</h2>
                    {yearData.semesters.map((semester, index) => (
                      <div 
                        key={index} 
                        className="bg-gradient-to-b from-gray-400 to-white p-9 text-center font-bold text-lg rounded-2xl shadow-xl 
                          hover:bg-gray-300 cursor-pointer transform transition duration-300 hover:scale-110 border-2 border-gray-400"
                        onClick={() => handleSemesterClick(semester)}
                      >
                        {semester}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            ) : !selectedDepartment ? (
              <div>
                <button 
                  onClick={() => setSelectedSemester(null)}
                  className="flex items-center mb-4 text-blue-500 hover:text-blue-700"
                >
                  <ArrowLeftCircle size={24} className="mr-2" /> 
                </button>
                <div className="grid grid-cols-2 gap-6">
                  {["CSE A", "CSE B", "CSE C", "CS"].map((dept, index) => (
                    <div 
                      key={index} 
                      className="bg-gradient-to-b from-gray-400 to-white p-9 text-center font-bold text-lg rounded-2xl shadow-xl 
                      hover:bg-gray-300 cursor-pointer transform transition duration-300 hover:scale-110 border-2 border-gray-400"
                      onClick={() => handleDepartmentClick(dept)}
                    >
                      {dept}
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="flex flex-col items-center mb-4 w-full">
                <div className="w-full flex items-center justify-start">
                  <button 
                    onClick={() => setSelectedDepartment(null)}
                    className="flex items-center text-blue-500 hover:text-blue-700"
                  >
                    <ArrowLeftCircle size={24} className="mr-2" /> 
                  </button>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-md mt-6">
                  <h2 className="text-2xl font-bold text-center mb-4">
                    Upload Schedule for {selectedSemester} {selectedDepartment}
                  </h2>
                  {/* File Upload */}
                  <label className="border-2 border-dashed border-gray-400 rounded-lg p-6 flex flex-col items-center justify-center cursor-pointer hover:bg-gray-100 transition">
                    <svg className="w-12 h-12 text-gray-500 mb-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                    </svg>
                    <span className="text-gray-600 font-medium">Click to browse files</span>
                    <input type="file" className="hidden" />
                  </label> 

                  {/* Textarea */}
                  <textarea 
                    placeholder="Enter details here..."
                    className="mt-4 w-full h-32 border border-gray-300 rounded-lg p-3 resize-none focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm"
                  ></textarea>

                  {/* Submit Button */}
                  <button className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 rounded-lg transition">
                    Submit
                  </button>
                </div>
              </div>
            )
          ) : (
            <div className="flex flex-col items-center">
              <button 
                onClick={() => setActiveSection("schedule")}
                className="flex items-center mb-4 text-blue-500 hover:text-blue-700"
              >
                <ArrowLeftCircle size={24} className="mr-2" /> Back
              </button>
              <div>Performance Review Section</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;

