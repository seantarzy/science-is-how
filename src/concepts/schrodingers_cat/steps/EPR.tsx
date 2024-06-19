import SpookyAction from "../../../assets/spooky-action.png";
export default function EPR() {
  return (
    <div className="w-full">
      <h1 className="font-bold">EPR Paradox</h1>
      <br />
      <br />
      <p>
        In 1935, Albert Einstein, Boris Podolsky, and Nathan Rosen wrote a paper
        challenging Quantum Mechanics-saying the whole field is an incomplete
        theory.
      </p>
      <p>
        The paper cites the EPR paradox as an example of the incompleteness.
        This paradox is a thought experiment that involves two entangled
        particles. Basically two particles that once interacted, even if they
        are separated by a large distance, they will still be connected. This
        violated core principles of classical physics and was a big problem for
        Einstein. He was so afraid of this idea that he called it "spooky action
        at a distance".
      </p>
      <p>
        A key aspect of quantum entanglement is the concept of superposition,
        where a particle can exist in multiple states simultaneously. For
        example, if we have particles A and B, and we know that particle A is
        spinning clockwise, then we can infer that particle B is spinning
        counterclockwise. However, if the state of particle A is unknown, then
        particle B is in a superposition, spinning both clockwise and
        counterclockwise at the same time. This idea of superposition, and the
        broader implications of the EPR paradox, intrigued Erwin Schrödinger,
        prompting a correspondence with Einstein to further explore these
        concepts.
      </p>
      <br />
      <br />
      <img src={SpookyAction} alt="Spooky Action" className="w-1/4 mx-auto" />
    </div>
  );
}
