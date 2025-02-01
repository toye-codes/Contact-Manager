import { useState } from "react";
import ContactData from "../../Utility/ContactDetails";
import { Star } from "lucide-react";

const Contacts = () => {
  const [selectedContact, setSelectedContact] = useState(null);

  // Function to get background color for tags
  const getTagColor = (tag) => {
    const colors = {
      Friends: "bg-blue-600 text-white",
      Work: "bg-purple-600 text-white",
      Important: "bg-red-600 text-white",
      Family: "bg-green-600 text-white",
    };
    return colors[tag] || "bg-gray-600 text-white";
  };

  return (
    <div className="w-full max-w-3xl mx-auto p-4 space-y-2 bg-black text-white rounded-lg">
      {ContactData.map(
        ({ id, name, profilePicture, tags, jobTitle, company, isFavorite }) => {
          const isSelected = selectedContact === id;

          return (
            <div
              key={id}
              onClick={() => setSelectedContact(id)}
              className={`flex items-center justify-between p-4 rounded-3xl transition-all duration-300 
              ${isSelected ? "bg-blue-700 text-white" : "bg-gray-900"} 
              hover:bg-blue-200 hover:scale-105 cursor-pointer`}>
              {/* Left Section: Profile Picture & Details */}
              <div className="flex items-center gap-4 w-full">
                {/* Profile Picture */}
                <img
                  src={profilePicture}
                  alt={name}
                  className="w-12 h-12 rounded-full object-cover"
                />

                {/* Name, Tags, and Job Details */}
                <div className="w-full">
                  {/* Name and Tags */}
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="text-lg font-semibold">{name}</h3>

                    {/* Tags - Flex wrap ensures they don't overflow */}
                    <div className="flex flex-wrap gap-1">
                      {tags.map((tag, index) => (
                        <span
                          key={index}
                          className={`px-3 py-1 rounded-full text-xs ${getTagColor(
                            tag
                          )}`}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Job Title and Company */}
                  <p className="text-gray-400 text-sm">
                    {company}, {jobTitle}
                  </p>
                </div>
              </div>

              {/* Star Icon - Flex ensures proper alignment */}
              {isFavorite && (
                <div className="flex items-center">
                  <Star className="w-6 h-6 text-yellow-400" fill="yellow" />
                </div>
              )}
            </div>
          );
        }
      )}
    </div>
  );
};

export default Contacts;
