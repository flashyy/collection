'use strict';

function collect_all_even(collection) {
	var collection_b = [];
        var j =0;
        for (var i = 0; i < collection.length; i++) {
        	if(collection[i]%2 ===0){
                collection_b[j] = collection[i];
                j++;
		}
        }
       return collection_b;
}

module.exports = collect_all_even;
