import React from "react";
import { useSearchParams } from "react-router-dom";

export default function ProductSinglePage() {
  const [searchParams] = useSearchParams();
  console.log(searchParams.get("id"));

  return <h1>this is theproductsinglepage</h1>;
}
