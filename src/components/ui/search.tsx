import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { SearchList } from '../../common/searchList';


const SearchBox: React.FC = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredList, setFilteredList] = useState<typeof SearchList>([]);
    const [showSuggestions, setShowSuggestions] = useState(false);
    const navigate = useNavigate();

    const searchBoxRef = useRef<HTMLDivElement>(null);

    // Handle input change and filter suggestions
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const query = e.target.value;
        setSearchQuery(query);
        if (query.length > 0) {
            const filtered = SearchList.filter(item =>
                item.item.toLowerCase().includes(query.toLowerCase())
            );
            setFilteredList(filtered);
            setShowSuggestions(true);
        } else {
            setFilteredList([]);
            setShowSuggestions(false);
        }
    };

    // Handle suggestion click and navigate
    const handleSuggestionClick = (link: string) => {
        navigateTo(link);
    };

    // Handle search icon click
    const handleSearchIconClick = () => {
        const match = SearchList.find(item =>
            item.item.toLowerCase() === searchQuery.toLowerCase()
        );
        if (match) {
            navigateTo(match.link);
        } else {
            navigate('/not-found'); // Navigate to a "Not Found" page
        }
    };

    // Utility function to navigate and handle route
    const navigateTo = (link: string) => {
        setSearchQuery('');
        setFilteredList([]);
        setShowSuggestions(false);
        navigate(link);
    };

    // Handle clicks outside the search box
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (searchBoxRef.current && !searchBoxRef.current.contains(event.target as Node)) {
                setShowSuggestions(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <div className="relative w-full" ref={searchBoxRef}>
            <input
                type="text"
                value={searchQuery}
                onChange={handleInputChange}
                placeholder="Search..."
                className="px-4 py-3 pr-10 border border-gray-300 rounded-[0.75rem] w-full focus:border-green-100 focus:ring focus:ring-green-800 focus:outline-none"
            />
            <button
                type="button"
                onClick={handleSearchIconClick}
                className="absolute right-3 top-1/2 transform -translate-y-1/2"
            >
                <img
                    src="/Small.png"
                    alt="Search"
                    className="w-7 h-7"
                />
            </button>

            {/* Suggestions Modal */}
            {showSuggestions && filteredList.length > 0 && (
                <div className="absolute bg-white border border-gray-300 mt-2 w-full z-10 rounded-md shadow-lg">
                    <ul>
                        {filteredList.map((item, index) => (
                            <li
                                key={index}
                                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                                onClick={() => handleSuggestionClick(item.link)}
                            >
                                {item.item}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default SearchBox;