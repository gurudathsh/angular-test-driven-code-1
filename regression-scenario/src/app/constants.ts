const EXAMPLES = {
    example1: {
        id: 1,
        date: '2021-01-01T00:00:00.000Z',
        second: {
            id: 2,
            createdAt: '2021-01-01T00:00:00.000Z',
            third: {
                id: 3,
                updatedAt: '2021-01-01T00:00:00.000Z',
                fourth: {
                    id: 4,
                    deletedAt: '2021-01-01T00:00:00.000Z',
                }
            }
        }
    },
    example2: {
        a: '2021-01-01T00:00:00.000Z',
        b: 123,
        c: {
            d: 'not-a-date',
            e: {
                f: '2021-01-02T12:00:00.000Z',
            },
        },
    },
    example3: [
        '2021-01-01T00:00:00.000Z',
        'not-a-date',
        123,
    ],
    example4: '2021-01-01T00:00:00.000Z',
    example5: 123,
    example6: null,
    example7: undefined,
    example8: 'not-a-date',
    exmaple9: {}
};

const SOLUTIONPOINTS: string[] = [
    'Recursively processing objects and arrays: Traverses deeply nested data structures while preserving their original shape.',
    'Identifying ISO date strings: Uses a regular expression to detect and validate ISO 8601 date strings.',
    'Converting to JavaScript Date objects: Replaces ISO date strings with Date objects, allowing seamless date manipulation.',
    'Type safety: Leaves primitive values (string, number, boolean, null, etc.) unchanged'
];

export { EXAMPLES, SOLUTIONPOINTS };