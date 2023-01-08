import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import Link from "next/link";
// import styles from "../styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div>Hello World</div>
      <br />
      <Link href="/post">Post</Link>
      <br />
      <Link href="/post/address">Address</Link>
    </>
  );
}
