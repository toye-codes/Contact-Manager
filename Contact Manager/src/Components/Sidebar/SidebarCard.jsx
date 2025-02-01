import { ArrowDown, ArrowUp } from "lucide-react";
import tags from "./SidebarData";
import { useState } from "react";

const SidebarCard = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="p-3 bg-gray-900 rounded-xl">
      <div className="flex justify-between mb-4 rounded-tl-3xl rounded-tr-3xl">
        <div className="flex items-center justify-between w-full shadow-sm shadow-black py-3 px-4 rounded-full hover:bg-blue-600">
          <h2 className="text-white text-base md:text-xl font-semibold w-full gap-3">
            On Device
          </h2>
          <span onClick={() => setIsExpanded(!isExpanded)}>
            {isExpanded ? (
              <ArrowUp className="text-white rounded-full text bg-gray-400 shadow-sm shadow-black p-auto" />
            ) : (
              <ArrowDown className="text-white rounded-full bg-gray-400 shadow-sm shadow-black p-auto" />
            )}
          </span>
        </div>
      </div>

      {isExpanded && (
        <div className="text-white">
          {tags.map(({ id, name, totalNum }) => (
            <div
              key={id}
              className="flex justify-between gap-7 mb-4 hover:bg-blue-400 hover:p-2 hover:rounded-xl transition-all duration-150">
              <p className="text-white text-lg font-semibold">{name}</p>
              <span className="bg-gray-400 rounded-full px-2 py-1 text-white text-sm">
                {totalNum}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SidebarCard;