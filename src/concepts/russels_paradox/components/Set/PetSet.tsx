import Cat1 from "../../../../assets/kitty-1.png";
import Cat2 from "../../../../assets/kitty-2.png";
import Cat3 from "../../../../assets/kitty-3.png";
import Dog1 from "../../../../assets/dog-1.png";
import Dog2 from "../../../../assets/dog-2.png";
import Dog3 from "../../../../assets/dog-3.png";

type PetSet = "Cat" | "Dog" | "Both" | "Neither";

function PetImg({ src, alt }: { src: string, alt?: string}) {
  return <img src={src} alt={alt} className="md:w-32 md:h-28 w-16 h-16" />;
}

export default function PetSet({ set }: { set: PetSet }) {
  return (
    <div className="flex justify-center items-center">
      <div className="flex flex-col items-center">
        <div className="flex gap-2 items-center">
          {set === "Cat" && (
            <>
                <PetImg src={Cat1} alt="Cat 1" />
                <PetImg src={Cat2} alt="Cat 2" />
                <PetImg src={Cat3} alt="Cat 3" />
            </>
          )}
          {set === "Dog" && (
            <>
                <PetImg src={Dog1} alt="Dog 1" />
                <PetImg src={Dog2} alt="Dog 2" />
                <PetImg src={Dog3} alt="Dog 3" />
            </>
          )}
          {set === "Both" && (
            <>
                <PetImg src={Cat1} alt="Cat 1" />
                <PetImg src={Cat2} alt="Cat 2" />
                <PetImg src={Cat3} alt="Cat 3" />
                <PetImg src={Dog1} alt="Dog 1" />
                <PetImg src={Dog2} alt="Dog 2" />
                <PetImg src={Dog3} alt="Dog 3" />
            </>
          )}
        </div>
      </div>
    </div>
  );
}
