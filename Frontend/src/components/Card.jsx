import React from 'react';

const Card = ({ title, channelName, thumbnailUrl, videoUrl }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-all duration-200">
      <a href={videoUrl} target="_blank" rel="noopener noreferrer">
        <img
          src={thumbnailUrl}
          alt={title}
          className="rounded-t-lg w-full h-40 object-cover"
        />
      </a>
      <div className="p-4">
        <a href={videoUrl} target="_blank" rel="noopener noreferrer">
          <h2 className="text-lg font-bold text-gray-900 mb-2">{title}</h2>
        </a>
        <p className="text-gray-700 text-sm">{channelName}</p>
      </div>
    </div>
  );
};

export default Card;