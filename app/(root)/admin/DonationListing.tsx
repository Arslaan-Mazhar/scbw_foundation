"use client";
import { useEffect, useState } from "react";
import { fetchDonationData } from "@/hooks/fetchData";
import { Trash2 } from "lucide-react"; // Importing delete icon
import styles from "./admin.module.css";
interface DonationDataType {
  id: string;
  fullName: string;
  amount: string;
  currency: string;
  orderId: string;
  email: string;
  phoneNumber: string;
  createdAt: string;
  address: string;
}

const DonationListing = () => {
  const [data, setData] = useState<DonationDataType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [isOpen, setIsOpen] = useState(false); // Toggle visibility state
  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      try {
        const fetchedData = await fetchDonationData();
        const formattedData = fetchedData.map((item: any) => ({
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
    const confirmDelete = window.confirm("Are you sure you want to delete this record?");
    if (confirmDelete) {
      setData((prevData) => prevData.filter((item) => item.id !== id));
      console.log("Deleted item with ID:", id);
      // TODO: Implement database deletion logic
    }
  };

  return (
    <div className={styles.listing}>
      {/* Clickable header to toggle visibility */}
      <div
        className={styles.listingHeader}
        onClick={() => setIsOpen(!isOpen)}
      >
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Donor's List</h1></div>
        {isOpen && (
        <>
        {loading ? (
        <p className="text-2xl font-bold text-center text-gray-600">Loading...</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full border border-gray-300 rounded-lg bg-white shadow-lg">
            <thead className="bg-blue-600 text-white">
              <tr>
                <th className="py-3 px-4 text-left border-b border-gray-300">#</th>
                <th className="py-3 px-4 text-left border-b border-gray-300">Name</th>
                <th className="py-3 px-4 text-left border-b border-gray-300">Amount</th>
                <th className="py-3 px-4 text-left border-b border-gray-300">Currency</th>
                <th className="py-3 px-4 text-left border-b border-gray-300">Order ID</th>
                <th className="py-3 px-4 text-left border-b border-gray-300">Phone</th>
                <th className="py-3 px-4 text-left border-b border-gray-300">Email</th>
                {/* <th className="py-3 px-4 text-left border-b border-gray-300">Address</th> */}
                <th className="py-3 px-4 text-left border-b border-gray-300">Date</th>
                <th className="py-3 px-4 text-center border-b border-gray-300">Action</th>
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
                  <td className="py-3 px-4 border-b border-gray-300 font-semibold">{item.amount}</td>
                  <td className="py-3 px-4 border-b border-gray-300">{item.currency}</td>
                  <td className="py-3 px-4 border-b border-gray-300">{item.orderId}</td>
                  <td className="py-3 px-4 border-b border-gray-300">{item.phoneNumber}</td>
                  <td className="py-3 px-4 border-b border-gray-300">{item.email || "-"}</td>
                  {/* <td className="py-3 px-4 border-b border-gray-300">{item.address || "-"}</td> */}
                  <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-600">
                    {item.createdAt}
                  </td>
                  <td className="py-3 px-4 border-b border-gray-300 text-center">
                    <button
                      onClick={() => handleDelete(item.id)}
                      className="text-red-600 hover:text-red-800 transition"
                    >
                      <Trash2 size={20} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
       </>
      )}
    </div>
  );
};

export default DonationListing;
