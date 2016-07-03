function RemoveElements(args) {
    // body...
    var array = args,
        remove = array[0],
        result = [],
        i;

    Array.prototype.removeel = function(a) {
        // body...
        for (i in this) {
            if (this[i] !== a && typeof this[i] !== 'function') {
                result.push(this[i]);
            }
        }
        return result;
    };
    console.log(array.removeel(remove).join('\n'));

}

RemoveElements(['1', '2', '3', '2', '1', '2', '3', '2']);
RemoveElements(['_h/_', '^54F#', 'V', '^54F#', 'Z285', 'kv?tc`', '^54F#', '_h/_', 'Z285', '_h/_', 'kv?tc`', 'Z285', '^54F#', 'Z285', 'Z285', '_h/_', '^54F#', 'kv?tc`', 'kv?tc`', 'Z285']);
