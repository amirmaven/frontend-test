import { useContext, useState } from "react";
import { OfficeContext } from "../context/office";
import { Data } from "../types";
import Form from "./Form";

export default function Card({ data }: { data: Data }) {
  const { datas, setDatas } = useContext(OfficeContext);

  const [click, setClick] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

  const handleDelete = (id: number) => {
    const newDatas = datas.filter((data) => data.id !== id);
    setDatas([...newDatas]);
  };

  return (
    <div className="mb-8">
      {isEdit ? (
        <Form
          closeForm={setIsEdit}
          data={data}
          isEdit={true}
          title="Edit Location"
        />
      ) : (
        <>
          <button onClick={() => setClick((prev) => !prev)}>
            <div
              className={`w-[317px] h-[108px] flex justify-between items-center ${
                click ? "bg-BrandDarkgray rounded-t-lg" : "bg-white rounded-lg"
              } p-[24px]  shadow-lg cursor-pointer`}
            >
              <div className="flex flex-col gap-y-2 items-start">
                <span
                  className={`${
                    click ? "text-white" : "text-Branddark"
                  } font-bold text-2xl`}
                >
                  {data.title}
                </span>
                <span className={`${click ? "text-white" : "text-Brandgray"}`}>
                  {data.address}
                </span>
              </div>
              {click ? (
                <svg
                  width="18"
                  height="10"
                  viewBox="0 0 18 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17 9L9 1L1 9"
                    stroke="white"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              ) : (
                <svg
                  width="18"
                  height="10"
                  viewBox="0 0 18 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 1L9 9L17 1"
                    stroke="#33A6BA"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </div>
          </button>

          {click && (
            <div className="bg-white flex flex-col items-start gap-y-2 p-[24px] text-Branddark rounded-b-lg shadow-md">
              <span className="text-xl font-bold ">{data.name}</span>
              <span>{data.job}</span>
              <span className="text-Brandblue">{data.email}</span>
              <span>{data.phone}</span>
              <hr className="h-px bg-gray-200 border-0 dark:bg-gray-700 w-full my-2" />
              <div className="flex justify-between w-full">
                <button
                  className="flex items-center gap-3"
                  onClick={() => setIsEdit(true)}
                >
                  <svg
                    width="20"
                    height="21"
                    viewBox="0 0 20 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.232 3.23199L16.768 6.76799M14.732 1.73199C15.2009 1.26309 15.8369 0.999664 16.5 0.999664C17.1631 0.999664 17.7991 1.26309 18.268 1.73199C18.7369 2.2009 19.0003 2.83687 19.0003 3.49999C19.0003 4.16312 18.7369 4.79909 18.268 5.26799L4.5 19.036H1V15.464L14.732 1.73199Z"
                      stroke="#989EA7"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>

                  <span className="text-xs">Edit</span>
                </button>
                <button
                  className="flex items-center gap-3"
                  onClick={() => handleDelete(data.id)}
                >
                  <svg
                    width="18"
                    height="20"
                    viewBox="0 0 18 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7 9V15M11 9V15M1 5H17M16 5L15.133 17.142C15.0971 17.6466 14.8713 18.1188 14.5011 18.4636C14.1309 18.8083 13.6439 19 13.138 19H4.862C4.35614 19 3.86907 18.8083 3.49889 18.4636C3.1287 18.1188 2.90292 17.6466 2.867 17.142L2 5H16ZM12 5V2C12 1.73478 11.8946 1.48043 11.7071 1.29289C11.5196 1.10536 11.2652 1 11 1H7C6.73478 1 6.48043 1.10536 6.29289 1.29289C6.10536 1.48043 6 1.73478 6 2V5H12Z"
                      stroke="#FF7B92"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="text-xs text-Brandred">Delete</span>
                </button>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}
