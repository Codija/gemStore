(function() {
	var app = angular.module('gemStore', ['store-directives']);
	
	app.controller('StoreController', ['$scope', '$http', function($scope, $http){
	    var store = this;
	    store.products = [];
	    this.reviews = {};
	    $http.get('storeProducts.json').then(function(data) {
	    	store.products = data.data;
    		var loc = localStorage.getItem('review');
      		loc = JSON.parse(loc) || [];
      		var sav = store.products[0].reviews = loc;
      		angular.forEach(loc, function(value, key) {
			  console.log(value);
			});
	    	console.log(loc);
	    }, function(error){
	    	console.log(error);
	    });

	}]);

	app.controller('ReviewController', function() {
	    //this.reviews = {};
	    this.addReview = function(product) {
	      	product.reviews.push(this.reviews);
	      	localStorage.setItem('review', JSON.stringify(product.reviews));
	      	this.reviews = {};
		};
	});
}());
