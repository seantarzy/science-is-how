import Cat1 from "../../../../assets/kitty-1.png";
import Cat2 from "../../../../assets/kitty-2.png";
import Cat3 from "../../../../assets/kitty-3.png";
import Dog1 from "../../../../assets/dog-1.png";
import Dog2 from "../../../../assets/dog-2.png";
import Dog3 from "../../../../assets/dog-3.png";

type PetSet = "Cat" | "Dog" | "Both" | "Neither";
export default function PetSet({ set }: { set: PetSet }) {
  return (
    <div className="flex justify-center items-center">
      <div className="flex flex-col items-center">
        <div className="flex gap-2 items-center">
          {set === "Cat" && (
            <>
              <img src={Cat1} alt="Cat 1" className="w-32 h-32" />
              <img src={Cat2} alt="Cat 2" className="w-32 h-32" />
              <img src={Cat3} alt="Cat 3" className="w-32 h-32" />
            </>
          )}
          {set === "Dog" && (
            <>
              <img src={Dog1} alt="Dog 1" className="w-32 h-32" />
              <img src={Dog2} alt="Dog 2" className="w-32 h-32" />
              <img src={Dog3} alt="Dog 3" className="w-32 h-32" />
            </>
          )}
          {set === "Both" && (
            <>
              <img src={Cat1} alt="Cat 1" className="w-32 h-32" />
              <img src={Cat2} alt="Cat 2" className="w-32 h-32" />
              <img src={Cat3} alt="Cat 3" className="w-32 h-32" />
              <img src={Dog1} alt="Dog 1" className="w-32 h-32" />
              <img src={Dog2} alt="Dog 2" className="w-32 h-32" />
              <img src={Dog3} alt="Dog 3" className="w-32 h-32" />
            </>
          )}
        </div>
      </div>
    </div>
  );
}
