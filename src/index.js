module.exports = function check(str, bracketsConfig) {
	let input = str.split(''),
		result = [];

	if ( str.length  % 2 != 0) {
		return false;
	}

	for (let i = 0; i < input.length; i++) {
		for (let j = 0; j < bracketsConfig.length; j++) {

			if ( input[i] == bracketsConfig[j][1] && result[result.length - 1] == bracketsConfig[j][0] ) {
				result.pop( input[i] )
			}else if ( input[i] == bracketsConfig[j][0] ) {
				result.push(input[i]);
			}
		}
	}

	return result.length ? false : true;
}
