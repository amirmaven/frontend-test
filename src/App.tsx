import { useState } from "react";
import AddNewLocation from "./components/AddNewLocation";
import Card from "./components/Card";
import { Data } from "./types";

function App() {
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

  return (
    <div className="flex flex-col justify-start items-center pt-16 bg-slate-100 min-h-screen">
      <h1 className="text-6xl text-Brandblue">Offices</h1>

      <AddNewLocation datas={datas} setDatas={setDatas} />

      <div className="mt-8 mb-36 flex flex-col">
        {/* card */}
        {datas.map((data: Data) => (
          <Card key={data.id} data={data} datas={datas} setDatas={setDatas} />
        ))}
      </div>
    </div>
  );
}

export default App;
