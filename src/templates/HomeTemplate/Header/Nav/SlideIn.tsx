import Image from "next/image";
import { ReactNode, useRef, useEffect } from "react";

type Props = {
  children: ReactNode;
  isShown: boolean;
  onHide: () => void;
};

export const SlideIn = ({ children, isShown, onHide }: Props) => {
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
      <header className="flex h-12 flex-row-reverse items-center border-b border-gray-200">
        <button onClick={onHide} className="p-4">
          <Image
            src="/img/close-icon.svg"
            alt="close-icon"
            width={16}
            height={16}
          />
        </button>
      </header>
      {children}
    </div>
  );
};
