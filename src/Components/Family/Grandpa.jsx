import Aunty from "./Aunty";
import Dad from "./Dad";
import Uncle from "./Uncle";
import "./Family.css";
import { createContext, useState } from "react";
export const AssetContext = createContext("gold");
export const MoneyContext = createContext(100000);

const Grandpa = () => {
  const asset = "Jomi jati bari gari";
  const [money, setMoney] = useState(100000);

  console.log(asset);
  return (
    <div className="grandpa">
      <h2>Dadu</h2>
      <p>Gave {money} tk. to Kaka.</p>
      <MoneyContext.Provider value={[money, setMoney]}>
        <AssetContext.Provider value="gold">
          <section className="flex">
            <Aunty asset={asset}></Aunty>
            <Dad asset={asset}></Dad>
            <Uncle></Uncle>
          </section>
        </AssetContext.Provider>
      </MoneyContext.Provider>
    </div>
  );
};

export default Grandpa;
