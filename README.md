- Advanced Select Dropdown

Features:

- Multi-select
- Searchable
- Grouped items
- Select All / Clear All buttons
- Show selected count
- Simple virtualization with scroll

Usage:
<Listbox value={selected} onChange={setSelected} multiple>
<Listbox.Button>{selected.length === 0 ? "Select..." : `${selected.length} selected`}</Listbox.Button>
<Listbox.Options className="max-h-64 overflow-auto">
{/_ group headers and items here _/}
</Listbox.Options>
</Listbox>

Note:
✔️Works with Tailwind & Headless UI.
