import { useState } from "react";

function App() {
  const [val, setVal] = useState({ name: "Ankit", isBanned: false });

  // const setClick = () => {
  //   setBanned(!banned);
  // };

  return (
    <div>
      <div className="p-4 border">
        <h1>Name: {val.name}</h1>
        <h1>isBanned: {val.isBanned.toString()}</h1>
        <button
          onClick={() => setVal({ ...val, isBanned: !val.isBanned })}
          className={`px-3 py-1 rounded ${val.isBanned ? "bg-sky-500" : "bg-red-500"} text-sm mt-2 text-white`}
        >
          {val.isBanned ? "Unban" : "Ban"}
        </button>
      </div>
    </div>
  );
}

export default App;
