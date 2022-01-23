import { useState } from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { CheckCircle, MoreVert } from "@mui/icons-material";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const names = (e) => {
    setName(e.target.value);
  };
  const emails = (e) => {
    setEmail(e.target.value);
  };
  const passwords = (e) => {
    setPassword(e.target.value);
  };
  const change = () => {
    console.log(name, email, password);
    setName("");
    setEmail("");
    setPassword("");
  };
  return (
    <div className="form">
      <input onChange={names} type="text" placeholder="Name" value={name} />
      <input onChange={emails} type="text" placeholder="Email" value={email} />
      <input
        onChange={passwords}
        type="password"
        placeholder="Password"
        value={password}
      />
      <button onClick={change}>Submit</button>
      <MoreVertIcon></MoreVertIcon>
      <CheckCircleIcon></CheckCircleIcon>
    </div>
  );
};

export default Form;
