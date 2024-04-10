export default function SelfContainingSets() {
  return (
    <div className="w-full">
      <h1>Self-Containing Sets</h1>
      <p>
        A set is self-containing if and only if it contains itself as an
        element.
      </p>
      <p>
        For example, the set <code>{`{1, 2, 3, {1, 2, 3}}`}</code> is
        self-containing because it contains itself as an element.
      </p>
      <p>
        The set <code>{`{1, 2, 3}`}</code> is not self-containing because it
        does not contain itself as an element.
      </p>
    </div>
  );
}
