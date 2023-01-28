import { useParams } from "react-router-dom";
import useFetchTopHeadlines from "../../api/useFetchTopHeadlines";

const Country = () => {
  const { countryCode } = useParams();

  const { data, error, isLoading } = useFetchTopHeadlines(countryCode);

  if (error) return <div>failed to load</div>
  if (isLoading) return <div>loading...</div>

  console.log(data);
  
  return <>Country Page</>;
};

export default Country;
