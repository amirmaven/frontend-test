import { useContext, useState } from "react";
import { OfficeContext } from "../context/office";
import Form from "./Form";

function Add({ setAddInput }: { setAddInput: (value: boolean) => void }) {
  return (
    <div className="w-[318px] bg-white shadow-lg text-Branddark mt-16 p-[24px] rounded-lg">
      <div className="flex justify-between">
        <span className="font-bold">New Location</span>
        <button onClick={() => setAddInput(false)}>
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M1 13L13 1L1 13ZM1 1L13 13L1 1Z" fill="#989EA7" />
            <path
              d="M1 1L13 13M1 13L13 1L1 13Z"
              stroke="#989EA7"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      <Form closeForm={setAddInput} />
    </div>
  );
}

export default Add;
