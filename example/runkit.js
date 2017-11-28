const vdf = require('@node-steam/vdf');

const string =
`"string"          "string"
"false"           "false"
"true"            "true"
"number"          "1234"
"float"           "12.34"
"null"            "null"
"undefined"       "undefined"
"nested"
{
    "string"      "string"
    "deep"
    {
        "string"  "string"
    }
}`;

vdf.parse(string);
