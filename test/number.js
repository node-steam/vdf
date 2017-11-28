import 'app-module-path/cwd';

import test from 'ava';

import {
    parse,
    stringify,
} from 'lib';

const string =
`"description"		"This is a example object!"
"number"		"529"
`;

const object = {
    description: 'This is a example object!',
    number: 529,
};

test('Parse', (t) => {
    const result = parse(string);

    t.deepEqual(result, object);
});

test('Stringify', (t) => {
    const result = stringify(object);

    t.deepEqual(result, string);
});
