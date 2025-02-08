"use client";
import { useEffect, useState } from "react";
import { getAuth, signOut } from "firebase/auth";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/lib/firebase"; 
import { useRouter } from "next/navigation";


const Dashboard = () => {
  const [listings, setListings] = useState<any[]>([]);
  const auth = getAuth();
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, "donationDB"));
      setListings(querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    };

    fetchData();
  }, []);

  const handleLogout = async () => {
    await signOut(auth);
    router.push("/login");
  };
  const handleAdmission = async () => {
    router.push("/adminListing");
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-semibold mb-4">Admin Dashboard</h1>
      <button onClick={handleLogout} className="bg-red-500 text-white p-2 mb-4">
        Logout
      </button>
      <button onClick={handleAdmission} className="bg-red-500 text-white p-2 mb-4">
        Admission List
      </button>
      <div className="bg-white shadow-md p-4 rounded-md">
        <h2 className="text-xl font-semibold mb-2">Donation Listings</h2>
        <ul>
          {listings.map((listing) => (
            <li key={listing.id} className="border-b p-2">
              {listing.fullName} donated {listing.amount} {listing.currency}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
