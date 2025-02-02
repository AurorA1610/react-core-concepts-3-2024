import { useEffect, useRef } from "react";

const RefForm = () => {
  const nameRef = useRef(null);
  const phoneRef = useRef(null);
  const emailRef = useRef(null);
  const passRef = useRef(null);

  useEffect(() => {
    nameRef.current.focus();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(
      nameRef.current.value,
      phoneRef.current.value,
      emailRef.current.value,
      passRef.current.value
    );
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input ref={nameRef} type="text" name="name" />
        <br />
        <input ref={phoneRef} type="text" name="phone" />
        <br />
        <input
          ref={emailRef}
          defaultValue="a@b.com"
          type="email"
          name="email"
        />
        <br />
        <input ref={passRef} type="password" name="pass" />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default RefForm;
