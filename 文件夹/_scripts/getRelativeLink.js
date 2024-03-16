/**
 *
 * @param sourceFilePath Path of the file, in which the links are going to be used
 * @param linkedFilePath File path, which will be referred in the source file
 * @returns
 */
function getRelativeLink(sourceFilePath, linkedFilePath) {
    function trim(arr) {
        let start = 0;
        for (; start < arr.length; start++) {
            if (arr[start] !== '')
                break;
        }
        var end = arr.length - 1;
        for (; end >= 0; end--) {
            if (arr[end] !== '')
                break;
        }
        if (start > end)
            return [];
        return arr.slice(start, end - start + 1);
    }
    var fromParts = trim(sourceFilePath.split('/'));
    var toParts = trim(linkedFilePath.split('/'));
    var length = Math.min(fromParts.length, toParts.length);
    var samePartsLength = length;
    for (var i = 0; i < length; i++) {
        if (fromParts[i] !== toParts[i]) {
            samePartsLength = i;
            break;
        }
    }
    var outputParts = [];
    for (var i = samePartsLength; i < fromParts.length - 1; i++) {
        outputParts.push('..');
    }
    outputParts = outputParts.concat(toParts.slice(samePartsLength));
    return outputParts.join('/');
}
module.exports = getRelativeLink;
