import { useState } from "react";
import Deposit from "./Deposit";
import Withdraw from "./Withdraw";

import Card from "./Card";

const button = [
  { id: 1, content: "desposit" },
  { id: 2, content: "withdraw" },
  { id: 3, content: "loan" },
];

const AccountBody = () => {
  const [showDeposit, setShowDeposit] = useState(false);
  const [showWithdraw, setShowWithdraw] = useState(false);

  function handleClickChild(id) {
    setShowDeposit((show) => (!id === show ? id : null));
    setShowWithdraw((show) => !show);
  }
  return (
    <>
      <section className="mx-auto mt-32 flex w-10/12 justify-between">
        {button.map((msg) => (
          <div key={msg.id} onClick={() => handleClickChild(msg.id)}>
            <Card content={msg.content} />
          </div>
        ))}
      </section>
      {showDeposit ? <Deposit /> : ""}
      {showWithdraw ? <Deposit /> : ""}
    </>
  );
};

export default AccountBody;
