import { useRouter } from "next/router";
import axios from "axios";
import { useEffect, useState } from "react";

const Details = () => {
  const router = useRouter();
  console.log(router);
  console.log(router.query);
  let id = router.query.id;
  let a = 1;

  const API_URL = `https://api.thecatapi.com/v1/images/${id}`;
  console.log("id : ", id);

  const [imgUrl, setImgUrl] = useState("");

  useEffect(() => {
    console.log("id :", id);
    axios
      .get(API_URL)
      .then((res) => {
        console.log("res : ", res);
        setImgUrl(res.data.url);
      })
      .catch((e) => {
        console.log("error :", e);
      });
    a += 1;
    console.log("a: ", a);
  }, [id]);

  return (
    <div>
      <div>detail : {id}</div>
      <img src={imgUrl} />
    </div>
  );
};

export default Details;
