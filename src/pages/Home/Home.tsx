import { Link } from "react-router-dom";
import CountryCard from "../../components/CountryCard";
import { COUNTRIES } from "../../constants";

const Home = () => {
  return (
    <div className="container mx-auto py-8">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {COUNTRIES.map((country) => {
          return (
            <Link to={`/news/${country.code}`} key={country.code}>
              <CountryCard code={country.code} name={country.name} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
