import type { MetaFunction } from "@remix-run/node";
import React from "react";

export const meta: MetaFunction = () => {
  return [
    { title: "Apple" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return <React.Fragment></React.Fragment>;
}
