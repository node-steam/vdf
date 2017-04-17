const vdf = require('@node-steam/vdf');

const object = {
    description: 'This is a example object!',
    boolean: true,
    number: 529,
};

const x = vdf.stringify(object, true);

return x;
