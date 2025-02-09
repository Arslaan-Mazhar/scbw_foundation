// "use client"
// import { useAuth } from "@/context/AuthContext";
// import AdminRoute from "@/components/AdminRoute/page";
// import MembershipListing from "./MembershipListing";
// import AdmissionListing from "./AdmissionListing";
// import DonationListing from "./DonationListing";

// const FormPage = () => {
//   const { user } = useAuth();

//   return (
//     <AdminRoute>
//       <div>
//         {user ? (
//           <>
//            <h1>Admin Dashboard</h1>
//             <section>
//               <DonationListing />
//             </section>
//             <section>
//               <MembershipListing />
//             </section>
//             <section>
//               <AdmissionListing />
//             </section>
//           </>
//         ) : (
//           <div>You do not have access to this page.</div>
//         )}
//       </div>
//     </AdminRoute>
//   );
// };
// export default FormPage;

"use client";
import { useAuth } from "@/context/AuthContext";
import AdminRoute from "@/components/AdminRoute/page";
import MembershipListing from "./MembershipListing";
import AdmissionListing from "./AdmissionListing";
import DonationListing from "./DonationListing";
import { motion } from "framer-motion";
import { LogOut } from "lucide-react";

const FormPage = () => {
  const { user, logout } = useAuth(); // Access logout function

  if (!user) {
    return (
      <div className="flex h-screen items-center justify-center text-xl font-bold text-red-600">
        You do not have access to this page.
      </div>
    );
  }

  return (
    <AdminRoute>
      <div className="flex flex-col h-screen bg-gray-100 p-8 overflow-y-auto">
        {/* Logout Button */}
        <div className="flex justify-end">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={logout}
            className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
          >
            <LogOut className="w-5 h-5" />
            <span>Logout</span>
          </motion.button>
        </div>

        {/* Dashboard Title */}
        <motion.h1
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold text-gray-800 mb-6 text-center"
        >
          Admin Dashboard
        </motion.h1>

        {/* Vertical Sections */}
        <div className="space-y-6">
          {/* Donation Listing */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="p-5 bg-white rounded-lg shadow-md transition-all"
          >
            <h2 className="text-xl font-semibold mb-4 text-gray-700">
              Donations
            </h2>
            <DonationListing />
          </motion.section>

          {/* Membership Listing */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="p-5 bg-white rounded-lg shadow-md transition-all"
          >
            <h2 className="text-xl font-semibold mb-4 text-gray-700">
              Memberships
            </h2>
            <MembershipListing />
          </motion.section>

          {/* Admission Listing */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="p-5 bg-white rounded-lg shadow-md transition-all"
          >
            <h2 className="text-xl font-semibold mb-4 text-gray-700">
              Admissions
            </h2>
            <AdmissionListing />
          </motion.section>
        </div>
      </div>
    </AdminRoute>
  );
};

export default FormPage;
