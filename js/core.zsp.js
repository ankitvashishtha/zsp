var baseUrl = 'http://localhost:34121/';
//var baseUrl = 'http://jarvis/zspApi/';
var app = angular.module('zspApp', ['ui.router', 'ngParallax', 'ngMaterial']);
app.run(function ($rootScope) {
    $rootScope.tableId = 0;
})
app.config(function ($stateProvider, $urlRouterProvider, $mdThemingProvider) {
    $mdThemingProvider.theme('dark-blue').backgroundPalette('blue').dark();
    $urlRouterProvider.otherwise('/home');
    var entry = function () {
        if (sessionStorage.IsLogedIn)
            return 'entry';
        else
            return 'home';
    }
    var entryUrl=''
    $stateProvider
        // HOME STATES AND NESTED VIEWS ========================================
        .state('home', {
            url: '/home',
            templateUrl: 'page/zspHome.html'
        })
     .state('login', {
         url: '/login',
         templateUrl: 'page/zspLogin.html'
     })
       .state('part1_1', {
           url: '/part1_1',
           templateUrl: 'page/part1_1.html'
       })
        .state('viewpart1_1', {
            url: '/view1_1',
            templateUrl: 'view/part1_1.html'
        })
         .state('part1_2', {
             url: '/part1_2',
             templateUrl: 'page/part1_2.html'
         })
         .state('part1_3', {
             url: '/part1_3',
             templateUrl: 'page/part1_3.html'
         })
         .state('part1_4', {
             url: '/part1_4',
             templateUrl: 'page/part1_4.html'
         })
        .state('part3_1', {
            url: '/part3_1',
            templateUrl: 'page/part3_1.html'
        })
        .state('part3_2', {
            url: '/part3_2',
            templateUrl: 'page/part3_2.html'
        })
        .state('part3_3', {
            url: '/part3_3',
            templateUrl: 'page/part3_3.html'
        })
        .state('part3_4', {
            url: '/part3_4',
            templateUrl: 'page/part3_4.html'
        })
        .state('part3_5', {
            url: '/part3_5',
            templateUrl: 'page/part3_5.html'
        })
        .state('part3_6', {
            url: '/part3_6',
            templateUrl: 'page/part3_6.html'
        })
        .state('part3_7', {
            url: '/part3_7',
            templateUrl: 'page/part3_7.html'
        })
        .state('part3_8', {
            url: '/part3_8',
            templateUrl: 'page/part3_8.html'
        })
        .state('part3_9', {
            url: '/part3_9',
            templateUrl: 'page/part3_9.html'
        })
        .state('part3_10', {
            url: '/part3_10',
            templateUrl: 'page/part3_10.html'
        })
        .state('part3_11', {
            url: '/part3_11',
            templateUrl: 'page/part3_11.html'
        })
         .state('part3_12', {
             url: '/part3_12',
             templateUrl: 'page/part3_12.html'
         })
         .state('part3_13', {
             url: '/part3_13',
             templateUrl: 'page/part3_13.html'
         })
         .state('part3_14', {
             url: '/part3_14',
             templateUrl: 'page/part3_14.html'
         })
         .state('part3_15', {
             url: '/part3_15',
             templateUrl: 'page/part3_15.html'
         })
         .state('part3_16', {
             url: '/part3_16',
             templateUrl: 'page/part3_16.html'
         })
         .state('part3_17', {
             url: '/part3_17',
             templateUrl: 'page/part3_17.html'
         })
         .state('part4_1', {
             url: '/part4_1',
             templateUrl: 'page/part4_1.html'
         })
        .state('part4_2', {
            url: '/part4_2',
            templateUrl: 'page/part4_2.html'
        })
        .state('part4_3', {
            url: '/part4_3',
            templateUrl: 'page/part4_3.html'
        })
        .state('part5_1', {
            url: '/part5_1',
            templateUrl: 'page/part5_1.html'
        })
         .state('part5_2', {
             url: '/part5_2',
             templateUrl: 'page/part5_2.html'
         })
        .state('part6_1', {
            url: '/part6_1',
            templateUrl: 'page/part6_1.html'
        })
        .state('part6_2', {
            url: '/part6_2',
            templateUrl: 'page/part6_2.html'
        })
        .state('part6_3', {
            url: '/part6_3',
            templateUrl: 'page/part6_3.html'
        })
        .state('part7_1', {
            url: '/part7_1',
            templateUrl: 'page/part7_1.html'
        })
        .state('part7_2', {
            url: '/part7_2',
            templateUrl: 'page/part7_2.html'
        })
        .state('part7_3', {
            url: '/part7_3',
            templateUrl: 'page/part7_3.html'
        })
        .state('part8_1', {
            url: '/part8_1',
            templateUrl: 'page/part8_1.html'
        })
        .state('part8_2', {
            url: '/part8_2',
            templateUrl: 'page/part8_2.html'
        })
        .state('part8_3', {
            url: '/part8_3',
            templateUrl: 'page/part8_3.html'
        })
         .state('part9_1', {
             url: '/part9_1',
             templateUrl: 'page/part9_1.html'
         })
        .state('part9_2', {
            url: '/part9_2',
            templateUrl: 'page/part9_2.html'
        })
        .state('part9_3', {
            url: '/part9_3',
            templateUrl: 'page/part9_3.html'
        })
        .state('part9_4', {
            url: '/part9_4',
            templateUrl: 'page/part9_4.html'
        })
        .state('part9_5', {
            url: '/part9_5',
            templateUrl: 'page/part9_5.html'
        })
        .state('part9_6', {
            url: '/part9_6',
            templateUrl: 'page/part9_6.html'
        })
        .state('part9_7', {
            url: '/part9_7',
            templateUrl: 'page/part9_7.html'
        })
        .state('part9_8', {
            url: '/part9_8',
            templateUrl: 'page/part9_8.html'
        })
        .state('part9_9', {
            url: '/part9_9',
            templateUrl: 'page/part9_9.html'
        })
        .state('part9_10', {
            url: '/part9_10',
            templateUrl: 'page/part9_10.html'
        })
        .state('part9_11', {
            url: '/part9_11',
            templateUrl: 'page/part9_11.html'
        })
        .state('part9_12', {
            url: '/part9_12',
            templateUrl: 'page/part9_12.html'
        })
        .state('part9_13', {
            url: '/part9_13',
            templateUrl: 'page/part9_13.html'
        })
        .state('part9_14', {
            url: '/part9_14',
            templateUrl: 'page/part9_14.html'
        })
        .state('part9_15', {
            url: '/part9_15',
            templateUrl: 'page/part9_15.html'
        })
        .state('part9_16', {
            url: '/part9_16',
            templateUrl: 'page/part9_16.html'
        })
        .state('part9_17', {
            url: '/part9_17',
            templateUrl: 'page/part9_17.html'
        })
         .state('part10_1', {
             url: '/part10_1',
             templateUrl: 'page/part10_1.html'
         })
        .state('part10_2', {
            url: '/part10_2',
            templateUrl: 'page/part10_2.html'
        })
        .state('part10_3', {
            url: '/part10_3',
            templateUrl: 'page/part10_3.html'
        })
        .state('part10_4', {
            url: '/part10_4',
            templateUrl: 'page/part10_4.html'
        })
        .state('part10_5', {
            url: '/part10_5',
            templateUrl: 'page/part10_5.html'
        })
        .state('part10_6', {
            url: '/part10_6',
            templateUrl: 'page/part10_6.html'
        })
         .state('part11_1', {
             url: '/part11_1',
             templateUrl: 'page/part11_1.html'
         })
        .state('part11_2', {
            url: '/part11_2',
            templateUrl: 'page/part11_2.html'
        })
        .state('part12_1', {
            url: '/part12_1',
            templateUrl: 'page/part12_1.html'
        })
         .state('part12_2', {
             url: '/part12_2',
             templateUrl: 'page/part12_2.html'
         })
         .state('part12_3', {
             url: '/part12_3',
             templateUrl: 'page/part12_3.html'
         })
         .state('part12_4', {
             url: '/part12_4',
             templateUrl: 'page/part12_4.html'
         })
         .state('part12_5', {
             url: '/part12_5',
             templateUrl: 'page/part12_5.html'
         })
         .state('part12_6', {
             url: '/part12_6',
             templateUrl: 'page/part12_6.html'
         })
         .state('part12_7', {
             url: '/part12_7',
             templateUrl: 'page/part12_7.html'
         })
        .state('part13_1', {
            url: '/part13_1',
            templateUrl: 'page/part13_1.html'
        })
        .state('part14_1', {
            url: '/part14_1',
            templateUrl: 'page/part14_1.html'
        })
        .state('part14_2', {
            url: '/part14_2',
            templateUrl: 'page/part14_2.html'
        })
        .state('part15_1', {
            url: '/part15_1',
            templateUrl: 'page/part15_1.html'
        })
        .state('part15_2', {
            url: '/part15_2',
            templateUrl: 'page/part15_2.html'
        })
        .state('part15_3', {
            url: '/part15_3',
            templateUrl: 'page/part15_3.html'
        })
        .state('part15_4', {
            url: '/part15_4',
            templateUrl: 'page/part15_4.html'
        })
        .state('part15_5', {
            url: '/part15_5',
            templateUrl: 'page/part15_5.html'
        })

    .state('dashboard', {
        url: '/dashboard',
        templateUrl: 'page/zspDashboard.html'
    })
    .state('tables', {
        url: '/tables',
        templateUrl: 'page/zspTables.html'
    })
     .state('download', {
         url: '/download',
         templateUrl: 'page/zspDownload.html'
     })
     .state('entry', {
         url: '/entry',
         templateUrl: 'page/zspEntry.html',
     })
    ;

    // $locationProvider.html5Mode(true);
});
app.controller('homeCtrl', function ($scope, $http) {
    $scope.setMap = function () {
       // $scope.childData.sort($scope.SortByName);
        var width = 358,
    height = 470,
    centered;
        d3.select("#mapsvg").remove();
        var feature = "";
        var projection = d3.geo.mercator().scale(4000)
             .center([82.3224595, 20.97702712140104])
            .translate([width / 2, height / 2]);
        var path = d3.geo.path().projection(projection);

        d3.json('map/cg149.json', function (data) {
        
            var canvas = d3.select("body").select("#map").append("svg").attr("id", "mapsvg")
    .attr("width", 350).attr("height", 470);
            var group = canvas.selectAll("g")
            .data(data.features)
            .enter()
            .append("g")
        .on("click", clicked);
           
            var tooltip = d3.select("body")
    .append("div")
    .attr("class", "tooltip")
    .style("opacity", 0);
            var area = group.append("path")
            .attr("d", path)
           //     .attr("class","mapcolor")
           .style("fill", function (d, i) { return d.properties.color; })
            .style("stroke", "white")
               // .style("stroke:hover", "black")

    .on("mouseover", mouseover)
    .on("mousemove", mousemove)
    .on("mouseout", mouseout).style("stroke-width", 1);
            
        
            function mouseover(d, i) {
                //d3.select("body").style("stroke-width", '4px')
                tooltip.transition()
                  .duration(200)
                  .style("opacity", .7);
               
            }
            function mousemove(d, i) {
                tooltip.html("District: "+d.properties.District+ "<br/> Tehsil: "+d.properties.NAME1_)
                  .style("left", (d3.event.pageX - 35) + "px")
                  .style("top", (d3.event.pageY - 110) + "px");
            }
            function mouseout() {
                tooltip.transition()
                  .duration(500)
                  .style("opacity", 0);

            }
            function clicked(d) {
                //zoom function start
                var x, y, k;
                if (d && centered !== d) {
                    var centroid = path.centroid(d);
                    x = centroid[0];
                    y = centroid[1];
                    k = 4;
                    centered = d;
                } else {
                    x = width / 2;
                    y = height / 2;
                    k = 1;
                    centered = null;
                }
                group.selectAll("path")
                    .classed("active", centered && function (d) { return d === centered; });
                group.transition()
                    .duration(750)
                    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")scale(" + k + ")translate(" + -x + "," + -y + ")")
                    .style("stroke-width", 1.5 / k + "px");
                // zoom function end
            }
        });
    }
    $scope.setMap();
});
app.controller('entryCtrl', function ($scope, $http, $state, $rootScope) {
    // check for login
    if (!sessionStorage.IsLogedIn)
        $state.go('home');

    $scope.years = [{ 'id': '1', 'yearName': '2014' }, { 'id': '2', 'yearName': '2015' }];
    $scope.year = $scope.years[0];
    $scope.part = sessionStorage.currentPart;
    sessionStorage.yearId = $scope.year.id;
    sessionStorage.yearName = $scope.year.yearName;
    $scope.getTableName = function () {
        sessionStorage.currentPart = $scope.part;
        $scope.isLoading = true;
        $http({
            method: "GET",
            url: baseUrl+'api/login/getTableName',
            params: { partId: $scope.part, yearId: $scope.year.id, districtId: sessionStorage.areaId }
        }).then(function mySucces(response) {
            $scope.tables = $scope.chunk(response.data,3);
            partId = $scope.part;
            $scope.isLoading = false;
        }, function myError(response) {
            $.prompt("Error Get form");
        });
    }
    $scope.chunk = function (arr, size) {
        var newArr = [];
        for (var i = 0; i < arr.length; i += size) {
            newArr.push(arr.slice(i, i + size));
        }
        return newArr;
    }
    $scope.setYear = function () {
        sessionStorage.yearId = $scope.year.id;
        sessionStorage.yearName = $scope.year.yearName;
        $scope.getTableName();
    }
    $scope.redirect = function (item) {
        sessionStorage.indexId = item.comments;
        sessionStorage.tableNo = item.TableNo;
    }
    $scope.getTableName();
})

