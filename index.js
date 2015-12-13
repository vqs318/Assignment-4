//Introduce a new namespace (function scope)
(function(){

	window.onload = function() {
  cartodb.createVis('map', 'https://vqs318.cartodb.com/api/v2/viz/532ba8da-9db5-11e5-9aa9-0ef7f98ade21/viz.json');
}
})();