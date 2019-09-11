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
	"deep"
	{
		"boolean"		"false"
		"number"		"925"
	}
}
`;

const object = {
    description: 'This is a example object!',
    nested: {
        boolean: true,
        number: 529,
        deep: {
            boolean: false,
            number: 925,
        },
    }
};

test('Parse', (t) => {
    const result = parse(string);

    t.deepEqual(result, object);
});

test('Stringify', (t) => {
    const result = stringify(object);

    t.deepEqual(result, string);
});
