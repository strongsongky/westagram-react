import logo from "./logo.svg";
import { useEffect, useState } from "react";
import "./App.css";

function Button({ handleClick, name, style }) {
  return (
    <button style={style} onClick={handleClick}>
      {name}
    </button>
  );
}

function NewButton({ count, setCount }) {
  // const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount((count) => count + 1);
  };
  console.log("isRender?");
  return <button onClick={handleClick}>{count}</button>;
}

function CountBox({ count }) {
  return <div>{count}</div>;
}

function CountWrapper() {
  const [count, setCount] = useState(0);
  const [isLogin, setIsLogin] = useState(false);
  useEffect(() => {
    if (count !== 10) return;
    console.log("I'm work!!!");

    alert("It's ten!!!");
  }, [count]);

  useEffect(() => {
    if (!isLogin) return;
    alert("로그인 되셨습니다! ");
  }, [isLogin]);

  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const items = arr.map((item) => <CountBox key={item} count={count + item} />);
  console.log("찍힐까??");
  return (
    <>
      <div>{count}</div>
      <NewButton count={count} setCount={setCount} />
      {items}
    </>
  );
}

function App() {
  const styleA = {
    backgroundColor: "Orange",
    color: "red",
  };

  const { backgroundColor, color } = styleA;

  const handleClickA = () => {
    console.log("testA");
  };
  console.log("is?");
  return (
    <div className="App">
      <header className="App-header">
        {/* <Button handleClick={handleClickA} name={4} style={styleA} />

        <Button
          handleClick={() => console.log("testB")}
          name="testB 버튼"
          style={styleA}
        /> */}
        <CountWrapper />
      </header>
    </div>
  );
}

export default App;
