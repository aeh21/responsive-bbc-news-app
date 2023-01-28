import { useParams } from "react-router-dom";

const Country = () => {
  let { countryCode } = useParams();

  console.log(countryCode);
  
  return <>Country Page</>;
};

export default Country;
