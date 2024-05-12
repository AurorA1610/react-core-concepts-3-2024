import { useState } from "react";

const StatefulForm = () => {
  const [name, setName] = useState("Aurora Lithe");
  const [email, setEmail] = useState(null);
  const [phone, setPhone] = useState(null);
  const [pass, setPass] = useState(null);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (pass.length < 6) {
      setError("Passwords must be at least 6 characters.");
    } else {
      setError("");
    }
    console.log(name, phone, email, pass);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };
  const handlePassChange = (e) => {
    setPass(e.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          value={name}
          type="text"
          name="name"
          onChange={handleNameChange}
        />
        <br />
        <input type="email" name="email" onChange={handleEmailChange} />
        <br />
        <input type="text" name="phone" onChange={handlePhoneChange} />
        <br />
        <input
          type="password"
          required
          name="password"
          onChange={handlePassChange}
        />
        <br />
        <input type="submit" value="Submit" />
        {error && <p>{error}</p>}
      </form>
    </div>
  );
};

export default StatefulForm;
