"use client";
import { useEffect, useState } from "react";
import { fetchAdmissionData } from "../../../hooks/fetchData";
import { Button } from "@/components/ui/button";

interface AdmissionDataType {
  id: string;
  fullName: string;
  fatherName: string;
  gender: string;
  cnic: number;
  fatherCnic: number;
  dateOfBirth: Date;
  age: number;
  contactNumber: number;
  fatherContactNumber: number;
  email: string;
  qualification: string;
  courseName: string;
  otherSkills: string;
  profession: string;
  islamicEducation: string;
  religion: string;
  causeOfBlindness: string;
  address: string;
  city: string;
  district: string;
}

const AdmissionListing = () => {
  const [data, setData] = useState<AdmissionDataType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [selectedRecord, setSelectedRecord] = useState<AdmissionDataType | null>(null);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      try {
        const data = await fetchAdmissionData();
        setData(data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
        Admission Listing
      </h1>
      {loading ? (
        <p className="text-2xl font-bold text-center text-gray-600">
          Loading...
        </p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300 rounded-lg bg-white shadow-sm">
            <thead className="bg-primary text-white">
              <tr>
                <th className="py-3 px-4 text-left border-b border-gray-300">
                  Name
                </th>
                <th className="py-3 px-4 text-left border-b border-gray-300">
                  Father Name
                </th>
                <th className="py-3 px-4 text-left border-b border-gray-300">
                  Age
                </th>
                <th className="py-3 px-4 text-left border-b border-gray-300">
                  Phone No.
                </th>
                <th className="py-3 px-4 text-left border-b border-gray-300">
                  Father No.
                </th>
                <th className="py-3 px-4 text-left border-b border-gray-300">
                  Qualification
                </th>
                <th className="py-3 px-4 text-left border-b border-gray-300">
                  City
                </th>
                <th className="py-3 px-4 text-left border-b border-gray-300">
                  District
                </th>
                <th className="py-3 px-4 text-left border-b border-gray-300">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr
                  key={item.id}
                  className={`${
                    index % 2 === 0 ? "bg-white" : "bg-gray-100"
                  } hover:bg-blue-50`}
                >
                  <td className="py-3 px-4 border-b border-gray-300">
                    {item.fullName}
                  </td>
                  <td className="py-3 px-4 border-b border-gray-300">
                    {item.fatherName}
                  </td>
                  <td className="py-3 px-4 border-b border-gray-300">
                    {item.age}
                  </td>
                  <td className="py-3 px-4 border-b border-gray-300">
                    {item.contactNumber}
                  </td>
                  <td className="py-3 px-4 border-b border-gray-300">
                    {item.fatherContactNumber}
                  </td>
                  <td className="py-3 px-4 border-b border-gray-300">
                    {item.qualification}
                  </td>
                  <td className="py-3 px-4 border-b border-gray-300">
                    {item.city || "-"}
                  </td>
                  <td className="py-3 px-4 border-b border-gray-300">
                    {item.district || "-"}
                  </td>
                  <td className="py-3 px-4 border-b border-gray-300">
                    <Button
                      onClick={() => setSelectedRecord(item)}
                      className="bg-primary text-white px-4 py-2 rounded hover:bg-blue-600"
                    >
                      View
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
  {selectedRecord && (
  <div
    onClick={(e) => {
      if (e.target === e.currentTarget) setSelectedRecord(null); // Close on background click
    }}
    className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
  >
    <div className="bg-white rounded-lg p-6 shadow-lg max-h-[100vh] overflow-y-auto relative">
      <h2 className="text-2xl font-bold mb-4 text-center">Record Details</h2>
      <table className="w-full text-sm text-left border-collapse">
        <tbody className="lg:grid grid-cols-2 gap-2">
          {[
            { label: "Name:", value: selectedRecord.fullName },
            { label: "Father Name:", value: selectedRecord.fatherName },
            { label: "Gender:", value: selectedRecord.gender },
            { label: "CNIC No.:", value: selectedRecord.cnic },
            { label: "Father CNIC No.:", value: selectedRecord.fatherCnic },
            {
              label: "Date of Birth:",
              value: new Date(selectedRecord.dateOfBirth).toDateString(),
            },
            { label: "Age:", value: selectedRecord.age },
            { label: "Mobile Number:", value: selectedRecord.contactNumber },
            { label: "Father Number:", value: selectedRecord.fatherContactNumber },
            { label: "Email Address:", value: selectedRecord.email },
            { label: "Qualification:", value: selectedRecord.qualification },
            { label: "Course Name:", value: selectedRecord.courseName },
            { label: "Other Skills:", value: selectedRecord.otherSkills },
            { label: "Profession:", value: selectedRecord.profession },
            { label: "Islamic Education:", value: selectedRecord.islamicEducation },
            { label: "Religion:", value: selectedRecord.religion },
            { label: "Cause of Blindness:", value: selectedRecord.causeOfBlindness },
            { label: "Address:", value: selectedRecord.address },
            { label: "City:", value: selectedRecord.city },
            { label: "District:", value: selectedRecord.district },
          ].map((row, index) => (
            <tr
              key={index}
              className={`${
                index % 2 === 0 || index % 2 === 1 ? "bg-gray-100" : "bg-white"
              } hover:bg-gray-200`}
            >
              <td className="font-semibold p-2">{row.label}</td>
              <td className="p-2">{row.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-6 text-center">
        <button
          onClick={() => setSelectedRecord(null)}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
          Close
        </button>
      </div>
    </div>
  </div>
)}

  </div>
  );
};

export default AdmissionListing;
