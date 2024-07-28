"use client";
import React from "react";
import { Icons } from "@/components/ui/icons";
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
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { countries } from "../../../data/countries";

function PaymentCard() {
  return (
    <section className="bg-gray-100 p-10 rounded-xl ">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Membership and Donation page
      </h1>
      <div className="flex flex-col lg:flex-row justify-center gap-7 items-center bg-gray-100 ">
        <div>
          <Card className="shadow-2xl  w-[42rem] lg:w-full border-2 border-gray-500  hover:border-gray-900">
            <CardHeader>
              <CardTitle className="text-center">Membership Form</CardTitle>
              <CardDescription className="text-center">
                Please fill out the following form to become a member/donor of
                our organization.
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-6">
              {/* <div className="grid grid-cols-2 gap-4"> */}
                <div className="grid gap-2">
                  {/* <Label htmlFor="month">Membership Type</Label> */}
                  <Select>
                    <SelectTrigger id="type" aria-label="Type">
                      <SelectValue placeholder="Membership Type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">Monthly </SelectItem>
                      <SelectItem value="2">Yearly</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid gap-2">
                  {/* <Label htmlFor="amount">Donation Amount</Label> */}
                  <Select>
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

                <div className="grid gap-2 xl:mb-6">
                  {/* <Label htmlFor="name">Name</Label> */}
                  <Input id="name" placeholder="Full Name" />
                </div>
                <div className="grid gap-2">
                  {/* <Label htmlFor="name">Father Name</Label> */}
                  <Input id="phone" placeholder="Phone No." />
                </div>
              {/* </div> */}
              <div className="grid gap-2">
                <Label htmlFor="city">Address</Label>
                <Input id="city" placeholder="" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="country">Country</Label>
                <select
                  id="country"
                  name="country"
                  className="mt-1 block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none sm:text-sm rounded-md"
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
              <Button className="w-full">Submit</Button>
            </CardFooter>
          </Card>
        </div>
        <div>
          <Card className="shadow-2xl border-2 border-gray-500  hover:border-gray-900">
            <CardHeader>
              <CardTitle className="text-center">Payment Method</CardTitle>
              <CardDescription className="text-center">
                Donate your payment through available payment methods.
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-6">
              <RadioGroup
                defaultValue="card"
                className="grid grid-cols-3 gap-4"
              >
                <div>
                  <RadioGroupItem
                    value="card"
                    id="card"
                    className="peer sr-only"
                    aria-label="Card"
                  />
                  <Label
                    htmlFor="card"
                    className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-transparent p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="mb-3 h-6 w-6"
                    >
                      <rect width="20" height="14" x="2" y="5" rx="2" />
                      <path d="M2 10h20" />
                    </svg>
                    Card
                  </Label>
                </div>

                <div>
                  <RadioGroupItem
                    value="paypal"
                    id="paypal"
                    className="peer sr-only"
                    aria-label="Paypal"
                  />
                  <Label
                    htmlFor="paypal"
                    className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-transparent p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                  >
                    <Icons.paypal className="mb-3 h-6 w-6" />
                    Paypal
                  </Label>
                </div>

                <div>
                  <RadioGroupItem
                    value="apple"
                    id="apple"
                    className="peer sr-only"
                    aria-label="Apple"
                  />
                  <Label
                    htmlFor="apple"
                    className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-transparent p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                  >
                    <Icons.apple className="mb-3 h-6 w-6" />
                    Apple
                  </Label>
                </div>
              </RadioGroup>
              <div className="grid gap-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="First Last" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="city">City</Label>
                <Input id="city" placeholder="" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="number">Card number</Label>
                <Input id="number" placeholder="" />
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="month">Expires</Label>
                  <Select>
                    <SelectTrigger id="month" aria-label="Month">
                      <SelectValue placeholder="Month" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">January</SelectItem>
                      <SelectItem value="2">February</SelectItem>
                      <SelectItem value="3">March</SelectItem>
                      <SelectItem value="4">April</SelectItem>
                      <SelectItem value="5">May</SelectItem>
                      <SelectItem value="6">June</SelectItem>
                      <SelectItem value="7">July</SelectItem>
                      <SelectItem value="8">August</SelectItem>
                      <SelectItem value="9">September</SelectItem>
                      <SelectItem value="10">October</SelectItem>
                      <SelectItem value="11">November</SelectItem>
                      <SelectItem value="12">December</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="year">Year</Label>
                  <Select>
                    <SelectTrigger id="year" aria-label="Year">
                      <SelectValue placeholder="Year" />
                    </SelectTrigger>
                    <SelectContent>
                      {Array.from({ length: 10 }, (_, i) => (
                        <SelectItem
                          key={i}
                          value={`${new Date().getFullYear() + i}`}
                        >
                          {new Date().getFullYear() + i}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="cvc">CVC</Label>
                  <Input id="cvc" placeholder="CVC" />
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Continue</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
}
export default PaymentCard;
