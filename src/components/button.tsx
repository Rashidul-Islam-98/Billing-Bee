import React from 'react';

interface ToggleButtonProps {
  buttonName: string; // Customizable button name
  onToggle: () => void; // Function to handle toggle action
}

const ToggleButton: React.FC<ToggleButtonProps> = ({ buttonName, onToggle }) => {
  return (
    <button
      onClick={onToggle}
      className="font-semibold text-gray-600 px-4 py-2 rounded-md hover:bg-gray-200 transition-colors"
      style={{
        position: 'relative', // Ensures button stays within its space
        zIndex: 1, // Keeps the button above other elements
      }}
    >
      {buttonName}
    </button>
  );
};

export default ToggleButton;
