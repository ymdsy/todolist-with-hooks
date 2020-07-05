import React, { useState, useEffect } from "react";
import Todo from "./Todo/Todo";
import { fetchIp } from "./service/services";

const App = () => {
  const [ipAddress, setipAddress] = useState("");
  const [isOpenAddress, setIsOpenAddress] = useState(false);

  const handleClick = () => {
    setIsOpenAddress(true);
    if (ipAddress !== "") {
      return;
    }
    fetchIp().then((ipAddress) => {
      setipAddress(ipAddress);
    });
  };

  const handleRemoveAddressClick = () => {
    setIsOpenAddress(false);
  };

  return (
    <>
      <Todo />

      {!isOpenAddress ? (
        <button onClick={handleClick}>IPアドレス表示</button>
      ) : (
        <>
          <button onClick={handleRemoveAddressClick}>アドレス非表示</button>
          <div>IPアドレス：{ipAddress}</div>
        </>
      )}
    </>
  );
};

export default App;
