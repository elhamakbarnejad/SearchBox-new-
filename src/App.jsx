import { useState, useRef, useEffect } from "react";

const App = () => {
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState([]);
  const [open, setOpen] = useState(false);
  const listRef = useRef(null);

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

  const allItems = groups.flatMap((g) => g.items);

  const filteredGroups = groups
    .map((g) => ({
      ...g,
      items: g.items.filter((i) =>
        i.name.toLowerCase().includes(search.toLowerCase()),
      ),
    }))
    .filter((g) => g.items.length > 0);

  const toggleItem = (item) => {
    if (selected.find((s) => s.id === item.id)) {
      setSelected(selected.filter((s) => s.id !== item.id));
    } else {
      setSelected([...selected, item]);
    }
  };

  const selectAll = () => {
    setSelected(allItems);
    setSearch("");
  };
  const clearAll = () => {
    setSelected([]);
    setSearch("");
  };

  const virtualizedGroups = filteredGroups.map((g) => ({
    ...g,
    items: g.items.slice(0, 50),
  }));

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (listRef.current && !listRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="w-80 mx-auto mt-20 relative">
      <div className="mb-2 flex justify-between items-center">
        <button
          onClick={selectAll}
          className="text-sm text-blue-600 hover:underline"
        >
          Select All
        </button>
        <button
          onClick={clearAll}
          className="text-sm text-red-600 hover:underline"
        >
          Clear All
        </button>
      </div>

      <div
        className="border rounded shadow p-2 cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        {selected.length > 0
          ? `${selected.length} selected`
          : "Select items..."}
      </div>

      {open && (
        <div
          ref={listRef}
          className="absolute z-10 mt-1 w-full bg-white border rounded shadow max-h-64 overflow-auto"
        >
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search..."
            className="w-full p-2 border-b focus:outline-none"
          />
          {virtualizedGroups.map((group) => (
            <div key={group.title}>
              <div className="px-2 py-1 text-gray-500 font-semibold bg-gray-100">
                {group.title}
              </div>
              {group.items.map((item) => (
                <div
                  key={item.id}
                  className="px-2 py-1 hover:bg-blue-100 flex items-center"
                  onClick={() => toggleItem(item)}
                >
                  <input
                    type="checkbox"
                    checked={!!selected.find((s) => s.id === item.id)}
                    readOnly
                    className="mr-2"
                  />
                  {item.name}
                </div>
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default App;