app.controller('loginController', function ($scope, LoginService) {
    $scope.IsLogedIn = sessionStorage.IsLogedIn;
    if (sessionStorage.IsLogedIn) {
        $scope.Message = sessionStorage.Message;
        $('#logout').show();
        $('#login').hide();
        $('#liEntry').show();
    }
    else {
        $scope.Message = '';
        $('#logout').hide();
        $('#login').show();
        $('#liEntry').hide();

    }
    $scope.Submitted = false;
    $scope.IsFormValid = false;

    $scope.LoginData = {
        Username: '',
        Password: ''
    };

    //Check is Form Valid or Not // Here f1 is our form Name
    $scope.$watch('f1.$valid', function (newVal) {
        $scope.IsFormValid = newVal;
    });

    $scope.Login = function () {
        $scope.isLoading = true;
        $scope.Submitted = true;
        if ($scope.IsFormValid) {
            LoginService.GetUser($scope.LoginData).then(function (d) {
                if (d.data !== null) {
                    sessionStorage.IsLogedIn = true;
                    $scope.IsLogedIn = true;
                    $('#logout').show();
                    $('#login').hide();
                    $('#liEntry').show();
                    //$scope.$apply();
                    sessionStorage.Message = d.data.firstName + ' ' + d.data.lastName;
                    $('#name').text(sessionStorage.Message)  ;
                    sessionStorage.id = d.data.id;
                    sessionStorage.areaId = d.data.areaId;
                    sessionStorage.roleId = d.data.roleId;
                    sessionStorage.currentPart = 1;
                    //$scope.LoginData.fullName = d.data.fullName;
                    window.location.href = '#/entry';
                }
                else {
                    $.prompt('Invalid Credential!');
                    $scope.isLoading = false;
                }
            });
        }
    };
    $scope.logout = function () {
        delete sessionStorage.Message;
        delete sessionStorage.IsLogedIn;
        $scope.IsLogedIn = false;
        $('#logout').hide();
        $('#login').show();
        $('#liEntry').hide();
        $('#name').text('');
        $scope.Message = '';
        window.location.href = '#/home';
    };
})
            .factory('LoginService', function ($http) {
                var fac = {};
                fac.GetUser = function (d) {
                    return $http({
                        url: baseUrl+'api/login/getUser',
                        method: 'GET',
                        params: { userName:d.Username, password:d.Password }
                    });
                };
                return fac;
            });

