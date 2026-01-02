import { useEffect, useState } from "react";
import "./SwitchButton.css";

const SwitchButton = () => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (active) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [active]);

  return (
    <div
      className={`switchButton ${active ? "active" : ""}`}
      onClick={() => setActive(!active)}
    >
      <div className="switchCircle" />
    </div>
  );
};

export default SwitchButton;