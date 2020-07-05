import React, { useState } from "react";
import { fetchIp } from "../service/services";

const IpAddress = () => {
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

export default IpAddress;
