import "./App.css";
import Grandpa from "./Components/Family/Grandpa";
import HookForm from "./Components/HookForm/HookForm";
import RefForm from "./Components/RefForm/RefForm";
import ReusableForm from "./Components/ReusableForm/ReusableForm";
import SimpleForm from "./Components/SimpleForm/SimpleForm";
import StatefulForm from "./Components/StatefulForm/StatefulForm";

function App() {
  const handleSignUpSubmit = (data) => {
    console.log(data);
  };
  const handleUpdateProfile = (data) => {
    console.log(data);
  };
  return (
    <>
      {/* <SimpleForm></SimpleForm> */}
      {/* <StatefulForm></StatefulForm> */}
      {/* <RefForm></RefForm> */}
      {/* <HookForm></HookForm> */}
      <ReusableForm formTitle={"Sign Up"} handleSubmit={handleSignUpSubmit}>
        <p>Please Sign up Right Now.</p>
      </ReusableForm>
      <ReusableForm
        formTitle={"Update Profile"}
        handleSubmit={handleUpdateProfile}
        submitButtonText="Update"
      >
        <p>Always keep your profile updated.</p>
      </ReusableForm>

      <Grandpa></Grandpa>
    </>
  );
}

export default App;
