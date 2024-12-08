"use client";
import React,{useState, useEffect} from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { countries } from "../../../data/countries";
import { db } from "@/lib/firebase"; // Import Firebase Firestore instance
import { collection, addDoc } from "firebase/firestore";
import Head from "next/head";


export default function  MembershipForm() {
  const initialFormData = {
    type: "",
    amount: "",
    name: "",
    phone: "",
    email: "",
    city: "",
    country: "",
  };
  const [formData, setFormData] = useState(initialFormData);
   
     // Mock admin check
  // useEffect(() => {
  //   const fetchUserData = async () => {
  //     const user = await getCurrentUser(); // Replace with your auth logic
  //     setIsAdmin(user?.role === "admin");
  //   };
  //   fetchUserData();
  // }, []);

      const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
      };
    
      const handleSelectChange = (id: string, value: string) => {
        setFormData({ ...formData, [id]: value });
      };
    
      const handleSubmit = async () => {
        try {
          // Add a new document to the "memberships" collection
          await addDoc(collection(db, "membershipDB"), {
            ...formData,
            createdAt: new Date(), // Store submission timestamp
          });
          alert("Membership submitted successfully!");
          setFormData(initialFormData); // Reset form data
          
        } catch (error) {
          console.error("Error submitting membership:", error);
          alert("Failed to submit the membership.");
        }
      };
  return (
    <>
       <Head>
        <title>Membership - SCBW Foundation</title>
        <meta
          name="description"
          content="Try to become our permanent member of SCBW Foundation, our mission, vision, and the impact we're making for the people in need."
        />
      </Head>
        {/* Donation Options */}
        <section className="py-12 bg-gray-100">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8">Membership / Donation Options</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              "One-time Donation",
              "Monthly Sponsorship",
              "Corporate Partnership",
            ].map((option, index) => (
              <div
                key={index}
                className="bg-white p-6 text-center shadow-md rounded-lg border border-primary hover:bg-blue-100"
              >
                <h3 className="text-xl font-semibold">{option}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
      <h1 className="text-3xl font-bold mb-6 text-center my-2">
          Become our Member
        </h1>
      <Card className="mx-auto my-5 shadow-2xl  xl:pt-1 lg:w-[42rem]  border-2 border-gray-500  hover:border-gray-900">
        <CardHeader>
          <CardTitle className="text-center">Membership Form</CardTitle>
          <CardDescription className="text-center">
            Please fill out the following form to become a member/donor of our
            organization.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-6">
          {/* <div className="grid grid-cols-2 gap-4"> */}
          <div className="grid gap-2">
            {/* <Label htmlFor="month">Membership Type</Label> */}
            <Select  value={formData.type} onValueChange={(value) => handleSelectChange("type", value)}>
              <SelectTrigger id="type" aria-label="Type">
                <SelectValue placeholder="Membership Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Monthly">Monthly </SelectItem>
                <SelectItem value="Yearly">Yearly</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid gap-2">
            {/* <Label htmlFor="amount">Donation Amount</Label> */}
            <Select value={formData.amount} onValueChange={(value) => handleSelectChange("amount", value)}>
              <SelectTrigger id="amount" aria-label="Amount">
                <SelectValue placeholder="Donation Amount" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="10">10$ </SelectItem>
                <SelectItem value="100">100$</SelectItem>
                <SelectItem value="1000">1,000$</SelectItem>
                <SelectItem value="10000">10,000$</SelectItem>
                <SelectItem value="100000">100,000$</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid gap-2 ">
            {/* <Label htmlFor="name">Name</Label> */}
            <Input id="name" placeholder="Full Name" value={formData.name}  onChange={handleChange} />
          </div>
          <div className="grid gap-2">
            {/* <Label htmlFor="name">Father Name</Label> */}
            <Input id="phone" placeholder="Phone No." value={formData.phone} onChange={handleChange} />
          </div>
          <div className="grid gap-2">
            {/* <Label htmlFor="name">Father Name</Label> */}
            <Input id="email" placeholder="Email Address" value={formData.email} onChange={handleChange} />
          </div>
          {/* </div> */}
          <div className="grid gap-2">
            {/* <Label htmlFor="city">Address</Label> */}
            <Input id="city" placeholder="Address" value={formData.city} onChange={handleChange} />
          </div>
          <div className="grid gap-2">
            {/* <Label htmlFor="country">Country</Label> */}
            <select
              id="country"
              name="country"
              className="mt-1 block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none sm:text-sm rounded-md"
              onChange={handleChange}
              value={formData.country}
            >
              {countries.map((country) => (
                <option key={country} value={country}>
                  {country}
                </option>
              ))}
            </select>
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full transform hover:scale-105 transition-all duration-300" onClick={handleSubmit} >
            Submit
          </Button>
        </CardFooter>
      </Card>
    </>
  );
}

