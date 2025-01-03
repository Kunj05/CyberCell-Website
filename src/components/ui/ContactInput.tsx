import React from 'react';

type ContactInputProps = {
  type?: 'text' | 'email' | 'textarea';
  label: string;
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
  rows?: number;
};

const ContactInput = ({ 
  type = 'text', 
  label, 
  value, 
  onChange, 
  required = false,
  rows = 4 
}: ContactInputProps) => {
  const baseClasses = "w-full bg-black/40 border border-blue-500/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-blue-500/40 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300";

  return (
    <div className="group relative">
      <label className="block text-sm font-medium text-gray-300 mb-1 transition-colors duration-300 group-focus-within:text-blue-400">
        {label}
      </label>
      
      {type === 'textarea' ? (
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          required={required}
          rows={rows}
          className={`${baseClasses} resize-none`}
        />
      ) : (
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          required={required}
          className={baseClasses}
        />
      )}
      
      {/* Animated underline effect */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-blue-500/40 transform scale-x-0 group-focus-within:scale-x-100 transition-transform duration-300" />
    </div>
  );
};

export default ContactInput;