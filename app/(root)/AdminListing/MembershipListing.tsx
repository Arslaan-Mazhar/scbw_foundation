"use client"
import { useEffect, useState } from "react";
import { fetchData } from "../../../hooks/fetchData";

interface MembershipDataType {
  id: string;
  name: string;
  amount: number;
  city?: string;
  country: string;
  createdAt: Date;
  email?: string;
  phone: number;
  type: string;

}

const MembershipListing = () => {
  const [data, setData] = useState<MembershipDataType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      try {
        const data = await fetchData();
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
      Membership Listing
    </h1>
    {loading ? (
      <p className="text-2xl font-bold text-center text-gray-600">Loading...</p>
    ) : (
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300 rounded-lg bg-white shadow-sm">
          <thead className="bg-primary text-white">
            <tr>
              <th className="py-3 px-4 text-left border-b border-gray-300">Name</th>
              <th className="py-3 px-4 text-left border-b border-gray-300">Type</th>
              <th className="py-3 px-4 text-left border-b border-gray-300">Amount</th>
              <th className="py-3 px-4 text-left border-b border-gray-300">Phone No.</th>
              <th className="py-3 px-4 text-left border-b border-gray-300">Email</th>
              <th className="py-3 px-4 text-left border-b border-gray-300">City</th>
              <th className="py-3 px-4 text-left border-b border-gray-300">Country</th>

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
                <td className="py-3 px-4 border-b border-gray-300">{item.name}</td>
                <td className="py-3 px-4 border-b border-gray-300">{item.type}</td>
                <td className="py-3 px-4 border-b border-gray-300">{item.amount}</td>
                <td className="py-3 px-4 border-b border-gray-300">{item.phone}</td>
                <td className="py-3 px-4 border-b border-gray-300">{item.email || "-"}</td>
                <td className="py-3 px-4 border-b border-gray-300">{item.city || "-"}</td>
                <td className="py-3 px-4 border-b border-gray-300">{item.country}</td>
                {/* <td className="py-3 px-4 border-b border-gray-300">{ new Date(item.createdAt).toDateString()}</td> */}
               
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )}
  </div>
  );
};

export default MembershipListing;
