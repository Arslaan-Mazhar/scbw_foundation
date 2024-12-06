"use client"
import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/lib/firebase";
import AdminUpload from "./FileUpload";

const FilesList: React.FC = () =>{
  const [files, setFiles] = useState<any[]>([]);
  const [isAdmin, setIsAdmin] = useState(false);
  useEffect(() => {
    const fetchFiles = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "documents"));
        const filesData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setFiles(filesData);
      } catch (error) {
        console.error("Error fetching files:", error);
      }
    };

    fetchFiles();
  }, []);

  return (
    <>
 <section>
      {isAdmin && <AdminUpload />}
      </section>
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4 text-center">Uploaded Documents</h2>
      <ul className="space-y-4">
        {files.map((file) => (
          <li key={file.id} className="bg-gray-100 p-4 rounded">
            <a
              href={file.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline"
            >
              {file.name}
            </a>
            <p className="text-gray-500 text-sm">
              Uploaded on: {new Date(file.uploadedAt.toDate()).toLocaleString()}
            </p>
          </li>
        ))}
      </ul>
    </div>
    </>
  );
};

export default FilesList;


// import React, { useState } from 'react';
// const FileUpload: React.FC = () => {
//   const [files, setFiles] = useState<File[]>([]);

//   // Handle file upload
//   const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const uploadedFiles = event.target.files;
//     if (uploadedFiles) {
//       const wordFiles = Array.from(uploadedFiles).filter(file => 
//         file.name.endsWith('.doc') || file.name.endsWith('.docx')
//       );
//       setFiles(wordFiles);
//     }
//   };

//   return (
//     <div className="p-4">
//       {/* <label
//         className="block mb-2 text-sm font-medium text-gray-700"
//         htmlFor="file-input"
//       >
//         Upload Word Documents
//       </label>
//       <input
//         type="file"
//         id="file-input"
//         accept=".doc,.docx"
//         multiple
//         onChange={handleFileUpload}
//         className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:border-0 file:text-sm file:font-semibold file:bg-gray-50 file:text-blue-600 hover:file:bg-gray-100"
//       /> */}

//       {/* Display the uploaded files */}
//       <div className="flex flex-col justify-center items-center">
//         <h3 className="text-lg font-medium text-gray-900 text-center">Uploaded Documents:</h3>
//         <ul className="list-disc list-inside ">
//           {files.map((file, index) => (
//             <li key={index} className="text-blue-600">
//               <a href={URL.createObjectURL(file)} download={file.name}>
//                 {file.name}
//               </a>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default FileUpload;
