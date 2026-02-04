import { useState } from "react";
import Btn from "./Btn";
import Text from "./Text";

function Final() {
  const [show, setShow] = useState(false);

  function toggleText() {
    setShow(prev => !prev);
  }

  return (
    <div>
      <Text show={show} />
      <Btn toggleText={toggleText} show={show} />
    </div>
  );
}

export default Final;
