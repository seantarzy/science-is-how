import Bertrand from '../../assets/charles-bertrand.png'
export function RusselsParadox() {
  return (
    <div className="w-full">
      <h1 className="font-bold">What is it?</h1>
      <br />
      <br />
      <p>
        Russel's Paradox is a famous paradox that arises within set theory. It
        was discovered by Bertrand Russel in 1901. The paradox arises when we
        consider the set of all sets that do not contain themselves. The
        question is, does this set contain itself? First, however, we need to
        understand some basic concepts in set theory.
      </p>
      <br />
      <br />
      <br />
      <br />
      <img
        src={Bertrand}
        alt="Bertrand Russel"
        className="w-1/5 mx-auto rounded-full"
      />
    </div>
  );
}
