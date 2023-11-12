import React, { useState } from "react";

type ComicCardProps = {
  imageUrl: string;
};

const ComicCard: React.FC<ComicCardProps> = ({ imageUrl }) => {
  const [annotations, setAnnotations] = useState<
    { text: string; x: number; y: number }[]
  >([]);

  const handleContextMenu = (event: React.MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
  
    const annotation = window.prompt("Enter your annotation:");
    if (annotation) {
      const rect = event.currentTarget.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
  
      setAnnotations((prevAnnotations) => [
        ...prevAnnotations,
        { text: annotation, x, y },
      ]);
    }
  };

  return (
    <div
      className="h-[50vh] md:h-[60vh] md:min-w-[50vh] rounded-sm p-2 relative"
      onContextMenu={handleContextMenu}
    >
      <img
        src={imageUrl}
        className="h-full w-full object-cover rounded-sm"
        alt="comic"
      />
      {annotations.length > 0 &&
        annotations.map((annotation, index) => (
          <div
            key={index}
            style={{ left: annotation.x, top: annotation.y }}
            className="absolute bg-white text-black p-2 rounded-full"
          >
            {annotation.text}
          </div>
        ))}
    </div>
  );
};

export default ComicCard;
