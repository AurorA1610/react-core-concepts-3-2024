import { useContext } from "react";
import { MoneyContext } from "./Grandpa";

const Bro = () => {
  const [money] = useContext(MoneyContext);
  return (
    <div>
      <h2>Arghya</h2>
      <p>Dadu gave {money} tk. to Kaka.</p>
    </div>
  );
};

export default Bro;
