import { useContext } from "react";
import { AssetContext } from "./Grandpa";

const Special = ({ asset }) => {
  const gift = useContext(AssetContext);
  return (
    <div>
      <h2>AD</h2>
      <ul>
        <li>
          <p>Received {asset} from Dadu.</p>
        </li>
        <li>
          <p>Also received Dadu&apos;s {gift}.</p>
        </li>
      </ul>
    </div>
  );
};

export default Special;
