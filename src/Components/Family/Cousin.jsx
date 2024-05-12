import FutureBoudi from "./FutureBoudi";

const Cousin = ({ name, asset }) => {
  return (
    <div>
      <h2>{name}</h2>
      {asset && <p>Received {asset} from Dadu.</p>}
      {name == "Sourav" && <FutureBoudi></FutureBoudi>}
    </div>
  );
};

export default Cousin;
