/**
 * Parse a VDF string into a JSON object
 *
 * @param  { string } text VDF string to parse
 * @return { object } JSON object
 */
export const parse = (text: string): any => {

    if (typeof text !== 'string') {
        throw new TypeError('VDF | Parse: Expecting parameter to be a string');
    }

    const lines      = text.split('\n');
    const object     = {};
    const stack: any = [object];
    let expect       = false;

    const regex = new RegExp(
        '^("((?:\\\\.|[^\\\\"])+)"|([a-z0-9\\-\\_]+))' +
        '([ \t]*(' +
        '"((?:\\\\.|[^\\\\"])*)(")?' +
        '|([a-z0-9\\-\\_]+)' +
        '))?',
    );

    let i = 0;
    const j = lines.length;

    for (; i < j; i++) {
        let line = lines[i].trim();
        if (line === '' || line[0] === '/') { continue; }
        if (line[0] === '{') {
            expect = false;
            continue;
        }
        if (expect) {
            throw new SyntaxError(`VDF | Parse: Invalid syntax on line ${i + 1}`);
        }
        if (line[0] === '}') {
            stack.pop();
            continue;
        }
        while (true) {
            const m = regex.exec(line);
            if (m === null) {
                throw new SyntaxError(`VDF | Parse: Invalid syntax on line ${i + 1}`);
            }
            const key    = (m[2] !== undefined) ? m[2] : m[3];
            let val: any = (m[6] !== undefined) ? m[6] : m[8];

            if (val === undefined) {
                if (stack[stack.length - 1][key] === undefined) stack[stack.length - 1][key] = {};
                stack.push(stack[stack.length - 1][key]);
                expect = true;
            } else {
                if (m[7] === undefined && m[8] === undefined) {
                    line += '\n' + lines[++i];
                    continue;
                }

                if (val !== '' && !isNaN(val)) val = +val;
                if (val === 'true')            val = true;
                if (val === 'false')           val = false;
                if (val === 'null')            val = null;
                if (val === 'undefined')       val = undefined;

                stack[stack.length - 1][key] = val;
            }
            break;
        }
    }

    if (stack.length !== 1) throw new SyntaxError('VDF | Parse: Open parentheses somewhere');

    return object;
};

/**
 * Parse a JSON object into a VDF string
 *
 * @param  { object } text JSON object to parse
 * @return { string } VDF string
 */
export const stringify = (object: any): string => {
    if (typeof object !== 'object') {
        throw new TypeError('VDF | Stringify: First input parameter is not an object');
    }

    return create(object);
};

/**
 * @hidden
 */
const create = (object: any, level = 0): string => {
    if (typeof object !== 'object') {
        throw new TypeError('VDF | Stringify: A key has value of type other than string or object');
    }

    const x    = '\t';
    let result = '';
    let indent = '';

    for (let i = 0; i < level; i++) {
        indent += x;
    }

    for (const key in object) {
        if (typeof object[key] === 'object' && object[key] !== null) {
            result += [indent, '"', key, '"\n', indent, '{\n', create(object[key], level + 1), indent, '}\n'].join('');
        } else {
            result += [indent, '"', key, '"', x, x, '"', String(object[key]), '"\n'].join('');
        }
    }

    return result;
};
