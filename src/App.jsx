import { useState } from "react";

const App = () => {
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState([]);

  const groups = [
    {
      title: "girls",
      items: [
        { id: 1, name: "Elham" },
        { id: 2, name: "Sara" },
        { id: 3, name: "Zahra" },
      ],
    },
    {
      title: "boys",
      items: [
        { id: 4, name: "Ehsan" },
        { id: 5, name: "Ali" },
        { id: 6, name: "Amir" },
      ],
    },
  ];

  const allItems = groups.flatMap((group) => group.items);
  console.log("allItems", allItems);
  const filterdeGrups = groups
    .map((group) => ({
      ...group,
      items: group.items.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase()),
      ),
    }))
    .filter((g) => g.items.length > 0);
  console.log("filterdeGrups", filterdeGrups);
  console.log("selected", selected);
  return (
    <div className="flex flex-col items-center justify-center gap-5 m-10">
      <input
        className=" border-2 border-red-500"
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className=" ">
        <button
          className="bg-rose-500 text-white w-25 h-10 p-2 rounded-lg m-2"
          onClick={() => setSelected(allItems)}
        >
          All
        </button>
        <button
          className="bg-rose-500 text-white w-25 h-10 p-2 rounded-lg m-2"
          onClick={() => setSelected([])}
        >
          None
        </button>
      </div>
      <select>
        <option value="all">All</option>
        <option value="apples">Apples</option>
        <option value="oranges">Oranges</option>
        <option value="onion">Onion</option>
      </select>
    </div>
  );
};

export default App;
