import 'app-module-path/cwd';

import test from 'ava';

import {
    parse,
    stringify,
} from 'lib';

const string =
`"description"		"This is a example object!"
"nested"
{
	"boolean"		"true"
	"number"		"529"
}
`;

test('Parse', (t) => {
    const should = {
        description: 'This is a example object!',
        nested: {
            boolean: 'true',
            number: '529',
        }
    };

    const result = parse(string);

    t.deepEqual(result, should);
});

test('Stringify', (t) => {
    const object = {
        description: 'This is a example object!',
        nested: {
            boolean: true,
            number: 529,
        }
    };

    const result = stringify(object);

    t.deepEqual(result, string);
});
