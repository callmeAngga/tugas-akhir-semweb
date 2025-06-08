import { FaBook, FaLanguage, FaGlobe, FaSpinner, FaSearch } from 'react-icons/fa';

export default function SearchResults({ results, isLoading, searchQuery }) {
    if (isLoading) {
        return (
            <div className="bg-white border dark:border-gray-800 border-gray-300 dark:bg-gray-800 rounded-lg p-8">
                <div className="flex items-center justify-center space-x-3">
                    <FaSpinner className="h-6 w-6 animate-spin" style={{ color: '#EDBA3D' }} />
                    <span className="text-lg text-gray-600">Mencari...</span>
                </div>
            </div>
        );
    }

    if (searchQuery && results.length === 0) {
        return (
            <div className="bg-white border dark:border-gray-800 border-gray-300 dark:bg-gray-800 rounded-lg p-8 text-center">
                <FaSearch className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-800 mb-2">Tidak Ada Hasil</h3>
                <p className="text-gray-600 mb-4">
                    Tidak ditemukan hasil untuk "{searchQuery}". Coba kata kunci lain atau gunakan filter yang berbeda.
                </p>
                <div className="bg-blue-50 rounded-lg p-4 text-left">
                    <h4 className="font-medium text-gray-800 mb-2">Saran:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Periksa ejaan kata kunci</li>
                        <li>• Gunakan kata yang lebih umum</li>
                        <li>• Coba variasi kata dalam bahasa Jawa</li>
                        <li>• Hapus filter untuk memperluas pencarian</li>
                    </ul>
                </div>
            </div>
        );
    }

    if (!searchQuery) {
        return (
            <div className="bg-white border dark:border-gray-800 border-gray-300 dark:bg-gray-800 rounded-lg p-8 text-center">
                <FaSearch className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-800 mb-2">Mulai Pencarian</h3>
                <p className="text-gray-600">
                    Masukkan kata atau kalimat untuk mencari dalam naskah Suluk Sujinah
                </p>
            </div>
        );
    }

    return (
        <div className="space-y-4">
            <div className="bg-white border dark:border-gray-800 border-gray-300 dark:bg-gray-800 rounded-lg p-4">
                <div className="flex items-center justify-between">
                    <div>
                        <h3 className="text-lg font-medium text-gray-800 dark:text-gray-300">
                            Hasil Pencarian untuk "{searchQuery}"
                        </h3>
                        <p className="text-sm text-gray-500">
                            Ditemukan {results.length} hasil
                        </p>
                    </div>
                    <div className="text-sm text-gray-500">
                        Waktu pencarian: 0.3 detik
                    </div>
                </div>
            </div>

            {results.map((result, index) => (
                <div key={result.id} className="bg-white border dark:border-gray-800 border-gray-300 dark:bg-gray-800 rounded-lg p-6 w">
                    <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center space-x-3">
                            <div className="flex items-center space-x-2 text-sm text-gray-500">
                                <FaBook className="h-4 w-4" />
                                <span>Kaca {result.kaca}</span>
                                <span>•</span>
                                <span>Kalimat {result.sentenceNumber}</span>
                                <span>•</span>
                                <span>{result.section}</span>
                            </div>
                        </div>
                        <div className="text-sm text-gray-500">
                            #{index + 1}
                        </div>
                    </div>

                    <div className="space-y-4">
                        {/* Script Asli */}
                        <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                            <div className="flex items-center space-x-2 mb-2">
                                <FaLanguage className="h-4 w-4 text-gray-600 dark:text-gray-300" />
                                <span className="text-sm font-medium text-gray-700 dark:text-gray-200">Aksara Jawa</span>
                            </div>
                            <p className="text-xl font-medium text-gray-800 dark:text-gray-100" style={{ fontFamily: 'serif' }}>
                                {result.originalScript}
                            </p>
                        </div>

                        {/* Transliterasi */}
                        <div className="bg-blue-50 dark:bg-blue-900/30 rounded-lg p-4">
                            <div className="flex items-center space-x-2 mb-2">
                                <FaLanguage className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                                <span className="text-sm font-medium text-blue-700 dark:text-blue-300">Transliterasi</span>
                            </div>
                            <p className="text-lg text-blue-800 dark:text-blue-200 font-medium">
                                {result.transliteration}
                            </p>
                        </div>

                        {/* Terjemahan */}
                        <div className="rounded-lg p-4 dark:bg-amber-900/30 bg-[#EDBA3D20]">
                            <div className="flex items-center space-x-2 mb-2">
                                <FaGlobe className="h-4 w-4 text-amber-400"/>
                                <span className="text-sm font-medium text-amber-400">Terjemahan</span>
                            </div>
                            <p className="text-lg text-gray-800 dark:text-gray-200 font-medium">
                                {result.translation}
                            </p>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex items-center justify-end space-x-3 mt-4 pt-4 border-t-2 border-gray-300 dark:border-gray-700">
                        <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
                            Salin
                        </button>
                        <button
                            className="px-4 py-2 text-sm font-medium text-white rounded-lg transition-colors hover:shadow-lg"
                            style={{ backgroundColor: '#EDBA3D' }}
                        >
                            Lihat Detail
                        </button>
                    </div>
                </div>
            ))}

            {/* Load More Button */}
            {results.length > 0 && (
                <div className="text-center pt-6">
                    <button
                        className="px-6 py-3 text-white rounded-lg transition-all duration-200 hover:shadow-lg"
                        style={{ backgroundColor: '#EDBA3D' }}
                    >
                        Muat Lebih Banyak
                    </button>
                </div>
            )}
        </div>
    );
}