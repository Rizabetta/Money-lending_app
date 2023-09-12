import React, { useState } from "react";
import "./PinCode.scss";

function PinCode() {
  const [pin, setPin] = useState<string[]>(["", "", "", ""]);
  const [isActive, setisActive] = useState([false, false, false, false]);
  const [isValid, setisValid] = useState([true]);

  const handleKeyUp = (
    e: any,
    index: number
  ) => {
    const { value } = e.currentTarget;
    const newPin = [...pin];

    newPin[index] = value ?? "";
    console.log(value);
    
    setPin(newPin);
    if (index < 3) {
      setisActive((isActive) => ({ ...isActive, [index + 1]: true }));
      const nextInput = document.getElementById(`pin${index + 1}`);
      console.log(value);
      
      if (value) {nextInput?.focus()};
    } else {
      pin[index] = e.currentTarget.value;
      console.log(pin);
    }
  };

  const handleBefore = (e: any) => {
    console.log(!(/^[0-9]$/.test(e.data) || e.data === ""), " e.data ");
    console.log(e.data === "", " e.data ");
    if (!(/^[0-9]$/.test(e.data) || !e.data)) {
      e.preventDefault();
    } else {
      console.log(e.data);
    }
  };

  return (
    <div className="pincode">
      <h3>Please enter confirmation code</h3>
      <div className="pincode__container">
        {pin.map((element, index) => (
          <div className="pincode__item" key={index}>
            {isActive[index] ? (
              <input
                id={`pin${index}`}
                type="number"
                required
                autoFocus
                onBlur={(e) =>
                  e.target.value === "" &&
                  setisActive((isActive) => ({ ...isActive, [index]: false }))
                }
                onChange={(e) => handleKeyUp(e, index)}
                onBeforeInput={handleBefore}
              />
            ) : (
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                onClick={() =>
                  setisActive((isActive) => ({ ...isActive, [index]: true }))
                }
              >
                <circle
                  cx="10"
                  cy="10"
                  r="9.25"
                  stroke="#808080"
                  strokeWidth="1.5"
                />
              </svg>
            )}
          </div>
        ))}
      </div>
      {!isValid && <p>Invalid confirmation code</p>}
    </div>
  );
}

export { PinCode };
