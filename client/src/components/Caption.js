import React,{useState,useEffect} from "react";

const Caption = ({
  labelName,
  type,
  name,
  placeholder,
  value,
  handleChange,readOnly
}) => {
  
   
    const [displayedText, setDisplayedText] = useState('');
    useEffect(() => {
        const startTypingAnimation = async () => {
          if (value !== '') {
            setDisplayedText(''); // Reset the displayed text
    
            // Simulate typing animation
            for (let i = 0; i < value.length; i++) {
                await new Promise((resolve) => setTimeout(resolve, 100)); // Adjust the typing speed as desired
                setDisplayedText(value.substring(0, i + 1)); // Adjust the typing speed as desired
            }
          }
        };
    
        startTypingAnimation();
      }, [value]);

  return (
    <div>
      <div className="flex items-center gap-2 mb-2">
        <label
          htmlFor={name}
          className="block text-sm font-medium text-gray-900"
        >
          {labelName}
        </label>
      </div>
      <input
      readOnly={readOnly}
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        value={displayedText}
        onChange={handleChange}
        required
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#4649ff] focus:border-[#4649ff] outline-none block w-full p-3"
      />
    </div>
  );
};

export default Caption;
