import { createContext, useState } from "react";

const OfficeContext = createContext();

const OfficeContextProvider = ({ children }) => {
  const [datas, setDatas] = useState([
    {
      id: 1,
      title: "Go-Jek",
      address: "5260 Donec St.",
      name: "Hellena John",
      job: "Software Tester",
      email: "georgia.young@gmail.com",
      phone: "(808) 555-0111",
    },
    {
      id: 2,
      title: "Tokopedia",
      address: "7526 Erat. Rd.",
      name: "Tony Stark",
      job: "Iron Man",
      email: "tonystark@gmail.com",
      phone: "(808) 777-7777",
    },
    {
      id: 3,
      title: "Bukalapak",
      address: "P.O. Box 959, 8061 Tellus Av.",
      name: "Peter Parker",
      job: "Spider-Man",
      email: "spiderman@gmail.com",
      phone: "(999) 555-0111",
    },
    {
      id: 4,
      title: "Go-Car",
      address: "8467 Elementum Av.",
      name: "Bruce Banner",
      job: "Hulk",
      email: "brucebanner@gmail.com",
      phone: "(222) 123-0111",
    },
  ]);

  const [message, setMessage] = useState("");
  const [showNotif, setShowNotif] = useState(false);

  return (
    <OfficeContext.Provider
      value={{ datas, setDatas, message, setMessage, showNotif, setShowNotif }}
    >
      {children}
    </OfficeContext.Provider>
  );
};

export { OfficeContext, OfficeContextProvider };
