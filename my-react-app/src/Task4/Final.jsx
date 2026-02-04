import { useState } from "react";
import Input from "./Input";
import Display from "./Display";

function Final() {
  const [text, setText] = useState("");

  return (
    <div>
      <Input text={text} setText={setText} />
      <Display text={text} />
    </div>
  );
}

export default Final;
