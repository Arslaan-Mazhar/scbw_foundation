"use client";
import { useEffect, useState } from "react";
import { fetchAdmissionData } from "@/hooks/fetchData";
import { Eye, Trash2 } from "lucide-react";
import styles from "./admin.module.css";
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
  createdAt: string;
}

const AdmissionListing = () => {
  const [data, setData] = useState<AdmissionDataType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [selectedRecord, setSelectedRecord] = useState<AdmissionDataType | null>(null);
  const [isOpen, setIsOpen] = useState(false); // Toggle visibility state

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      try {
        const fetchedData = await fetchAdmissionData();
        const formattedData = fetchedData.map((item: any, index: number) => ({
          ...item,
          createdAt: item.createdAt?.seconds
            ? new Date(item.createdAt.seconds * 1000).toLocaleString("en-US", {
              year: "numeric",
              month: "short",
              day: "numeric",
              hour: "2-digit",
              minute: "2-digit",
              hour12: true,
            })
            : "N/A",
        }));
        setData(formattedData);
      } catch (error) {
        console.error("Error fetching data: ", error);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);

  const handleDelete = (id: string) => {
    if (confirm("Are you sure you want to delete this record?")) {
      setData((prevData) => prevData.filter((record) => record.id !== id));
      // You should implement a delete API call here
    }
  };

  return (
    <div className={styles.listing}>
      <div
        className={styles.listingHeader}
        onClick={() => setIsOpen(!isOpen)}
      >
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
          Admission's List
        </h1></div>
        {isOpen && (
        <>
      {loading ? (
        <p className="text-2xl font-bold text-center text-gray-600">
          Loading...
        </p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300 rounded-lg bg-white shadow-sm">
            <thead className="bg-primary text-white">
              <tr>
                <th className="py-3 px-4 text-left border-b border-gray-300">#</th>
                <th className="py-3 px-4 text-left border-b border-gray-300">Name</th>
                {/* <th className="py-3 px-4 text-left border-b border-gray-300">Father Name</th> */}
                <th className="py-3 px-4 text-left border-b border-gray-300">Age</th>
                <th className="py-3 px-4 text-left border-b border-gray-300">Phone No.</th>
                {/* <th className="py-3 px-4 text-left border-b border-gray-300">Father No.</th> */}
                <th className="py-3 px-4 text-left border-b border-gray-300">Qualification</th>
                <th className="py-3 px-4 text-left border-b border-gray-300">City</th>
                {/* <th className="py-3 px-4 text-left border-b border-gray-300">District</th> */}
                <th className="py-3 px-4 text-left border-b border-gray-300">Date</th>
                <th className="py-3 px-4 text-left border-b border-gray-300">Actions</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr
                  key={item.id}
                  className={`${index % 2 === 0 ? "bg-white" : "bg-blue-100"
                    } hover:bg-blue-300 transition-all`}
                >
                  <td className="py-3 px-4 border-b border-gray-300">{index + 1}</td>
                  <td className="py-3 px-4 border-b border-gray-300">{item.fullName}</td>
                  {/* <td className="py-3 px-4 border-b border-gray-300">{item.fatherName}</td> */}
                  <td className="py-3 px-4 border-b border-gray-300">{item.age}</td>
                  <td className="py-3 px-4 border-b border-gray-300">{item.contactNumber}</td>
                  {/* <td className="py-3 px-4 border-b border-gray-300">{item.fatherContactNumber}</td> */}
                  <td className="py-3 px-4 border-b border-gray-300">{item.qualification}</td>
                  <td className="py-3 px-4 border-b border-gray-300">{item.city || "-"}</td>
                  {/* <td className="py-3 px-4 border-b border-gray-300">{item.district || "-"}</td> */}
                  <td className="py-3 px-4 border-b border-gray-300">{item.createdAt}</td>
                  {/* <td className="py-3 px-4 border-b border-gray-300">
                    {new Date(item.dateOfBirth).toDateString()}
                  </td> */}
                  <td className="py-3 px-4 border-b border-gray-300 flex gap-3">
                    <Eye
                      className="text-blue-600 cursor-pointer hover:text-blue-800"
                      onClick={() => setSelectedRecord(item)}
                    />
                    <Trash2
                      className="text-red-600 cursor-pointer hover:text-red-800"
                      onClick={() => handleDelete(item.id)}
                    />
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
            if (e.target === e.currentTarget) setSelectedRecord(null);
          }}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
        >
          <div className="bg-white rounded-lg p-6 shadow-lg max-h-[90vh] overflow-y-auto relative">
            <h2 className="text-2xl font-bold mb-4 text-center">Record Details</h2>
            <table className="w-full text-sm text-left border-collapse">
              <tbody className="lg:grid grid-cols-2 gap-2">
                {[
                  { label: "Name:", value: selectedRecord.fullName },
                  { label: "Father Name:", value: selectedRecord.fatherName },
                  { label: "Gender:", value: selectedRecord.gender },
                  { label: "CNIC No.:", value: selectedRecord.cnic },
                  { label: "Father CNIC No.:", value: selectedRecord.fatherCnic },
                  { label: "Date of Birth:", value: new Date(selectedRecord.dateOfBirth).toDateString() },
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
                  <tr key={index} className="hover:bg-gray-200">
                    <td className="font-semibold p-2">{row.label}</td>
                    <td className="p-2">{row.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <button
              onClick={() => setSelectedRecord(null)}
              className="mt-6 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 w-full"
            >
              Close
            </button>
          </div>
        </div>
      )}
       </>
      )}
    </div>
  );
};

export default AdmissionListing;
