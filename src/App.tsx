import { useContext, useState } from "react";
import AddNewLocation from "./components/AddNewLocation";
import Card from "./components/Card";
import Notification from "./components/Notification";
import { Data } from "./types";
import { OfficeContext, OfficeContextProvider } from "./context/office";

function App() {
  const { showNotif, datas } = useContext(OfficeContext);

  return (
    <div className="flex flex-col justify-start items-center pt-32 bg-slate-100 min-h-screen">
      {showNotif && <Notification />}

      <h1 className="text-6xl text-Brandblue">Offices</h1>

      <AddNewLocation />

      <div className="mt-8 mb-36 flex flex-col">
        {datas.map((data: Data) => (
          <Card key={data.id} data={data} />
        ))}
      </div>
    </div>
  );
}

export default App;
