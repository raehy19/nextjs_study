import type { NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import axios, { Axios } from "axios";
import Cats from "../src/components/cats";
import Test from "../src/components/test";

const Home: NextPage = () => {
  const [catList, setcatList] = useState([]);

  const API_KEY =
    "live_iKRvF33nqqw8MfZlDWzF6NWeewTIIadiE5OrV0zSVcqHRRundK1lugtHkpr2H1Oe";
  const API_URL = "https://api.thecatapi.com/v1/images/search?limit=10";
  const API_URL2 =
    "http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline";
  useEffect(() => {
    axios.get(API_URL).then((res) => {
      // console.log(res.data);
      setcatList(res.data);
    });
  }, []);

  return (
    <div>
      <Head>
        <title>home page</title>
      </Head>
      <Test></Test>
      <Cats catList={catList}></Cats>
    </div>
  );
};

export default Home;
