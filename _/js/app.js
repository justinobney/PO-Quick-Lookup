var app = (function() {
	/**
	 @private function: Used in quick_sort
	 */
	function partition(array, begin, end, pivot) {
		var piv = array[pivot];
		array.swap(pivot, end - 1);
		var store = begin;
		var ix;
		for( ix = begin; ix < end - 1; ++ix) {
			if(array[ix] <= piv) {
				array.swap(store, ix);
				++store;
			}
		}
		array.swap(end - 1, store);

		return store;
	}


	Array.prototype.swap = function(a, b) {
		var tmp = this[a];
		this[a] = this[b];
		this[b] = tmp;
	};
	/**
	 @private function: Used in quick_sort
	 */
	function qsort(array, begin, end) {
		if(end - 1 > begin) {
			var pivot = begin + Math.floor(Math.random() * (end - begin));
			pivot = partition(array, begin, end, pivot);

			qsort(array, begin, pivot);
			qsort(array, pivot + 1, end);
		}
	}

	function quick_sort(array) {
		qsort(array, 0, array.length);
	};

	return {
		sortArray : quick_sort
	}
})(); 

(function($) {

	var o = $({});

	$.subscribe = function() {
		o.bind.apply(o, arguments);
	};

	$.unsubscribe = function() {
		o.unbind.apply(o, arguments);
	};

	$.publish = function() {
		o.trigger.apply(o, arguments);
	};
})(jQuery);
