import { useContext, useEffect, useState } from "react";
import { OfficeContext } from "../context/office";
import { Data } from "../types";
import Form from "./Form";

function Edit({
  setIsEdit,
  data,
}: {
  setIsEdit: (value: boolean) => void;
  data: Data;
}) {
  return (
    <div className="w-[318px] bg-white shadow-lg text-Branddark p-[24px] rounded-lg">
      <div className="flex justify-between">
        <span className="font-bold">Edit Location</span>
        <button
          onClick={() => {
            setIsEdit(false);
          }}
        >
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

      <Form closeForm={setIsEdit} isEdit={true} data={data} />
    </div>
  );
}

export default Edit;
