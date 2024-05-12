const ReusableForm = ({
  formTitle,
  handleSubmit,
  submitButtonText = "Submit",
  children,
}) => {
  const handleLocalSubmit = (e) => {
    e.preventDefault();
    const data = {
      name: e.target.name.value,
      email: e.target.email.value,
      password: e.target.pass.value,
    };
    handleSubmit(data);
  };
  return (
    <div>
      <h2>{formTitle}</h2>
      {children}
      <form onSubmit={handleLocalSubmit}>
        <input type="text" name="name" />
        <br />
        <input type="email" name="email" />
        <br />
        <input type="password" name="pass" />
        <br />
        <input type="submit" value={submitButtonText} />
      </form>
    </div>
  );
};

export default ReusableForm;
