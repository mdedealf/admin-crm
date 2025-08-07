import { type FC } from "react";

interface SearchBarProps {
  onSearch?: (query: string) => void;
  placeholder?: string;
  className?: string;
}

const SearchBar: FC<SearchBarProps> = ({
  onSearch = () => {},
  placeholder = "Search...",
  className = "",
}) => {
  return (
    <div className={`max-w-xl w-full ${className}`}>
      <div className="relative">
        <input
          type="text"
          className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:border-gray-300 focus:ring focus:ring-blue-100 focus:outline-none text-sm"
          placeholder={placeholder}
          onChange={(e) => onSearch(e.target.value)}
        />
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <svg
            className="h-5 w-5 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
