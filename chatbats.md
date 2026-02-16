

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

  const allItems = groups.flatMap((g) => g.items);

  const filteredGroups = groups
    .map((g) => ({
      ...g,
      items: g.items.filter((i) =>
        i.name.toLowerCase().includes(search.toLowerCase()),
      ),
    }))
    .filter((g) => g.items.length > 0);
  const selectAll = () => {
    setSelected(allItems);
    setSearch("");
  };
  const clearAll = () => {
    setSelected([]);
    setSearch("");
  };

اینو دارم
بدون اینکه تغییرش بدی یا از کتابخونه جدید استفاده کنی 
طبق تسک زیر اون را توسعه بده
فقط کدهای پایه . بدون هیچ گونه مورد جدید یا اضافی
ولی کامل جواب بده
یک کامپوننت Select Dropdown پیشرفته بسازید:
Headless UI (Listbox) از استفاده•
• استایل با Tailwind
• جستجو در آیتم ها
• انتخاب چندتایی
• گروه بندی آیتمها
• انتخاب همه/هیچ
• نمایش تعداد انتخاب ها
• مجازی سازی برای آیتمهای زیاد


