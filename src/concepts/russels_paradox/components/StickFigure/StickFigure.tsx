import "./StickFigure.css";



function SpeakBubble({speakBubble}: {speakBubble: string}) {

  return <div>
    <p
    className="bubble speech"
    >
      {speakBubble}
    </p>
    </div>
}

export function StickFigure({
  beard = false,
  razer = false,
  speakBubble,
  size = .8, 
}: {
  beard: boolean;
  razer?: boolean;
  speakBubble?: string;
  size?: number;
}) {
  const scaleStyle = { transform: `scale(${size})`, width: 170 * size};

  return (
    <div className={`flex align-bottom `}>
      <div className="wrapper top-36" style={scaleStyle}>
        <div className="head">

        {beard && <div className="beard"></div>}
        </div>

        <div className="torso"></div>
        <div className="leftarm"></div>
        <div className="rightarm">
          {razer && <div className="razer"></div>}
        </div>
        <div className="leftleg"></div>
        <div className="leftfoot"></div>
        <div className="rightleg"></div>
        <div className="rightfoot"></div>
      </div>
      <div className="" style={scaleStyle}>
        {speakBubble && <SpeakBubble speakBubble={speakBubble} />}
        </div>
    </div>
  );
  }
