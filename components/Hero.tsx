import { FaLocationArrow, FaExpand } from "react-icons/fa6";
import { FaSailboat } from 'react-icons/fa6';
import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { useState, useRef, useEffect } from "react";
import { ContainerScroll } from "./ui/ContainerScroll"; // Import the ContainerScroll component

const Hero = () => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const iframeControlsRef = useRef<HTMLDivElement | null>(null)
  const [fullscreenElement, setFullscreenElement] = useState<Element | null>(null);
  const [showBlurMessage, setShowBlurMessage] = useState(false);
  const [iframeControlsPosition, setIframeControlsPosition] = useState<'absolute' | 'fixed'>('absolute');
  const [showIframeControls, setShowIframeControls] = useState(true);

  useEffect(() => {
    const handleFullscreenChange = () => {
      const isCurrentlyFullscreen = !!(document.fullscreenElement || (document as any).mozFullScreenElement || (document as any).webkitFullscreenElement || (document as any).msFullscreenElement);

      setFullscreenElement(document.fullscreenElement || (document as any).mozFullScreenElement || (document as any).webkitFullscreenElement || (document as any).msFullscreenElement);
      setIsFullscreen(isCurrentlyFullscreen);

      setShowBlurMessage(!isCurrentlyFullscreen)
      setShowIframeControls(!isCurrentlyFullscreen)

      // Focus the iframe when entering fullscreen
      if (isCurrentlyFullscreen && iframeRef.current) {
        iframeRef.current.focus();
      }
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    document.addEventListener('mozfullscreenchange', handleFullscreenChange);
    document.addEventListener('webkitfullscreenchange', handleFullscreenChange);
    document.addEventListener('msfullscreenchange', handleFullscreenChange);

    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
      document.removeEventListener('mozfullscreenchange', handleFullscreenChange);
      document.removeEventListener('webkitfullscreenchange', handleFullscreenChange);
      document.removeEventListener('msfullscreenchange', handleFullscreenChange);
    };
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const targetWindow = isFullscreen && iframeRef.current?.contentWindow ? iframeRef.current.contentWindow : window;

      if (targetWindow) {
        targetWindow.postMessage({
          type: 'keydown',
          key: event.key,
          code: event.code,
        }, 'https://surfmyresume.vercel.app/');
      }
    };

    const handleKeyUp = (event: KeyboardEvent) => {
      const targetWindow = isFullscreen && iframeRef.current?.contentWindow ? iframeRef.current.contentWindow : window;

      if (targetWindow) {
        targetWindow.postMessage({
          type: 'keyup',
          key: event.key,
          code: event.code,
        }, 'https://surfmyresume.vercel.app/');
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, [isFullscreen]);

  const handleFullscreen = () => {
    const container = containerRef.current;

    if (!container) return;

    if (!isFullscreen) {
      setShowBlurMessage(false)
      if (container.requestFullscreen) {
        container.requestFullscreen();
      } else if ((container as any).mozRequestFullScreen) {
        (container as any).mozRequestFullScreen();
      } else if ((container as any).webkitRequestFullscreen) {
        (container as any).webkitRequestFullscreen();
      } else if ((container as any).msRequestFullscreen) {
        (container as any).msRequestFullscreen();
      }
    } else {
      if (typeof document !== 'undefined') {
        if (document.exitFullscreen) {
          document.exitFullscreen();
        } else if ((document as any).mozCancelFullScreen) {
          (document as any).mozCancelFullScreen();
        } else if ((document as any).webkitExitFullscreen) {
          (document as any).webkitExitFullscreen();
        } else if ((document as any).msExitFullscreen) {
          (document as any).msExitFullscreen();
        }
      }
    }
  };

  const handleStartSurfing = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    handleFullscreen();

    const element = document.getElementById("iframe-container");
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    setIframeControlsPosition(isFullscreen ? 'fixed' : 'absolute');
  }, [isFullscreen]);

  return (
    <div className="pt-36">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="blue"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      <div
        className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
       absolute top-0 left-0 flex items-center justify-center"
      >
        <div
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      <div className="flex justify-center relative my-19 z-10">
        <div className="max-w-[80vw] md:max-w-2xl lg:max-w-[45vw] flex flex-col items-center justify-center">
          <p className="uppercase tracking-widest text-m text-center text-white max-w-80">
            Hey, it’s <span className="text-blue">Jai Raj Gunnu</span> here!
          </p>

          <TextGenerateEffect
            words="Got bored scrolling? Try surfing!"
            className="text-center py-3 text-[40px] md:text-5xl lg:text-6xl"
          />

          <p className="text-center md:tracking-wider mb-2 text-xs md:text-base lg:text-base">
            Play a mini-game to know about me—fun, no more scrolling!
          </p>

          <a onClick={handleStartSurfing}>
            <MagicButton
              title="Play surfing!"
              icon={<FaSailboat />}
              position="right"
              style={{ zIndex: 9999999999 }} // Apply z-index here
            />
          </a>

          <ContainerScroll titleComponent={null}>
            <div className="mt-20 w-full max-w-[1420px] h-[480px] relative " id="iframe-container" ref={containerRef}>
              {showIframeControls && (
                <div
                  ref={iframeControlsRef}
                  className={`absolute top-0 left-0 z-30 w-full flex items-center ${iframeControlsPosition === 'fixed' ? 'fixed' : ''}`}
                  style={iframeControlsPosition === 'fixed' ? { top: '10px', left: '0px', width: '100%', zIndex: 31 } : {}}
                >
                  <div className="flex h-8 w-full items-center rounded-t-2xl bg-[#313C4C] dark:bg-[#313C4C] pr-2 pl-3"
                    style={{ marginTop: "-30px" }}
                  >
                    <div className="w-3 h-3 rounded-full bg-red-500 mx-1" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400 mx-1" />
                    <div className="w-3 h-3 rounded-full bg-green-500 mx-1" />
                  </div>
                </div>)}

              <div
                className={`absolute inset-0 bg-black/[0.7] z-10 flex items-center justify-center transition-opacity duration-300 ${showBlurMessage ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
                {showBlurMessage && (
                  <p className="text-white text-xl font-semibold text-center px-4 w-[55%]">
                    Kindly switch to fullscreen mode to continue surfing.
                  </p>
                )}
              </div>
              <div className={`w-full h-full rounded-b-2xl border border-white/[0.1] overflow-hidden relative `} style={{ transition: 'all 0.3s ease-in-out' }}>
                <button
                  className="absolute bottom-5 right-5 z-20 bg-white/[.10] text-white p-2 rounded-full hover:bg-white/[.20] transition-colors duration-300"
                  onClick={handleFullscreen} >
                  {isFullscreen ? <FaExpand style={{ transform: 'rotate(180deg)' }} /> : <FaExpand />}
                </button>
                <iframe
                  ref={iframeRef}
                  src="https://surfmyresume.vercel.app/"
                  className={`w-full h-full transition-filter duration-300 ${showBlurMessage ? 'filter blur-md' : 'filter-none'} ${isFullscreen ? 'absolute top-0 left-0' : ''}`}
                  title="Surf My Resume" style={isFullscreen ? { height: '100vh', width: '100vw' } : {}}
                />
              </div>
            </div>
          </ContainerScroll>
          <p className="text-center mt-4 text-xs md:text-sm text-gray-500">
            Playing in this tab may not offer the best experience.{" "}
            <a
              href="https://surfmyresume.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue opacity-75 hover:underline "
            >
              Shall we open in a new tab?
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;