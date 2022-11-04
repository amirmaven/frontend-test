import { useContext } from "react";
import { OfficeContext } from "../context/office";

export default function Notification() {
  const { message, setShowNotif } = useContext(OfficeContext);

  return (
    <div className="fixed bg-white w-full h-[80px] top-0 z-10 shadow">
      <div className=" absolute w-full h-full">
        <div className="h-[2px] w-full bg-Brandblue relative top-0"></div>

        <div className="flex items-center gap-4 h-full justify-center">
          <svg
            width="16"
            height="12"
            viewBox="0 0 16 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 7L5 11L15 1"
              stroke="#33A6BA"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="text-xs text-Branddark">{message}</span>

          <div className="absolute right-0 pr-8">
            <button onClick={() => setShowNotif(false)}>
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
        </div>
      </div>
    </div>
  );
}
