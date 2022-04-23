import React, { useState } from "react";
import { getAdsTxt } from "../../api/api";

export default function Home() {
  const [input, setInput] = useState("");

  const onClick = async () => {
    let { data } = await getAdsTxt(input);
    console.log(data);
  };

  const onChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <div>
      <input type="text" value={input} onChange={onChange} />
      <button onClick={onClick}>Click me</button>
    </div>
  );
}
