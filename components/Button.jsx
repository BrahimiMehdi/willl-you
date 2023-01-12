import { useState } from "react";

const Button = ({setsuccess}) => {
  const [pos, setpos] = useState({ top: " top-8", left: "left-[35%] " });
  const [count, setCount] = useState(0);
  const randomPos = [
    { top: " top-20", left: "left-20 " },
    { top: " top-20", left: "left-[80%] " },
    { top: " top-20", left: "left-[20%] " },
    { top: " top-40", left: "left-60 " },
    { top: " top-40", left: "left-[60%] " },
    { top: " top-60", left: "left-40 " },
    { top: " top-60", left: "left-[70%] " },
    { top: " top-8", left: "left-4 " },
    { top: " top-72", left: "left-12 " },
  ];
  const changePos = () => {
    if (count < randomPos.length -1) {
      const newPos = randomPos[count];
      setCount(count + 1);
      setpos(newPos);
    } else {
      const newPos = randomPos[count];
      setCount(0);
      setsuccess("rude")
      setpos(newPos);
    }
  };
  return (
    <button onClick={() => changePos()} className={`absolute flex justify-center group items-center transition-all duration-200 ease-out ${pos.top} ${pos.left}  bg-red-400`}>
      <span className="relative left-4  group-hover:-translate-x-8 transition-transform duration-300 ease-out">
        no
      </span>
      <span className="opacity-0 translate-x-8 transition-all duration-300 grid place-items-center group-hover:translate-x-0 group-hover:opacity-100">
        <img className="w-8" src="/angry-face.png" alt="" />
      </span>
    </button>
  );
};

export default Button;
