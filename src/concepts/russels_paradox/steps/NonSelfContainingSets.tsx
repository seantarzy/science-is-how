export default function NonSelfContainingSets() {
  return (
    <div className="w-full">
      <h1>Non-Self-Containing Sets</h1>
      <p>
        A set is non-self-containing if and only if it does not contain itself
        as an element.
      </p>
      <p>
        For example, the set <code>{`{1, 2, 3}`}</code> is non-self-containing
        because it does not contain itself as an element.
      </p>
      <p>
        The set <code>{`{1, 2, 3, {1, 2, 3}}`}</code> is non-self-containing
        because it contains itself as an element.
      </p>
    </div>
  );
}
