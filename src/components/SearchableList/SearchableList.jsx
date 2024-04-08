export default function SearchableList({ items }) {
  return (
    <div className="searchable-list">
      <input type="seach" placeholder="Search" />
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item.toString()}</li>
        ))}
      </ul>
    </div>
  );
}
