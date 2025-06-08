"use client";

import { useState } from "react";
import SearchForm from "@/components/SearchForm";
import SearchFilters from "@/components/SearchFilters";
import SearchResults from "@/components/SearchResults";

export default function Page() {
    const [searchQuery, setSearchQuery] = useState('');
    const [filters, setFilters] = useState({kaca: '', section: ''});
    const [results, setResults] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const handleSearch = async (query, type) => {
        setIsLoading(true);
        setSearchQuery(query);

        // Simulasi pencarian - nanti akan diganti dengan SPARQL query
        setTimeout(() => {
            const mockResults = [
                {
                    id: 1,
                    originalScript: "ꦩꦤꦶꦫ ꦭꦶꦂꦧꦸ ꦱꦸꦏ",
                    transliteration: "manira liru suka",
                    translation: "diriku senang gembira",
                    kaca: 1,
                    sentenceNumber: 1,
                    section: "Asmaradana"
                },
                {
                    id: 2,
                    originalScript: "ꦱꦶꦫ ꦏꦤ꧀ꦝꦏ ꦭꦸꦩꦏꦸ",
                    transliteration: "sira kandak lumaku",
                    translation: "engkau hendak berjalan",
                    kaca: 1,
                    sentenceNumber: 2,
                    section: "Asmaradana"
                }
            ];
            setResults(mockResults);
            setIsLoading(false);
        }, 1000);
    };

    return (
        <div className="p-6 mx-auto">
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-300 mb-2">Pencarian Transliterasi & Terjemahan</h1>
                <p className="text-gray-600 dark:text-gray-400">Cari kata atau kalimat dalam naskah Suluk Sujinah</p>
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
                    />
                </div>
            </div>
        </div>
    );
}