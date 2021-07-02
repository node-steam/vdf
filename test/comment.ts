import test from 'ava';

import {
    parse,
} from 'lib';

const string =
`"description"		"This is a example object!"
/**
 * test
 */
"float"		"2307.1997"
`;

const object = {
    description: 'This is a example object!',
    float: 2307.1997,
};

test('Comment', (t) => {
    const result = parse(string);

    t.deepEqual(result, object);
});
