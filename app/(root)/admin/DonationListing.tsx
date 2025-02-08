"use client";
import { useEffect, useState } from "react";
import { fetchDonationData } from "@/hooks/fetchData";

interface DonationDataType {
  id: string;
  fullName: string;
  amount: string;
  currency: string;
  orderId:string,
  email: string;
  phoneNumber: string;
  createdAt: string;
  address: string;
}

const DonationListing = () => {
  const [data, setData] = useState<DonationDataType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

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

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
        Donor's List
      </h1>
      {loading ? (
        <p className="text-2xl font-bold text-center text-gray-600">Loading...</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full border border-gray-300 rounded-lg bg-white shadow-lg">
            <thead className="bg-blue-600 text-white">
              <tr>
                <th className="py-3 px-4 text-left border-b border-gray-300">Name</th>
                <th className="py-3 px-4 text-left border-b border-gray-300">Amount</th>
                <th className="py-3 px-4 text-left border-b border-gray-300">Currency</th>
                <th className="py-3 px-4 text-left border-b border-gray-300">Order ID</th>
                <th className="py-3 px-4 text-left border-b border-gray-300">Phone</th>
                <th className="py-3 px-4 text-left border-b border-gray-300">Email</th>
                <th className="py-3 px-4 text-left border-b border-gray-300">Address</th>
                <th className="py-3 px-4 text-left border-b border-gray-300">Date</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr
                  key={item.id}
                  className={`${
                    index % 2 === 0 ? "bg-white" : "bg-blue-100"
                  } hover:bg-blue-300 transition-all`}
                >
                  <td className="py-3 px-4 border-b border-gray-300">{item.fullName}</td>
                  <td className="py-3 px-4 border-b border-gray-300 font-semibold">
                    {item.amount}
                  </td>
                  <td className="py-3 px-4 border-b border-gray-300">{item.currency}</td>
                  <td className="py-3 px-4 border-b border-gray-300">{item.orderId}</td>
                  <td className="py-3 px-4 border-b border-gray-300">{item.phoneNumber}</td>
                  <td className="py-3 px-4 border-b border-gray-300">
                    {item.email || "-"}
                  </td>
                  <td className="py-3 px-4 border-b border-gray-300">
                    {item.address || "-"}
                  </td>
                  <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-600">
                    {item.createdAt}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default DonationListing;
