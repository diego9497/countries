import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import CountryDetail from "../src/components/CountryDetail";
import { API_URL } from "../src/api";

const Country = () => {
  const router = useRouter();
  let code = router.query.code;
  const [country, setCountry] = useState({});

  useEffect(() => {
    fetch(`${API_URL}/alpha/${code}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCountry(data);
      });
  }, [code]);

  return <CountryDetail {...country} />;
};

export default Country;
