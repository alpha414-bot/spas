import React, { useEffect, useRef } from "react";

interface OutsideClickInterface {
  outsideClick: any;
  children: any;
  className?: string | undefined;
}

const OutsideClick: React.FC<OutsideClickInterface> = ({
  children,
  className,
  outsideClick,
}) => {
  const parentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (parentRef.current && !parentRef.current?.contains(event.target)) {
        return outsideClick();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <div ref={parentRef} className={className}>
      {children}
    </div>
  );
};

export default OutsideClick;
