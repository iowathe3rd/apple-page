import type { MetaFunction } from "@remix-run/node";
import React from "react";
import Hero from "~/components/Hero";
import Highlights from "~/components/Highlights";
import NavBar from "~/components/NavBar";

export const meta: MetaFunction = () => {
  return [
    { title: "Apple" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <main>
      <NavBar />
      <Hero />
      <Highlights />
    </main>
  );
}
