import { FaFilter, FaBook, FaLayerGroup } from 'react-icons/fa';
import { kacaOptions, sectionOptions } from '@/data/pencarian';

export default function SearchFilters({ filters, onFiltersChange }) {
    const handleFilterChange = (key, value) => {
        onFiltersChange({
            ...filters,
            [key]: value
        });
    };

    const clearAllFilters = () => {
        onFiltersChange({
            kaca: '',
            section: ''
        });
    };

    const hasActiveFilters = filters.kaca || filters.section;

    return (
        <div className="bg-white border dark:border-gray-800 border-gray-300 dark:bg-gray-800 rounded-lg p-6 sticky top-6">
            <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-2">
                    <FaFilter className="h-4 w-4" style={{ color: '#EDBA3D' }} />
                    <h3 className="font-semibold text-primary">Filter Pencarian</h3>
                </div>
                {hasActiveFilters && (
                    <button
                        onClick={clearAllFilters}
                        className="text-sm text-gray-500 hover:text-gray-700 dark:text-gray-300 dark:hover:text-gray-500 underline"
                    >
                        Hapus Semua
                    </button>
                )}
            </div>

            <div className="space-y-6">
                <div>
                    <div className="flex items-center space-x-2 mb-3">
                        <FaBook className="h-4 w-4 text-gray-600" />
                        <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Kaca</label>
                    </div>
                    <select
                        value={filters.kaca}
                        onChange={(e) => handleFilterChange('kaca', e.target.value)}
                        className="w-full p-3 border border-gray-300 text-gray-500 dark:text-gray-200 rounded-lg"
                    >
                        {kacaOptions.map((option) => (
                            <option key={option.value} value={option.value} className='text-gray-700 dark:text-gray-200 dark:bg-gray-600'>
                                {option.label}
                            </option>
                        ))}
                    </select>
                </div>

                <div>
                    <div className="flex items-center space-x-2 mb-3">
                        <FaLayerGroup className="h-4 w-4 text-gray-600" />
                        <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Bagian</label>
                    </div>
                    <select
                        value={filters.section}
                        onChange={(e) => handleFilterChange('section', e.target.value)}
                        className="w-full p-3 border border-gray-300 text-gray-500 dark:text-gray-200 rounded-lg"
                    >
                        {sectionOptions.map((option) => (
                            <option key={option.value} value={option.value} className='text-gray-700 dark:text-gray-200 dark:bg-gray-600'>
                                {option.label}
                            </option>
                        ))}
                    </select>
                </div>

                {hasActiveFilters && (
                    <div className="mt-6 p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                        <h4 className="text-sm font-medium text-gray-800 mb-2">Filter Aktif:</h4>
                        <div className="space-y-1">
                            {filters.kaca && (
                                <div className="flex items-center justify-between">
                                    <span className="text-sm text-gray-600">Kaca: {filters.kaca}</span>
                                    <button
                                        onClick={() => handleFilterChange('kaca', '')}
                                        className="text-md text-red-500 hover:text-red-700"
                                    >
                                        ×
                                    </button>
                                </div>
                            )}
                            {filters.section && (
                                <div className="flex items-center justify-between">
                                    <span className="text-sm text-gray-600">
                                        Bagian: {sectionOptions.find(opt => opt.value === filters.section)?.label}
                                    </span>
                                    <button
                                        onClick={() => handleFilterChange('section', '')}
                                        className="text-md text-red-500 hover:text-red-700"
                                    >
                                        ×
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                )}

                <div className="border-t border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 pt-6">
                    <h4 className="text-sm font-medium mb-3">Filter Cepat</h4>
                    <div className="space-y-2">
                        <button
                            onClick={() => onFiltersChange({ kaca: '1', section: 'asmaradana' })}
                            className="w-full text-left p-2 text-sm hover:bg-gray-200 dark:hover:bg-gray-500 rounded-lg transition-colors"
                        >
                            Kaca 1 - Branta Kingkin: Asmaradana
                        </button>
                        <button
                            onClick={() => onFiltersChange({ kaca: '10', section: 'asmaradana' })}
                            className="w-full text-left p-2 text-sm hover:bg-gray-50 dark:hover:bg-gray-500 rounded-lg transition-colors"
                        >
                            Kaca 10 - Branta Kingkin: Asmaradana
                        </button>
                        <button
                            onClick={() => onFiltersChange({ kaca: '', section: 'asmaradana' })}
                            className="w-full text-left p-2 text-sm hover:bg-gray-50 dark:hover:bg-gray-500 rounded-lg transition-colors"
                        >
                            Semua Branta Kingkin: Asmaradana
                        </button>
                        <button
                            onClick={() => onFiltersChange({ kaca: '5', section: '' })}
                            className="w-full text-left p-2 text-sm hover:bg-gray-50 dark:hover:bg-gray-500 rounded-lg transition-colors"
                        >
                            Kaca 5 - Semua Bagian
                        </button>
                        <button
                            onClick={() => onFiltersChange({ kaca: '15', section: '' })}
                            className="w-full text-left p-2 text-sm hover:bg-gray-50 dark:hover:bg-gray-500 rounded-lg transition-colors"
                        >
                            Kaca 15 - Semua Bagian
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}