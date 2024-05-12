import { useContext } from "react";
import { AssetContext } from "./Grandpa";

const FutureBoudi = () => {
  const gift = useContext(AssetContext);
  return (
    <div>
      <h2>Future Boudi</h2>
      <p>Has Dadu&apos;s {gift}.</p>
    </div>
  );
};

export default FutureBoudi;
