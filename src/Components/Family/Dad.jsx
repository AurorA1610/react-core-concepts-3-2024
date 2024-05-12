import Bro from "./Bro";
import Me from "./Me";

const Dad = ({ asset }) => {
  return (
    <div>
      <h2>Baba</h2>
      <section className="flex">
        <Me asset={asset}></Me>
        <Bro></Bro>
      </section>
    </div>
  );
};

export default Dad;
