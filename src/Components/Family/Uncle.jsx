import { useContext } from "react";
import Cousin from "./Cousin";
import { MoneyContext } from "./Grandpa";

const Uncle = () => {
  const [money, setMoney] = useContext(MoneyContext);

  return (
    <div>
      <h2>Kaka</h2>
      <p>Received {money} tk. from Dadu.</p>
      <button onClick={() => setMoney(money + 1000)}>Add 1000 tk.</button>
      <section className="flex">
        <Cousin name="Kabyo"></Cousin>
        <Cousin name="Dola"></Cousin>
      </section>
    </div>
  );
};

export default Uncle;
