export default function NonSelfContainingSets() {
  return (
    <div className="w-full">
      <h1
      className="font-bold"
      >Non-Self-Containing Sets</h1>
      <br />
      <br />
      <p>
        A set is non-self-containing if and only if it does not contain itself as an element.
      </p>
      <p>
        For example, the set <code>{`{1, 2, 3}`}</code> is non-self-containing because it does not contain itself as an element.
      </p>
      <p>
        Contrary to self-containing sets, any standard mathematical set like <code>{`{1, 2, 3}`}</code> or <code>{`{a, b, c}`}</code> is non-self-containing because it does not include the set itself as one of its elements.
      </p>
    </div>
  );
}
