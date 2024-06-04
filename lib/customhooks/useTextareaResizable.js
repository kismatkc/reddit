import { useRef, useEffect } from "react";

export const useResizableTextarea = () => {
  const textareaRef = useRef(null);

  useEffect(() => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.addEventListener("input", () => {
        textarea.style.height = `${textarea.scrollHeight}px`;
      });
    }
  }, []);

  return {
    textareaRef,
  };
};
