import { useContext, useEffect, useState } from "react";
import { OfficeContext } from "../context/office";
import { Data } from "../types";

function Form({
  closeForm,
  isEdit = false,
  data = null,
  title,
}: {
  closeForm: (value: boolean) => void;
  isEdit: boolean;
  data: Data;
  title: string;
}) {
  const { datas, setDatas, setMessage, setShowNotif } =
    useContext(OfficeContext);

  const [input, setInput] = useState({
    title: "",
    address: "",
    name: "",
    job: "",
    email: "",
    phone: "",
  });

  useEffect(() => {
    if (isEdit) {
      setInput({
        title: data.title,
        address: data.address,
        name: data.name,
        job: data.job,
        email: data.email,
        phone: data.phone,
      });
    }
  }, [data, isEdit]);

  const [validated, setValidated] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput({
      ...input,
      [name]: value,
    });
  };

  const handleSave = (e) => {
    e.preventDefault();

    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.stopPropagation();
      setValidated(true);
    } else {
      let newDatas = [];

      if (isEdit) {
        input.id = data.id;
        newDatas = datas.filter((el) => el.id !== data.id);
      } else {
        input.id = datas.length + 1;
        newDatas = datas.filter((el) => el.id !== input.id);
      }

      setDatas([...newDatas, input].sort((a, b) => a.id - b.id));
      setMessage("THE LOCATION HAS BEEN UPDATED");
      setShowNotif(true);
      closeForm(false);
      setInput({
        title: "",
        address: "",
        name: "",
        job: "",
        email: "",
        phone: "",
      });
    }
  };

  return (
    <div
      className={`w-[318px] bg-white shadow-lg text-Branddark ${
        isEdit ? null : "mt-16"
      } p-[24px] rounded-lg`}
    >
      <div className="flex justify-between">
        <span className="font-bold">{title}</span>
        <button onClick={() => closeForm(false)}>
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

      <form
        className="mt-8 flex flex-col gap-6"
        onSubmit={handleSave}
        noValidate
        validated={validated.toString()}
      >
        <div>
          <label>
            Title <span className="text-Brandgray">*</span>
          </label>
          <input
            required
            onChange={handleChange}
            value={input.title || ""}
            type="text"
            name="title"
            className={`border ${
              validated && !input.title ? "border-red-600" : "border-Branddark"
            } rounded-md mt-2 w-full p-2 focus:outline-Brandblue`}
          />
          {validated && !input.title && (
            <span className="text-red-600 text-xs">Title is required</span>
          )}
        </div>

        <div>
          <label>
            Enter the address <span className="text-Brandgray">*</span>
          </label>
          <input
            required
            onChange={handleChange}
            value={input.address || ""}
            type="text"
            name="address"
            className={`border ${
              validated && !input.address
                ? "border-red-600"
                : "border-Branddark"
            } rounded-md mt-2 w-full p-2 focus:outline-Brandblue`}
          />
          {validated && !input.address && (
            <span className="text-red-600 text-xs">Address is required</span>
          )}
        </div>

        <div>
          <span className="text-xs text-Brandblue">CONTACT INFORMATION</span>
          <hr className="h-px bg-gray-200 border-0 dark:bg-gray-700 w-full mt-4" />
        </div>

        <div>
          <label>
            Full name <span className="text-Brandgray">*</span>
          </label>
          <input
            required
            onChange={handleChange}
            value={input.name || ""}
            type="text"
            name="name"
            className={`border ${
              validated && !input.name ? "border-red-600" : "border-Branddark"
            } rounded-md mt-2 w-full p-2 focus:outline-Brandblue`}
          />
          {validated && !input.name && (
            <span className="text-red-600 text-xs">Full name is required</span>
          )}
        </div>

        <div>
          <label>
            Job Position <span className="text-Brandgray">*</span>
          </label>
          <input
            required
            onChange={handleChange}
            value={input.job || ""}
            type="text"
            name="job"
            className={`border ${
              validated && !input.job ? "border-red-600" : "border-Branddark"
            } rounded-md mt-2 w-full p-2 focus:outline-Brandblue`}
          />
          {validated && !input.job && (
            <span className="text-red-600 text-xs">
              Job Position is required
            </span>
          )}
        </div>

        <div>
          <label>
            Email address <span className="text-Brandgray">*</span>
          </label>
          <input
            required
            onChange={handleChange}
            value={input.email || ""}
            type="text"
            name="email"
            className={`border ${
              validated && !input.email ? "border-red-600" : "border-Branddark"
            } rounded-md mt-2 w-full p-2 focus:outline-Brandblue`}
          />
          {validated && !input.email && (
            <span className="text-red-600 text-xs">
              Email address is required
            </span>
          )}
        </div>

        <div>
          <label>
            Phone <span className="text-Brandgray">*</span>
          </label>
          <input
            required
            onChange={handleChange}
            value={input.phone || ""}
            type="text"
            name="phone"
            className={`border ${
              validated && !input.phone ? "border-red-600" : "border-Branddark"
            } rounded-md mt-2 w-full p-2 focus:outline-Brandblue`}
          />
          {validated && !input.phone && (
            <span className="text-red-600 text-xs">Phone is required</span>
          )}
        </div>

        <div>
          <button
            className="bg-Brandblue py-[8px] px-[16px] text-white rounded-md"
            type="submit"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;
