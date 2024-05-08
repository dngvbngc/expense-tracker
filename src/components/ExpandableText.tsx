import { useState } from "react";

interface Props {
  children: string;
  maxChars?: number;
}

// This component manages the showing of text, not app
// Try localizing the state first
// Only show state in app to show full component/interdependencies

const ExpandableText = ({ children, maxChars = 50 }: Props) => {
  const [isExpanded, setIsExpanded] = useState(false);
  if (children.length <= maxChars) return <p>{children}</p>;
  const text = isExpanded ? children : children.substring(0, maxChars) + "...";
  return (
    <>
      <p>{text}</p>
      <button onClick={() => setIsExpanded(!isExpanded)}>
        {isExpanded ? "Less" : "More"}
      </button>
    </>
  );
};

export default ExpandableText;
