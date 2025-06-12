    "use client";

    import { useState } from "react";
    import SearchForm from "@/components/SearchForm";
    import SearchFilters from "@/components/SearchFilters";
    import SearchResults from "@/components/SearchResults";

    export default function Page() {
        const [searchQuery, setSearchQuery] = useState('');
        const [filters, setFilters] = useState({ kaca: '', section: '' });
        const [results, setResults] = useState([]);
        const [isLoading, setIsLoading] = useState(false);
        const [searchTime, setSearchTime] = useState(0);
        const [error, setError] = useState(null);

        const handleSearch = async (query, searchType) => {
            setIsLoading(true);
            setSearchQuery(query);
            setError(null);

            const startTime = performance.now();

            try {
                const response = await fetch('/api/pencarian', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        query,
                        searchType,
                        filters
                    })
                });

                if (!response.ok) {
                    throw new Error('Search failed');
                }

                const data = await response.json();
                setResults(data);

                const endTime = performance.now();
                setSearchTime((endTime - startTime) / 1000);
            } catch (error) {
                console.error('Search error:', error);
                setError('Terjadi kesalahan saat melakukan pencarian');
                setResults([]);
            } finally {
                setIsLoading(false);
            }
        };

        return (
            <div className="p-6 mx-auto">
                <div className="mb-5">
                    <p className="text-gray-600 dark:text-gray-400 text-lg font-medium">Cari kata atau kalimat dalam naskah Suluk Sujinah</p>
                </div>

                <div className="bg-white border dark:border-gray-800 border-gray-300 dark:bg-gray-800 rounded-lg p-6 mb-6">
                    <SearchForm onSearch={handleSearch} isLoading={isLoading} />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                    <div className="lg:col-span-1 ">
                        <SearchFilters
                            filters={filters}
                            onFiltersChange={setFilters}
                        />
                    </div>
                    <div className="lg:col-span-3">
                        <SearchResults
                            results={results}
                            isLoading={isLoading}
                            searchQuery={searchQuery}
                            searchTime={searchTime}
                            error={error}
                        />
                    </div>
                </div>
            </div>
        );
    }