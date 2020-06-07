import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import CountryDetail from "../src/containers/CountryDetail";

const Country = () => {
  const router = useRouter();
  let code = router.query.code;

  return <CountryDetail code={code} />;
};

export default Country;
