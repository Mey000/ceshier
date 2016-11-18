angular.module('news',[])
.controller('con',function($scope,$http,gon){
	gon.getajax('http://www.somenote.cn:1510/test','get',function(data){
		$scope.data=data;
	})
	gon.getajax('http://www.somenote.cn:1510/aut','get',function(data){
		$scope.data1=data;
	})
	gon.getajax('http://www.somenote.cn:1510/test2','get',function(data){
		$scope.data2=data;
	})
})
.service('gon',function($http){
	return { 
		getajax:function(add,way,callback){
			$http({
				url:add,
				method:way
			}).success(function(e){
				callback(e)
			})
		}
	}
	})
   .directive('mky',function(){
   	return{
   		restrict:'AEMC',
		template:
				'<section>'
			  		+'<div class="con_left">'
				  		+'<ul class="list1">'
				  			+'<li ng-repeat="i in dat">{{i.title | mey }}</li>'
				  			+'<li ng-repeat="i in d">{{i.title | mey }}</li>'
				  		+'</ul>'
			  		+'</div>'
			  		+'<div class="con_mid"><div ng-repeat="i in da">'
			  		+'<img ng-src={{i.img}} /></div></div>'
			  		+'<div class="con_right">'
			  		+'</div></section>',
   		transclude: true,
		scope:{dat:"=a",da:'=b',d:'=c'}
		
   	}
   })
 .filter('mey',function(){
 	return function(e){
				if (e.length>10) {
					return e.slice(0,10)+"***"
				} else{
					return e
				}
			}
 })
