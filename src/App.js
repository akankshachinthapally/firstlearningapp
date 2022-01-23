import logo from "./logo.svg";
import shiva from "./shiva.jpg";
import "./ammulu/ammu.css";
import "./App.css";
import Card from "./card.js";
import State from "./State";
import lingam from "./lingam.jpg";
import Form from "./Form";
import { useEffect, useState } from "react";
import axios from "axios";
import Options from "./Option";
import Customroutes from "./Customroutes";
import { Link } from "react-router-dom";

// import { Cardnames } from "./card";
export const Cardnames = [
  {
    thumbnail: shiva,
    avatar: shiva,
    title: "My first new project",
    channelname: "Akanksha",
    views: "100K Views . 7months ago",
  },
  {
    thumbnail: lingam,
    avatar: lingam,
    title: "Second Project",
    channelname: "Akruhti",
    views: "14000k Views . 8monthsAgo",
  },
];
function App() {
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [d, setd] = useState();
  // useEffect(() => {
  //   fun();
  // }, []);
  // async function fun() {
  //   const data = await axios.get("https://jsonplaceholder.typicode.com/todos");

  //   setd(data.data);
  // }
  // console.log(d);
  // const names = (e) => {
  //   setName(e.target.value);
  // };

  // const emails = (e) => {
  //   setEmail(e.target.value);
  // };
  return (
    <div className="App">
      {/* <Options /> */}
      <Link to="">
        <p>Home</p>
      </Link>
      <Link to="explore">
        <p>Explore</p>
      </Link>
      <p>Susbcriptions</p>
      <p>Library</p>
      <Customroutes />
      {/* {d?.map((item) => {
        return (
          <div key={item.id}>
            <p>{item.userId}</p>
            <p>{item.id}</p>
            <p>{item.title}</p>
            <p>{item.completed}</p>
          </div>
        );
      })} */}
      {/* {Cardnames.map((item) => (
        <Card
          thumbnail={item.thumbnail}
          avatar={item.avatar}
          title={item.title}
          channelname={item.channelname}
          views={item.views}
        ></Card>
      ))} */}
      {/* <Form></Form> */}
      {/* <SideBarItem source={shiva} title="Home"></SideBarItem>
      <SideBarItem source={shiva} title="Explore"></SideBarItem>
      <SideBarItem source={shiva} title="Subscribe"></SideBarItem>
      <SideBarItem source={shiva} title="More"></SideBarItem>
      <Card
        shivai={shiva}
        shivaj={shiva}
        first="My First Project"
        second="Akanksha"
        third="100K Views . 7months ago"
      ></Card> */}
      {/* <input onChange={names} type="text" placeholder="Name" value={name} />
      <input onChange={emails} type="text" placeholder="Email" value={email} /> */}
    </div>
  );
}

function SideBarItem(props) {
  console.log(props);
  return (
    <a
      href="https://google.com"
      style={{ textDecoration: "none" }}
      className="home2"
    >
      <img src={props.source} class="home" alt="" width="30" height="30" />
      <p>{props.title}</p>
    </a>
  );
}

export default App;
