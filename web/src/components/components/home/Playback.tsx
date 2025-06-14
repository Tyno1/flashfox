import video from "@/assets/videp.mp4";

type PlaybackRef = {
  containerRef: React.RefObject<HTMLVideoElement | null>;
  isVisible?: boolean;
};
export function Playback({ containerRef, isVisible }: PlaybackRef) {
  return (
    <div className="h-[90vh] w-full flex flex-col-reverse lg:flex-row items-center justify-center p-8 gap-10">
      <div className="relative w-full md:max-w-[60%] h-[70%]">
        <div className="border-2 border-secondary border-dashed w-20 h-20 rounded-full absolute inset-[-6%] to"></div>
        <video
          ref={containerRef}
          autoPlay
          loop
          controls
          className="w-full h-full object-cover rounded-lg"
        >
          {isVisible && <source src={video} />}
          Your Browser does not support the video tag
        </video>
      </div>

      <div className="text-foreground text-center">
        <h2 className="text-4xl lg:text-7xl font-bold mb-2 text-center lg:text-left">
          Our <br className="hidden lg:flex" /> Approach{" "}
          <br className="hidden lg:flex" /> in Motion
        </h2>
        <p className="text-xs mb-10">
          Experience how we deliver exceptional logistics solutions
        </p>
      </div>
    </div>
  );
}
