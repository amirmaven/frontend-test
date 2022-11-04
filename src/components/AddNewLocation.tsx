import { useState } from "react";
import Add from "./Add";

export default function AddNewLocation() {
  const [addInput, setAddInput] = useState(false);

  return (
    <>
      {addInput ? (
        <Add setAddInput={setAddInput} />
      ) : (
        <button
          className="w-[317px] h-[56px] bg-Brandblue flex justify-between items-center text-white py-[16px] px-[24px] rounded-lg mt-16 cursor-pointer hover:bg-Brandblue/90 shadow-xl"
          onClick={() => setAddInput(true)}
        >
          <span>Add New Location</span>
          <span>
            <svg
              width="17"
              height="16"
              viewBox="0 0 17 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line x1="9" y1="5.37286e-08" x2="9" y2="16" stroke="white" />
              <line x1="16.5" y1="8.5" x2="0.5" y2="8.5" stroke="white" />
            </svg>
          </span>
        </button>
      )}
    </>
  );
}
