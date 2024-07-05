import ECommerce from "@/components/Dashboard/E-commerce";
import { Metadata } from "next";
import DefaultLayout from "@/components/BuyerLayouts/DefaultLaout";
import React from "react";
import Login from "@/app/login/Login";
import SignupPage from '@/app/signup/page'
import Signin from "@/components/Auth/Signin";

export const metadata: Metadata = {
  title:
    "Next.js E-commerce Dashboard Page | NextAdmin - Next.js Dashboard Kit",
  description: "This is Next.js Home page for NextAdmin Dashboard Kit",
};

export default function Home() {
  return (
    <>
      {/* <Login /> */}
      <Signin />
      {/* <DefaultLayout>
        <ECommerce />
      </DefaultLayout> */}
    </>
  );
}