$('.message a').click(function () {
    $('form').animate({ height: "toggle", opacity: "toggle" }, "slow");
});
$('.nav-tabs a').click(function () {
    $(this).tab('show');
})
var onlyNum = function (elementRef) {
    var keyCodeEntered = (event.which) ? event.which : (window.event.keyCode) ? window.event.keyCode : -1;

    // Un-comment to discover a key that I have forgotten to take into account...
    //alert(keyCodeEntered);

    if ((keyCodeEntered >= 48) && (keyCodeEntered <= 57)) {
        return true;
    }

        // '-' sign...
    else if (keyCodeEntered === 45) {
        // Allow only 1 minus sign ('-')...
        // if ((elementRef.value) && (elementRef.value.indexOf('-') >= 0))
        return false;
        //   else
        //      return true;
    }
    //        // '.' decimal point...
    //        else if (keyCodeEntered == 46) {
    //            // Allow only 1 decimal point ('.')...
    //            if ((elementRef.value) && (elementRef.value.indexOf('.') >= 0))
    //                return false;
    //            else
    //                return true;
    //        }

    return false;
}
var onlyFloat = function (elementRef) {
    var keyCodeEntered = (event.which) ? event.which : (window.event.keyCode) ? window.event.keyCode : -1;

    // Un-comment to discover a key that I have forgotten to take into account...
    //alert(keyCodeEntered);

    if ((keyCodeEntered >= 48) && (keyCodeEntered <= 57)) {
        return true;
    }

        // '-' sign...
    else if (keyCodeEntered === 45) {
        // Allow only 1 minus sign ('-')...
        // if ((elementRef.value) && (elementRef.value.indexOf('-') >= 0))
        return false;
        //   else
        //      return true;
    }
            // '.' decimal point...
            else if (keyCodeEntered == 46) {
                // Allow only 1 decimal point ('.')...
                if ((elementRef.value) && (elementRef.value.indexOf('.') >= 0))
                    return false;
                else
                    return true;
            }

    return false;
}