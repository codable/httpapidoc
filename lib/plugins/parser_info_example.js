// Same as @apiexample
var apiExample = require("./parser_example.js");

function pushTo()
{
	return "local.info.examples";
}

/**
 * Exports.
 */
module.exports = {
	parse: apiExample.parse,
	pushTo: pushTo
};
