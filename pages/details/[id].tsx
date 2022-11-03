import { useRouter } from "next/router";
import axios from "axios";
import { useEffect, useState } from "react";

const Details = () => {
  const router = useRouter();
  console.log(router);
  console.log(router.query);
  const id = router.query.id;

  const API_URL = `https://api.thecatapi.com/v1/images/${id}`;
  console.log("id : ", id);

  const [imgUrl, setImgUrl] = useState("");

  useEffect(() => {
    console.log("wqd", id);
    axios
      .get(API_URL)
      .then((res) => {
        console.log(res);
        setImgUrl(res.data.url);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [id]);

  return (
    <div>
      <div>detail : {id}</div>
      <img src={imgUrl} />
    </div>
  );
};

export default Details;
