import TippyLibrary from "@tippyjs/react";
import "tippy.js/dist/tippy.css"; // Import CSS for TippyLibrary
import "tippy.js/themes/light.css"; // «import light Theme CSS

const Tippy = ({ children, content, delay = 250, duration = 250 }) => {
  return (
    <TippyLibrary
      content={content}
      delay={delay}
      duration={duration}
      interactive={true}
      theme="light"
    >
      {/* Span is usefull for DOM manipulation */}
      <span>{children}</span>
    </TippyLibrary>
  );
};

export default Tippy;
