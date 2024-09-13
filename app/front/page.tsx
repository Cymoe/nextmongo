'use client'
import { useEffect } from "react";

export default function Front() {
  useEffect(() => {
    console.log("hello Front");
  })
  return (<h1>some content</h1>)
}