// lib/fetchData.ts
import { db } from "../lib/firebase";
import { collection, getDocs } from "firebase/firestore";

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
  // createdAt: Date | null;
}

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

export const fetchData = async (): Promise<MembershipDataType[]> => {
  const querySnapshot = await getDocs(collection(db, "membershipDB"));
  const data = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  })) as MembershipDataType[];
  return data;
};

export const fetchAdmissionData = async (): Promise<AdmissionDataType[]> => {
  const querySnapshot = await getDocs(collection(db, "admissionDB"));
  const data = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  })) as AdmissionDataType[];
  return data;
};
