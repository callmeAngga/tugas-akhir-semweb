const kacaOptions = [
    { value: '', label: 'Semua Kaca' },
    { value: '1', label: 'Kaca 1' },
    { value: '2', label: 'Kaca 2' },
    { value: '3', label: 'Kaca 3' },
    { value: '4', label: 'Kaca 4' },
    { value: '5', label: 'Kaca 5' }
];

const sectionOptions = [
    { value: '', label: 'Semua Bagian' },
    { value: 'asmaradana', label: 'Asmaradana' },
    { value: 'branta-kingking', label: 'Branta Kingking' }
];

const searchTypes = [
    { value: 'all', label: 'Semua', description: 'Cari di aksara, transliterasi, dan terjemahan' },
    { value: 'original', label: 'Aksara Jawa', description: 'Cari dalam aksara Jawa asli' },
    { value: 'transliteration', label: 'Transliterasi', description: 'Cari dalam teks latin' },
    { value: 'translation', label: 'Terjemahan', description: 'Cari dalam terjemahan Indonesia' }
];

const exampleQueries = [
    'manira', 'suka', 'kandak', 'lumaku', 'tresna'
];

export {
    kacaOptions,
    sectionOptions,
    searchTypes,
    exampleQueries
};