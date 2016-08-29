'use strict'

angular.module('main')
.controller('SidebarCtrl', function($scope, $state, $mdSidenav, $api) {
    $scope.list = [
        {
            name: "Sale",
            info: [
                {
                    label: 'Price Form',
                    icon: 'description',
                    name: 'Price Form',
                    link: "priceForm"
                },{
                    label: 'Price Report',
                    icon: 'list',
                    name: 'Price Report',
                    link: "priceReport"
                },{
                    label: 'Sale Form',
                    icon: 'description',
                    name: 'Sale Form',
                    link: "saleForm"
                },{
                    label: 'Sale Report',
                    icon: 'list',
                    name: 'Sale Report',
                    link: "saleReport"
                }
            ]
        },{
            name: "Admin",
            info: [
                {
                    label: 'Customer Form',
                    icon: 'description',
                    name: 'Customer Form',
                    link: "customerForm"
                },{
                    label: 'Customer Report',
                    icon: 'list',
                    name: 'Customer Report',
                    link: "customerReport"
                },{
                    label: 'Product Form',
                    icon: 'description',
                    name: 'Product Form',
                    link: "productForm"
                },{
                    label: 'Product Report',
                    icon: 'list',
                    name: 'Product Report',
                    link: "productReport"
                }
            ]
        }
    ];

    $scope.linkClick = function(link){
        $mdSidenav('right').toggle();
        $state.go(link);
    }
    
    $scope.titleClick = function(event){
        var dom = event.target;
        
        while(!dom.classList.contains("layout-padding")){
            dom = dom.parentElement;
        }
        
        if(dom.childNodes[3].classList.contains("hiddenContent")){
            if(dom.childNodes[3].className.indexOf(" hiddenContent") >= 0){
                dom.childNodes[3].className = dom.childNodes[3].className.replace(" hiddenContent", "");
            }
            else if(dom.childNodes[3].className.indexOf("hiddenContent") >= 0){
                dom.childNodes[3].className = dom.childNodes[3].className.replace("hiddenContent", "");
            }
        }
        else{
            dom.childNodes[3].classList = dom.childNodes[3].classList + " hiddenContent";
        }
    }
});