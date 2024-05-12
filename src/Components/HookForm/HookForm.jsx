import useInputState from "../../Hooks/useInputState";

const HookForm = () => {
  //   const [name, handleNameChange] = useInputState("hi");
  const emailState = useInputState("hi@bi.ci");
  const handleSubmit = (e) => {
    // console.log(name);
    console.log(emailState.value);
    e.preventDefault();
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        {/* <input
          value={name}
          onChange={handleNameChange}
          type="text"
          name="name"
        />
        <br /> */}
        <input type="email" name="email" {...emailState} />
        <br />
        <input type="password" name="pass" />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default HookForm;
