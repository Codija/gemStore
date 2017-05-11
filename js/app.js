(function() {
	var app = angular.module('gemStore', ['store-directives']);
	
	app.controller('StoreController', ['$http', function($http){
	    var store = this;
	    store.products = [];
	    $http.get('storeProducts.json').then(function(data) {
	    	store.products = data.data;
	    	console.log(store.products);
	    }, function(error){
	    	console.log(error);
	    });
	}]);

	app.controller('ReviewController', function() {
	    this.reviews = {};

	    this.addReview = function(product) {
	      	product.reviews.push(this.reviews);

	      	this.reviews = {};
	    };
	});
}());