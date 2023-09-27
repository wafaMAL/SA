import { useProgress } from "@react-three/drei";
import { usePlay } from "../contexts/Play";

export const Overlay = () => {
  const { progress } = useProgress();
  const { play, end, setPlay, hasScroll } = usePlay();
  return (
    <div
      className={`overlay ${play ? "overlay--disable" : ""}
    ${hasScroll ? "overlay--scrolled" : ""}`}
    >
      <div
        className={`loader ${progress === 100 ? "loader--disappear" : ""}`}
      />
      {progress === 100 && (
        <div className={`intro ${play ? "intro--disappear" : ""}`}>
          <h1 className="logo">
            نحلم و نحقق
            <div className="spinner">
              <div className="spinner__image" />
            </div>
          </h1>
          <p className="intro__scroll">لأن الأحلام تتحقق، ولأننا نعيش تحت سماء وطن ينمو ويزهر! نحتفل اليوم بمرور 93 عاماً</p>
          <button
            className="explore"
            onClick={() => {
              setPlay(true);
            }}
          >
            أبدأ
          </button>
        </div>
      )}
      <div className={`outro ${end ? "outro--appear" : ""}`}>
        <p className="outro__text">طموح وطن حققه شعبه</p>
      </div>
    </div>
  );
};
