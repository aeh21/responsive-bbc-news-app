import Flag from "react-world-flags";
import cx from "classnames";

import { Country } from "../../types";

interface Props extends Country {
  className?: string;
}

const CountryCard = ({ code, name, className = "" }: Props) => {
  return (
    <div className={cx("flex md:flex-col items-center bg-white border border-slate-200", className)}>
      <Flag code={code} alt={`${name} flag`} className="h-12 p-2 md:p-0 md:h-32 w-1/5 md:w-full object-contain md:object-cover" />
      <div className="p-3">
        <h2 className="font-bold text-md">{name}</h2>
      </div>
    </div>
  );
};

export default CountryCard;
