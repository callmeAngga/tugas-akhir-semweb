import { NextResponse } from 'next/server';

export async function POST(request) {
    try {
        const { query, searchType, filters } = await request.json();

        let sparqlQuery = constructSparqlQuery(query, searchType, filters);

        const response = await fetch('http://localhost:3030/suluksujinah/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Accept': 'application/sparql-results+json'
            },
            body: `query=${encodeURIComponent(sparqlQuery)}`
        });

        if (!response.ok) {
            throw new Error('SPARQL query failed');
        }

        const data = await response.json();
        const formattedResults = formatResults(data);

        return NextResponse.json(formattedResults);
    } catch (error) {
        console.error('Search error:', error);
        return NextResponse.json(
            { error: 'Internal Server Error' },
            { status: 500 }
        );
    }
}

function constructSparqlQuery(query, searchType, filters) {
    const { kaca, section } = filters;

    let baseQuery = `
        PREFIX ns: <http://localhost:3000/suluk#>
        SELECT ?sentence ?sentenceNumber ?originalText ?transliterationText ?translationText ?kacaNumber ?sectionTitle
        WHERE {
            ?sentence a ns:Sentence ;
                     ns:sentenceNumber ?sentenceNumber ;
                     ns:hasOriginalScript ?os ;
                     ns:hasTransliteration ?tl ;
                     ns:hasTranslation ?tr ;
                     ns:belongsToManuscript ?manuscriptPart .
            
            ?os ns:originalText ?originalText .
            ?tl ns:transliterationText ?transliterationText .
            ?tr ns:translationText ?translationText .
            
            ?manuscriptPart ns:kacaNumber ?kacaNumber ;
                           ns:belongsToSection ?manuscriptSection .
            
            ?manuscriptSection ns:sectionTitle ?sectionTitle .
    `;

    let filters_clause = '';

    if (kaca) {
        filters_clause += `FILTER(?kacaNumber = ${kaca})\n            `;
    }

    if (section) {
        // Map section filter to actual section title
        let sectionTitle = '';
        if (section === 'asmaradana') {
            sectionTitle = 'Branta Kingkin: Asmaradana';
        } else if (section === 'branta-kingking') {
            sectionTitle = 'Branta Kingkin: Asmaradana'; 
        }

        if (sectionTitle) {
            filters_clause += `FILTER(?sectionTitle = "${sectionTitle}")\n            `;
        }
    }

    // Add search condition
    let searchCondition = '';
    switch (searchType) {
        case 'original':
            searchCondition = `FILTER(contains(lcase(?originalText), lcase("${query}")))`;
            break;
        case 'transliteration':
            searchCondition = `FILTER(contains(lcase(?transliterationText), lcase("${query}")))`;
            break;
        case 'translation':
            searchCondition = `FILTER(contains(lcase(?translationText), lcase("${query}")))`;
            break;
        default:
            searchCondition = `FILTER(
                contains(lcase(?originalText), lcase("${query}")) ||
                contains(lcase(?transliterationText), lcase("${query}")) ||
                contains(lcase(?translationText), lcase("${query}"))
            )`;
    }

    return `${baseQuery}
            ${filters_clause}
            ${searchCondition}
        }
        ORDER BY ?kacaNumber ?sentenceNumber
        LIMIT 100
    `;
}

function formatResults(data) {
    return data.results.bindings.map((result, index) => ({
        id: index + 1,
        originalScript: result.originalText.value,
        transliteration: result.transliterationText.value,
        translation: result.translationText.value,
        kaca: parseInt(result.kacaNumber.value),
        sentenceNumber: parseInt(result.sentenceNumber.value),
        section: result.sectionTitle.value
    }));
}