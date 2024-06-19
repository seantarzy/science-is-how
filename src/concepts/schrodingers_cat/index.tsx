import CatInBox from "../../assets/cat-in-box.png";
export function SchrodingersCat() {
  return (
    <div className="w-full">
      <h1 className="font-bold">What is it?</h1>
      <br />
      <br />
      <p>
        Schrödinger's Cat is a thought experiment that was devised by Erwin
        Schrödinger in 1935. The experiment illustrates a paradox in quantum
        mechanics. The idea is that a cat is placed in a sealed box with a
        radioactive atom, a Geiger counter, a hammer, and a vial of poison. If
        the Geiger counter detects radiation, the hammer will break the vial of
        poison, killing the cat. If the Geiger counter does not detect
        radiation, the cat will remain alive. According to quantum mechanics,
        the cat is in a superposition of being both alive and dead until the box
        is opened and the cat is observed.
      </p>

      <br />

      <br />
      <img src={CatInBox} alt="Cat in a Box" className="w-1/5 mx-auto" />
    </div>
  );
}
