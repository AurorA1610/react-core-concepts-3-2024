import Special from "./Special";

const Me = ({ asset }) => {
  console.log(asset);
  return (
    <div>
      <h2>Aurora</h2>
      <section className="flex">
        <Special asset={asset}></Special>
      </section>
    </div>
  );
};

export default Me;
