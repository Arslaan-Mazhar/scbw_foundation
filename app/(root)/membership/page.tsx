"use client";
import React, { useState, useEffect } from "react";
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
import { Currencies } from "@/constants";

const membershipTypes = ["One-time Donation", "Monthly Sponsorship", "Yearly Sponsorship", "Corporate Partnership"];
const donationAmounts = ["10", "100", "1000", "10,000", "100,000", "Other"];

export default function MembershipForm() {
  const initialFormData = {
    type: "",
    currency:"USD",
    amount: "",
    name: "",
    phone: "",
    email: "",
    city: "",
    country: "",
    otherAmount: "",
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
      <section className="py-4 bg-gray-100">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold text-center">Donation Membership</h1>
          <h2 className="text-xl font-bold mb-3 text-center my-2">
            Become our Member
          </h2>
          <Card className="mx-auto my-3 shadow-2xl  xl:pt-1 lg:w-[42rem]  border-2 border-gray-500  hover:border-gray-900">
            <CardHeader>
              <CardTitle className="text-center">Membership Form</CardTitle>
              <CardDescription className="text-center">
                Please fill out the following form to become a member/donor of our
                organization.
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-2">
              <div className="grid gap-2">
                <Select
                  value={formData.type}
                  onValueChange={(value) => handleSelectChange("type", value)}
                >
                  <SelectTrigger id="type" aria-label="Type">
                    <SelectValue placeholder="Membership Type" />
                  </SelectTrigger>
                  <SelectContent>
                    {membershipTypes.map((type) => (
                      <SelectItem key={type} value={type}>
                        {type}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-2">
                <Select
                  value={formData.amount}
                  onValueChange={(value) => handleSelectChange("amount", value)}
                >
                  <SelectTrigger id="amount" aria-label="Amount">
                    <SelectValue placeholder="Donation Amount" />
                  </SelectTrigger>
                  <SelectContent>
                    {donationAmounts.map((amount) => (
                      <SelectItem key={amount} value={amount}>
                        {amount === "Other" ? "Other Amount" : `${amount}`}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {formData.amount === "Other" && (
                  <input
                    type="number"
                    placeholder="Enter other amount"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
                    value={formData.otherAmount}
                    onChange={(e) => setFormData((prev) => ({ ...prev, otherAmount: e.target.value }))}
                  />
                )}
              </div>
              <div className="grid gap-2">      
                <select
                  id="currency"
                  name="currency"
                  className="mt-1 block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none sm:text-sm rounded-md"
                  onChange={handleChange}
                  value={formData.currency}
                >
                  {Currencies.map((currency) => (
                    <option key={currency} value={currency}>
                      {currency}
                    </option>
                  ))}
                </select>
              </div>


              <div className="grid gap-2 ">
                {/* <Label htmlFor="name">Name</Label> */}
                <Input id="name" placeholder="Full Name" value={formData.name} onChange={handleChange} />
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
            {/*  <div className="grid gap-2">
                 <Label htmlFor="country">Country</Label> 
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
              </div> */}
            </CardContent>
            <CardFooter>
              <Button className="w-full transform hover:scale-105 transition-all duration-300" onClick={handleSubmit} >
                Submit
              </Button>
            </CardFooter>
          </Card>
        </div>
      </section>
    </>
  );
}

