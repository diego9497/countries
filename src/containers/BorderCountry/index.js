import { useState, useEffect } from "react";
import { API_URL } from "../../api";
import BorderCountry from "../../components/BorderCountry";

export default function BorderCountryContainer({ code }) {
  const [country, setCountry] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      let res = await fetch(`${API_URL}/alpha/${code}`);
      let data = await res.json();
      setCountry(data);
    };
    fetchData();
  }, []);

  return <>{country ? <BorderCountry name={country.name} /> : null}</>;
}
