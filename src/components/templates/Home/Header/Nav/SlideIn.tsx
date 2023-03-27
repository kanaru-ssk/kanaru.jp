import { ReactNode, useRef, useEffect } from "react";

type Props = {
  children: ReactNode;
  isShown: boolean;
  onHide: () => void;
};

const SlideIn = ({ children, isShown, onHide }: Props) => {
  const slideInRef = useRef<HTMLDivElement>(null);
  const handleClickOutside = (event: MouseEvent) => {
    if (
      slideInRef.current &&
      !slideInRef.current.contains(event.target as Node)
    ) {
      onHide();
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });

  return (
    <div
      ref={slideInRef}
      className={`${
        !isShown && "translate-x-full"
      } absolute top-0 right-0 z-20 h-screen w-[60%] bg-white drop-shadow-2xl duration-300`}
    >
      <header className="border-gray flex h-12 flex-row-reverse items-center border-b pr-2">
        <button onClick={onHide}>
          <svg width="48" height="48" fill="black">
            <path d="M24 22.5454L17.4546 16L16 17.4545L22.5455 24L16 30.5455L17.4545 32L24 25.4545L30.5455 32L32 30.5454L25.4545 24L32 17.4546L30.5454 16L24 22.5454Z" />
          </svg>
        </button>
      </header>
      {children}
    </div>
  );
};

export default SlideIn;
