
interface SearchBarProps {
    searchTerm: string;
    onSearch: (value: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ searchTerm, onSearch }) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onSearch(e.target.value);
    };
    return (
        <div className="max-w-[427px] w-full mx-auto flex items-center justify-between bg-white rounded-full py-2 pl-6 pr-2">
            <label htmlFor="search" className="flex items-center space-x-2">
                <svg className="huge-icon-interface-outline-search-01" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 22L20 20M2 11.5C2 6.25329 6.25329 2 11.5 2C16.7467 2 21 6.25329 21 11.5C21 16.7467 16.7467 21 11.5 21C6.25329 21 2 16.7467 2 11.5Z" stroke="#04040E" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <input
                    type="text"
                    value={searchTerm}
                    name="search"
                    onChange={handleChange}
                    placeholder="Rechercher un aliment"
                    className="flex-1 py-2 px-2 outline-none text-gray-700 placeholder-gray-500 text-[14px]"
                />
            </label>
            <div className="w-[1.2px] h-[15px] bg-gray-300"></div>
            <button
                type="button"
                className="bg-red-500 hover:bg-red-600 text-white font-medium py-3 px-8 rounded-full transition-colors text-[14px]"
            >
                Rechercher
            </button>
        </div>
    );
};

export default SearchBar;