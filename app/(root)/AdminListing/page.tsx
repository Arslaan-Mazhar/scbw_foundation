"use client";
import { useAuth } from "@/context/AuthContext";
import AdminRoute from "@/components/AdminRoute/page";
import MembershipListing from "./MembershipListing";
import AdmissionListing from "./AdmissionListing";

const FormPage = () => {
  const { user } = useAuth();

  return (
    <AdminRoute>
      <div>
        {user ? (
          <>
            <section>
              <MembershipListing />
            </section>
            <section>
              <AdmissionListing />
            </section>
          </>
        ) : (
          <div>You do not have access to this page.</div>
        )}
      </div>
    </AdminRoute>
  );
};

export default FormPage;
