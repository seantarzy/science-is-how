import Qbit from "../../../assets/qbit.png";
export default function Qbits() {
  return (
    <div className="w-full">
      <h1 className="font-bold">Qubits</h1>
      <br />
      <br />
      <p>
        Schrodinger's cat wasn't just a fun thought experiment. It was a way to
        explain the concept of superposition, which is a fundamental principle
        of quantum mechanics. This principle is also what makes
        <span className="font-bold"> quantum computing </span> possible.
      </p>
      <br />
      <p>
        A qubit has some similarities to a classical bit, but is overall very
        different. Like a bit, a qubit can have two possible values—normally a 0
        or a 1. The difference is that whereas a bit must be either 0 or 1, a
        qubit can be 0, 1, or a superposition of both.
      </p>
      <br />
      <br />
      <p>
        This property of superposition is what gives quantum computers their
        inherent advantage over classical computers. A classical computer has to
        perform calculations one after the other, but a quantum computer can
        perform many calculations at the same time.
      </p>
      <br />
      <p>The possibilites are endless.</p>

      <br />
      <br />
      <img src={Qbit} alt="Qbit" className="w-[10%] mx-auto" />
    </div>
  );
}
