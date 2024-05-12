import Cousin from "./Cousin";

const Aunty = ({ asset }) => {
  return (
    <div>
      <h2>Pishi</h2>
      <section className="flex">
        <Cousin name="Sourav" asset={asset}></Cousin>
        <Cousin name="Joy"></Cousin>
        <Cousin name="Joyeeta"></Cousin>
      </section>
    </div>
  );
};

export default Aunty;
