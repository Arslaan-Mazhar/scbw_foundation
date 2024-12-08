"use client"
import { useState,useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Formik, Field, Form } from 'formik';
import Head from 'next/head';
import * as Yup from 'yup';
import { db } from "@/lib/firebase"; // Import Firebase Firestore instance
import { collection, addDoc } from "firebase/firestore";

const initialValues = {
  photo: '',
  fullName: '',
  fatherName: '',
  contactNumber: '',
  email: '',
  dateOfBirth: '',
  age: '',
  qualification: '',
  islamicEducation: '',
  profession: '',
  otherSkills: '',
  courseName: '',
  causeOfBlindness: '',
  gender: '',
  religion: '',
  cnic: '',
  fatherCnic: '',
  fatherContactNumber: '',
  address: '',
  city: '',
  district: ''
};

const validationSchema = Yup.object({
  fullName: Yup.string().required('Required'),
  fatherName: Yup.string().required('Required'),
  contactNumber: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email address').required('Required'),
  dateOfBirth: Yup.date().required('Required'),
  age: Yup.number().required('Required'),
  cnic: Yup.string().required('Required'),
  fatherCnic: Yup.string().required('Required'),
  fatherContactNumber: Yup.string().required('Required')
});

const AdmissionForm = () => {
       // Mock admin check
      //  useEffect(() => {
      //   const fetchUserData = async () => {
      //     const user = await getCurrentUser(); // Replace with your auth logic
      //     setIsAdmin(user?.role === "admin");
      //   };
      //   fetchUserData();
      // }, []);
  return (
    <>
      <Head>
        <title>Admission - SCBW Foundation</title>
        <meta
          name="description"
          content="Learn more about admissions in SCBW Foundation, our mission, vision, and the impact we're making for the visually impaired people."
        />
      </Head>
    <div className="container mx-auto p-4 min-h-screen">
      <h1 className="text-2xl font-bold mb-4 text-center">Admission Form</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={async (values, { resetForm }) => {
          try {
            await addDoc(collection(db, "admissionDB"), { ...values, createdAt: new Date() });
            alert("Form submitted successfully!");
            resetForm(); // Reset the form after successful submission
          } catch (error) {
            console.error("Error submitting form:", error);
            alert("Failed to submit the form.");
          }
        }}
      >
        <Form className="grid grid-cols-1  lg:grid-cols-2  gap-4 border-4 p-10 border-gray-500 hover:border-gray-950 shadow-2xl rounded-xl">
          <Field
            name="fullName"
            className="p-2 border border-gray-300 rounded"
            placeholder="Full Name"
          />
          <Field
            name="fatherName"
            className="p-2 border border-gray-300 rounded"
            placeholder="Father Name"
          />
          <Field
            name="contactNumber"
            type="tel"
            className="p-2 border border-gray-300 rounded"
            placeholder="Contact Number"
          />
          <Field
            name="email"
            type="email"
            className="p-2 border border-gray-300 rounded"
            placeholder="Email Address"
          />
          <Field
            name="dateOfBirth"
            type="date"
            className="p-2 border border-gray-300 rounded"
            placeholder="Date of Birth"
          />
          <Field
            name="age"
            type="number"
            className="p-2 border border-gray-300 rounded"
            placeholder="Age"
          />
          <Field
            name="qualification"
            as="select"
            className="p-2 border border-gray-300 rounded"
          >
            <option value="">Qualification</option>
            <option value="Matric">Matric</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Bachelor">Bachelor</option>
            <option value="Master">Master</option>
          </Field>
          <Field
            name="islamicEducation"
            className="p-2 border border-gray-300 rounded"
            placeholder="Islamic Education"
          />
          <Field
            name="profession"
            className="p-2 border border-gray-300 rounded"
            placeholder="Profession"
          />
          <Field
            name="otherSkills"
            className="p-2 border border-gray-300 rounded"
            placeholder="Other Skills"
          />
          <Field
            name="courseName"
            as="select"
            className="p-2 border border-gray-300 rounded"
          >
            <option value="">Course Name</option>
            <option value="Course1">Course 1</option>
            <option value="Course2">Course 2</option>
            <option value="Course3">Course 3</option>
          </Field>
          <Field
            name="causeOfBlindness"
            as="select"
            className="p-2 border border-gray-300 rounded"
          >
            <option value="">Cause of Blindness</option>
            <option value="Disease">Disease</option>
            <option value="Accident">Accident</option>
            <option value="Genetic">Genetic</option>
            <option value="Other">Other</option>
          </Field>
          <Field
            name="gender"
            as="select"
            className="p-2 border border-gray-300 rounded"
          >
            <option value="">Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </Field>
          <Field
            name="religion"
            className="p-2 border border-gray-300 rounded"
            placeholder="Religion"
          />
          <Field
            name="cnic"
            type="text"
            className="p-2 border border-gray-300 rounded"
            placeholder="CNIC Number"
          />
          <Field
            name="fatherCnic"
            type="text"
            className="p-2 border border-gray-300 rounded"
            placeholder="Father CNIC Number"
          />
          <Field
            name="fatherContactNumber"
            type="tel"
            className="p-2 border border-gray-300 rounded"
            placeholder="Father Contact Number"
          />
          <Field
            name="address"
            className="p-2 border border-gray-300 rounded"
            placeholder="Address"
          />
          <Field
            name="city"
            className="p-2 border border-gray-300 rounded"
            placeholder="City"
          />
          <Field
            name="district"
            className="p-2 border border-gray-300 rounded"
            placeholder="District"
          />
           <Field
            name="photo"
            type="file"
            accept="image/*"
            className="p-2 border border-gray-300 rounded"
            placeholder="Passport size photo"
          />
          
          <Button type='submit' className="w-40 mx-auto transform hover:scale-105 transition-all duration-300">
            Submit
          </Button>
        </Form>
      </Formik>
      <div className="text-red-500 mt-4 border-b border-gray-300 p-4">
            <p><b>Note:</b> Please attach the following required attested documents with this form:</p>
            <ul className="list-disc ml-5">
              <li>2 Passport size pictures of the candidate</li>
              <li>Copy of CNIC or Birth Certificate</li>
              <li>Copy of Last Degree</li>
              <li>Copy of Disability Certificate</li>
              <li>Copies of these documents</li>
            </ul>
          </div>
    </div>
    </>
  );
};

export default AdmissionForm;
