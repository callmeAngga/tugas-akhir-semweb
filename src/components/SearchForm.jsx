import { useState } from 'react';
import { FaSearch, FaMicrophone } from 'react-icons/fa';
import { searchTypes, exampleQueries } from '@/data/pencarian';

export default function SearchForm({ onSearch, isLoading }) {
    const [query, setQuery] = useState('');
    const [searchType, setSearchType] = useState('all');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (query.trim()) {
            onSearch(query, searchType);
        }
    };

    return (
        <div className="space-y-6">
            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
                        <FaSearch className="h-5 w-5 dark:text-gray-400 text-gray-500" />
                    </div>
                    <input
                        type="text"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="Masukkan kata atau kalimat yang ingin dicari..."
                        className="block w-full pl-15 pr-20 py-4 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-lg text-lg"
                    />
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 space-x-2">
                        <button
                            type="button"
                            className="p-2 text-gray-400 hover:text-gray-500 transition-colors"
                            title="Pencarian suara (coming soon)"
                        >
                            <FaMicrophone className="h-4 w-4" />
                        </button>
                        <button
                            type="submit"
                            disabled={isLoading || !query.trim()}
                            className="px-6 py-2 text-white rounded-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg bg-primary"
                        >
                            {isLoading ? 'Mencari...' : 'Cari'}
                        </button>
                    </div>
                </div>

                <div className="flex flex-wrap gap-2">
                    {searchTypes.map((type) => (
                        <button
                            key={type.value}
                            type="button"
                            onClick={() => setSearchType(type.value)}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${searchType === type.value
                                    ? 'text-white shadow-md bg-primary'
                                    : 'bg-gray-100 dark:bg-gray-300 dark:hover:bg-gray-500 text-gray-700 dark:text-gray-700 hover:bg-gray-300'
                                }`}
                            title={type.description}
                        >
                            {type.label}
                        </button>
                    ))}
                </div>
            </form>

            {/* <div className="flex items-center justify-between">
                <button
                    type="button"
                    onClick={() => setShowAdvanced(!showAdvanced)}
                    className="flex items-center space-x-2 text-sm font-medium hover:underline text-primary"
                >
                    <FaFilter className="h-4 w-4" />
                    <span>Opsi Lanjutan</span>
                </button>

                <div className="text-sm text-gray-500">
                    Total data: 127 kalimat dalam 5 kaca
                </div>
            </div>

            {showAdvanced && (
                <div className="bg-blue-50 dark:bg-blue-900/30 rounded-lg p-4 space-y-4">
                    <h4 className="font-medium text-gray-800">Pengaturan Pencarian Lanjutan</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Jenis Pencarian
                            </label>
                            <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-opacity-50 focus:border-transparent">
                                <option value="exact">Pencarian Tepat</option>
                                <option value="contains">Mengandung Kata</option>
                                <option value="fuzzy">Pencarian Mirip</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Urutan Hasil
                            </label>
                            <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-opacity-50 focus:border-transparent">
                                <option value="relevance">Relevansi</option>
                                <option value="kaca">Urut Kaca</option>
                                <option value="sentence">Urut Kalimat</option>
                            </select>
                        </div>
                    </div>
                </div>
            )} */}

            <div className="bg-blue-50 dark:bg-blue-900/30 rounded-lg p-4">
                <h4 className="font-medium text-gray-700 dark:text-blue-300 mb-2">Contoh Pencarian:</h4>
                <div className="flex flex-wrap gap-2">
                    {exampleQueries.map((example, index) => (
                        <button
                            key={index}
                            type="button"
                            onClick={() => setQuery(example)}
                            className="px-3 py-1 bg-gray-100 dark:bg-gray-300 dark:hover:bg-gray-500 text-gray-700 dark:text-gray-700 hover:bg-gray-300 rounded-full text-sm  transition-colors border"
                        >
                            {example}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}