app.controller('part1Ctrl', function ($scope, $http, $state) {
    // check for login
    if (!sessionStorage.IsLogedIn)
        $state.go('home');
    //var self = this;
    sessionStorage.currentPart = 1;
    $scope.index = {};
    $scope.yearName = sessionStorage.yearName;
    $scope.getEntryForm = function () {
        $scope.isLoading = true;
        $http({
            method: "GET",
            url: baseUrl + 'api/entry/getEntryForm',
            params: { districtId: sessionStorage.areaId }
        }).then(function mySucces(response) {
            $scope.formTable = response.data;
            $scope.isLoading = false;
        }, function myError(response) {
            $.prompt("Error Get form");
        });
    }
    $scope.getEditForm = function () {
        $scope.isLoading = true;
        $http({
            method: "GET",
            url: baseUrl + 'api/entry/getEditForm1',
            params: { indexId: sessionStorage.indexId }
        }).then(function mySucces(response) {
            $scope.index = response.data[0];
            $scope.formTable = response.data[1];
            $scope.isLoading = false;
        }, function myError(response) {
            $.prompt("Error Get form");
        });
    }
    $scope.totalCheck1 = function () {
        $scope.IsFormValid = true;
        $scope.totalError = false;
        var parent = $scope.formTable[$scope.formTable.length - 1]
        var tarea = 0, ttotalVillage = 0, thabitatVillage = 0, tgramPanchayat = 0, tblock = 0, tnagarNigam = 0, tnagarPalika = 0, tnagarPanchayat = 0, tsubDivision = 0,
            trevenueInspectorCircle = 0, tpatwariHalke = 0, tsamanyaArakshiThana = 0, ttravellingReservationCentre = 0, telectrilizeedVillage = 0, tDWFVillage = 0;

        for (i = 0; i < $scope.formTable.length - 1; i++) {
            tarea = tarea + parseFloat($scope.formTable[i].area);
            ttotalVillage = ttotalVillage + parseInt($scope.formTable[i].totalVillage);
            thabitatVillage = thabitatVillage + parseInt($scope.formTable[i].habitatVillage);
            tgramPanchayat = tgramPanchayat + parseInt($scope.formTable[i].gramPanchayat);
            tblock = tblock + parseInt($scope.formTable[i].block);
            tnagarNigam = tnagarNigam + parseInt($scope.formTable[i].nagarNigam);
            tnagarPalika = tnagarPalika + parseInt($scope.formTable[i].nagarPalika);
            tnagarPanchayat = tnagarPanchayat + parseInt($scope.formTable[i].nagarPanchayat);
            tsubDivision = tsubDivision + parseInt($scope.formTable[i].subDivision);
            trevenueInspectorCircle = trevenueInspectorCircle + parseInt($scope.formTable[i].revenueInspectorCircle);
            tpatwariHalke = tpatwariHalke + parseInt($scope.formTable[i].patwariHalke);
            tsamanyaArakshiThana = tsamanyaArakshiThana + parseInt($scope.formTable[i].samanyaArakshiThana);
            ttravellingReservationCentre = ttravellingReservationCentre + parseInt($scope.formTable[i].travellingReservationCentre);
            telectrilizeedVillage = telectrilizeedVillage + parseInt($scope.formTable[i].electrilizeedVillage);
            tDWFVillage = tDWFVillage + parseInt($scope.formTable[i].DWFVillage);
        }
        if (tarea == parent.area) {
            $scope.varea = 'has-success';

        }
        else {
            $scope.totalError = true; $scope.varea = 'has-error'; $scope.errorMsg = "Total not match";
        }
        if (ttotalVillage == parent.totalVillage) {
            $scope.vtotalVillage = 'has-success';
        }
        else {
            $scope.totalError = true; $scope.vtotalVillage = 'has-error'; $scope.errorMsg = "Total not match";
        }
        if (thabitatVillage == parent.habitatVillage) {
            $scope.vhabitatVillage = 'has-success';
        }
        else {
            $scope.totalError = true; $scope.vhabitatVillage = 'has-error'; $scope.errorMsg = "Total not match";
        }
        if (tgramPanchayat == parent.gramPanchayat) {
            $scope.vgramPanchayat = 'has-success';
        }
        else {
            $scope.totalError = true; $scope.vgramPanchayat = 'has-error'; $scope.errorMsg = "Total not match";
        }
        if (tblock == parent.block) {
            $scope.vblock = 'has-success';
        }
        else {
            $scope.totalError = true; $scope.vblock = 'has-error'; $scope.errorMsg = "Total not match";
        }
        if (tnagarNigam == parent.nagarNigam) {
            $scope.vnagarNigam = 'has-success';
        }
        else {
            $scope.totalError = true; $scope.vnagarNigam = 'has-error'; $scope.errorMsg = "Total not match";
        }
        if (tnagarPalika == parent.nagarPalika) {
            $scope.vnagarPalika = 'has-success';
        }
        else {
            $scope.totalError = true; $scope.vnagarPalika = 'has-error'; $scope.errorMsg = "Total not match";
        }
        if (tnagarPanchayat == parent.nagarPanchayat) {
            $scope.vnagarPanchayat = 'has-success';
        }
        else {
            $scope.totalError = true; $scope.vnagarPanchayat = 'has-error'; $scope.errorMsg = "Total not match";
        }
        if (tsubDivision == parent.subDivision) {
            $scope.vsubDivision = 'has-success';
        }
        else {
            $scope.totalError = true; $scope.vsubDivision = 'has-error'; $scope.errorMsg = "Total not match";
        }
        if (trevenueInspectorCircle == parent.revenueInspectorCircle) {
            $scope.vrevenueInspectorCircle = 'has-success';
        }
        else {
            $scope.totalError = true; $scope.vrevenueInspectorCircle = 'has-error'; $scope.errorMsg = "Total not match";
        }
        if (tpatwariHalke == parent.patwariHalke) {
            $scope.vpatwariHalke = 'has-success';
        }
        else {
            $scope.totalError = true; $scope.vpatwariHalke = 'has-error'; $scope.errorMsg = "Total not match";
        }
        if (tsamanyaArakshiThana == parent.samanyaArakshiThana) {
            $scope.vsamanyaArakshiThana = 'has-success';
        }
        else {
            $scope.totalError = true; $scope.vsamanyaArakshiThana = 'has-error'; $scope.errorMsg = "Total not match";
        }
        if (ttravellingReservationCentre == parent.travellingReservationCentre) {
            $scope.vtravellingReservationCentre = 'has-success';
        }
        else {
            $scope.totalError = true; $scope.vtravellingReservationCentre = 'has-error'; $scope.errorMsg = "Total not match";
        }
        if (telectrilizeedVillage == parent.electrilizeedVillage) {
            $scope.velectrilizeedVillage = 'has-success';
        }
        else {
            $scope.totalError = true; $scope.velectrilizeedVillage = 'has-error'; $scope.errorMsg = "Total not match";
        }
        if (tDWFVillage == parent.DWFVillage) {
            $scope.vDWFVillage = 'has-success';
        }
        else {
            $scope.totalError = true; $scope.vDWFVillage = 'has-error'; $scope.errorMsg = "Total not match";
        }
    }
    $scope.clmCheck1 = function () {
        $scope.clmError = false;
        $scope.errorMsg = '';
        for (i = 0; i < $scope.formTable.length - 1; i++) {
            if (parseInt($scope.formTable[i].totalVillage) < parseInt($scope.formTable[i].habitatVillage)) {
                $scope.clmError = true;
                $scope.errorMsg += "<br/> <b>" + $scope.formTable[i].areaName + "-</b> आबाद ग्रामों की संख्या, कुल ग्रामों की संख्या से अधिक नहीं हो सकती";
                self.tabIndex = 0;

            }
            if (parseInt($scope.formTable[i].gramPanchayat) < parseInt($scope.formTable[i].totalVillage)) {
                $scope.clmError = true;
                $scope.errorMsg += "<br/><b>" + $scope.formTable[i].areaName + "-</b> ग्रामपंचायतो , कुल ग्रामों की संख्या की संख्या से अधिक नहीं हो सकती";
                self.tabIndex = 0;
            }
            if (parseInt($scope.formTable[i].electrilizeedVillage) > parseInt($scope.formTable[i].habitatVillage)) {
                $scope.clmError = true;
                $scope.errorMsg += "<br/><b>" + $scope.formTable[i].areaName + "-</b> विद्धुतिकृत ग्रामों की संख्या, आबाद ग्रामों की संख्या से अधिक नहीं हो सकती";
                self.tabIndex = 0;
            }
            if (parseInt($scope.formTable[i].DWFVillage) > parseInt($scope.formTable[i].habitatVillage)) {
                $scope.clmError = true;
                $scope.errorMsg += "<br/><b>" + $scope.formTable[i].areaName + "-</b> पेयजल सुविधा युक्त ग्रामों की संख्या, आबाद ग्रामों की संख्या से अधिक नहीं हो सकती";
                self.tabIndex = 0;
            }
        }
    }
    $scope.clmCheck2 = function () {
        $scope.clmError = false;
        $scope.errorMsg = '';
        for (i = 0; i < $scope.formTable.length ; i++) {
            if (parseFloat($scope.formTable[i].bottomLatitude) >= parseFloat($scope.formTable[i].topLatitude)) {
                $scope.clmError = true;
                $scope.errorMsg += "<br/> <b>" + $scope.formTable[i].areaName + "-</b> अक्षांस का मान कम से जादा होना चाहिए ";
                self.tabIndex = 0;

            }
            if (parseFloat($scope.formTable[i].leftLongitude) >= parseFloat($scope.formTable[i].rightLongitude)) {
                $scope.clmError = true;
                $scope.errorMsg += "<br/><b>" + $scope.formTable[i].areaName + "-</b> देशांतर का मान कम से जादा होना चाहिए ";
                self.tabIndex = 0;
            }
        }
    }
    $scope.checkMinMax2 = function () {
        $scope.minMaxError = false;
        $scope.errorMsg = '';
        for (i = 0; i < $scope.formTable.length ; i++) {
            if (parseFloat($scope.formTable[i].bottomLatitude) < 17 || parseFloat($scope.formTable[i].topLatitude) < 17 || parseFloat($scope.formTable[i].bottomLatitude) > 25 || parseFloat($scope.formTable[i].topLatitude) > 25) {
                $scope.minMaxError = true;
                $scope.errorMsg += "<br/> <b>" + $scope.formTable[i].areaName + "-</b> छत्तीसगढ़ प्रदेश लगभग 17  से 25  उत्तर तक अक्षांश  में है   ";
            }
            if (parseFloat($scope.formTable[i].leftLongitude) < 80 || parseFloat($scope.formTable[i].rightLongitude) < 80 || parseFloat($scope.formTable[i].leftLongitude) > 85 || parseFloat($scope.formTable[i].rightLongitude) > 85) {
                $scope.minMaxError = true;
                $scope.errorMsg += "<br/> <b>" + $scope.formTable[i].areaName + "-</b>  छत्तीसगढ़ प्रदेश लगभग 80  से 85  पूर्व देशांतर में   है ";
            }
        }
    }
    $scope.checkAvg3 = function () {
        $scope.avgError = false;
        $scope.errorMsg = '';
        for (i = 0; i < $scope.formTable.length ; i++) {
            var avg = 0;
            avg = (parseFloat($scope.formTable[i].jan) + parseFloat($scope.formTable[i].fab) + parseFloat($scope.formTable[i].mar) + parseFloat($scope.formTable[i].apr) + parseFloat($scope.formTable[i].may) + parseFloat($scope.formTable[i].jun) + parseFloat($scope.formTable[i].jul) + parseFloat($scope.formTable[i].aug) + parseFloat($scope.formTable[i].sep) + parseFloat($scope.formTable[i].oct) + parseFloat($scope.formTable[i].nov) + parseFloat($scope.formTable[i].dec)) / 12;
            if (parseFloat($scope.formTable[i].avgRain) != avg) {
                $scope.avgError = true;
                $scope.errorMsg += "<br/> <b>" + $scope.formTable[i].areaName + "-</b> Avg does not match. ";
            }
        }
    }
    $scope.checkMinMax4 = function () {
        $scope.minMaxError = false;
        $scope.errorMsg = '';
        var lastObj = $scope.formTable.length - 1;
        if (parseInt($scope.formTable[lastObj].minJan) > parseInt($scope.formTable[lastObj].maxJan)) {
            $scope.minMaxError = true;
            $scope.errorMsg += "<br/> <b>जनवरी- </b> न्यूनतम तापमान, अधिकतम तापमान से अधिक नहीं हो सकता ";
        }
        if (parseInt($scope.formTable[lastObj].minFeb) > parseInt($scope.formTable[lastObj].maxFab)) {
            $scope.minMaxError = true;
            $scope.errorMsg += "<br/> <b>फ़रवरी- </b> न्यूनतम तापमान, अधिकतम तापमान से अधिक नहीं हो सकता ";
        }
        if (parseInt($scope.formTable[lastObj].minMar) > parseInt($scope.formTable[lastObj].maxMar)) {
            $scope.minMaxError = true;
            $scope.errorMsg += "<br/> <b> मार्च- </b> न्यूनतम तापमान, अधिकतम तापमान से अधिक नहीं हो सकता ";
        }
        if (parseInt($scope.formTable[lastObj].minApr) > parseInt($scope.formTable[lastObj].maxApr)) {
            $scope.minMaxError = true;
            $scope.errorMsg += "<br/> <b>अप्रैल - </b> न्यूनतम तापमान, अधिकतम तापमान से अधिक नहीं हो सकता ";
        }
        if (parseInt($scope.formTable[lastObj].minMay) > parseInt($scope.formTable[lastObj].maxMay)) {
            $scope.minMaxError = true;
            $scope.errorMsg += "<br/> <b>मई- </b> न्यूनतम तापमान, अधिकतम तापमान से अधिक नहीं हो सकता ";
        }
        if (parseInt($scope.formTable[lastObj].minJun) > parseInt($scope.formTable[lastObj].maxJun)) {
            $scope.minMaxError = true;
            $scope.errorMsg += "<br/> <b> जून- </b> न्यूनतम तापमान, अधिकतम तापमान से अधिक नहीं हो सकता ";
        }
        if (parseInt($scope.formTable[lastObj].minJul) > parseInt($scope.formTable[lastObj].maxJul)) {
            $scope.minMaxError = true;
            $scope.errorMsg += "<br/> <b> जुलाई- </b> न्यूनतम तापमान, अधिकतम तापमान से अधिक नहीं हो सकता ";
        }
        if (parseInt($scope.formTable[lastObj].minAug) > parseInt($scope.formTable[lastObj].maxAug)) {
            $scope.minMaxError = true;
            $scope.errorMsg += "<br/> <b> अगस्त- </b> न्यूनतम तापमान, अधिकतम तापमान से अधिक नहीं हो सकता ";
        }
        if (parseInt($scope.formTable[lastObj].minSep) > parseInt($scope.formTable[lastObj].maxSep)) {
            $scope.minMaxError = true;
            $scope.errorMsg += "<br/> <b> सितंबर- </b> न्यूनतम तापमान, अधिकतम तापमान से अधिक नहीं हो सकता ";
        }
        if (parseInt($scope.formTable[lastObj].minOct) > parseInt($scope.formTable[lastObj].maxOct)) {
            $scope.minMaxError = true;
            $scope.errorMsg += "<br/> <b>अक्टूबर- </b> न्यूनतम तापमान, अधिकतम तापमान से अधिक नहीं हो सकता ";
        }
        if (parseInt($scope.formTable[lastObj].minNov) > parseInt($scope.formTable[lastObj].maxNov)) {
            $scope.minMaxError = true;
            $scope.errorMsg += "<br/> <b> नवंबर- </b> न्यूनतम तापमान, अधिकतम तापमान से अधिक नहीं हो सकता ";
        }
        if (parseInt($scope.formTable[lastObj].minDec) > parseInt($scope.formTable[lastObj].maxDec)) {
            $scope.minMaxError = true;
            $scope.errorMsg += "<br/> <b> दिसंबर- </b> न्यूनतम तापमान, अधिकतम तापमान से अधिक नहीं हो सकता ";
        }
    }

    $scope.$watch('f1.$valid', function (newVal) {
        $scope.IsFormValid = newVal;

    });
    $scope.save = function (tableNo) {
        //$scope.index = {};
        $scope.index.fYearId = sessionStorage.yearId;
        $scope.index.unit = " संख्या";
        $scope.index.createdBy = sessionStorage.id;
        $scope.index.tableNo = "1." + tableNo;
        $scope.index.districtId = sessionStorage.areaId;
        //$scope.note = " संख्या";
        var data = [$scope.index, $scope.formTable];
        if(tableNo==4)
            var entryMethod = "saveTable1_4";
        else
            var entryMethod = "saveTable1";
        if ($scope.IsFormValid) {
            if (tableNo == 1) {
                $scope.totalCheck1();
            }
            if (!$scope.totalError) {
                if (tableNo == 1) {
                    $scope.clmCheck1();
                }
                if (!$scope.clmError) {
                    $http({
                        method: "POST",
                        url: baseUrl + "api/entry/"+entryMethod,
                        data: data
                    }).then(function mySucces(response) {
                        var i = response;
                        $.prompt(response.data);
                    }, function myError(response) {
                        $.prompt("Error to insert data");
                    });
                }
                else {
                    $.prompt($scope.errorMsg);
                }
            }
            else {
                $.prompt($scope.errorMsg);
            }
        }
        else {
            $.prompt("<h4>कृपया त्रुटी सुधर करें</h4>");
        }
    }
    if (sessionStorage.indexId=='0')
        $scope.getEntryForm();
    else
        $scope.getEditForm();  
})
app.controller('part3Ctrl', function ($scope, $http, $state) {
    if (!sessionStorage.IsLogedIn)
        $state.go('home');
    sessionStorage.currentPart = 3;
    $scope.index = {};
    $scope.yearName = sessionStorage.yearName;
    $scope.getEntryForm = function () {
        $scope.isLoading = true;
        var entryMethodName = 'entry/getEntryForm';
        if (sessionStorage.tableNo == '3.17')
            entryMethodName = 'entry/getEntryForm3_17';
        $http({
            method: "GET",
            url: baseUrl + 'api/' + entryMethodName,
            params: { districtId: sessionStorage.areaId }
        }).then(function mySucces(response) {
            $scope.formTable = response.data;
            $scope.isLoading = false;
        }, function myError(response) {
            $.prompt("Error Get form");
        });
    }
    $scope.getEditForm = function () {
        $scope.isLoading = true;
        $http({
            method: "GET",
            url: baseUrl + 'api/entry/getEditForm3',
            params: { indexId: sessionStorage.indexId }
        }).then(function mySucces(response) {
            $scope.index = response.data[0];
            $scope.formTable = response.data[1];
            $scope.isLoading = false;
        }, function myError(response) {
            $.prompt("Error Get form");
        });
    }
    $scope.$watch('f1.$valid', function (newVal) {
        $scope.IsFormValid = newVal;

    });
    $scope.totalCheck1 = function () {
        $scope.IsFormValid = true;
        $scope.totalError = false;
        var parent = $scope.formTable[$scope.formTable.length - 1]
        var tareAccToGP = 0, tvanKshetra = 0, tnotAvFoAgri = 0, totherLand = 0, tfallowLand = 0, tfallowGround = 0, tstarkArea = 0, ttotalArea = 0, tdoubleCrop = 0;

        for (i = 0; i < $scope.formTable.length - 1; i++) {
            tareAccToGP = tareAccToGP + parseInt($scope.formTable[i].areAccToGP);
            tvanKshetra = tvanKshetra + parseInt($scope.formTable[i].vanKshetra);
            tnotAvFoAgri = tnotAvFoAgri + parseInt($scope.formTable[i].notAvFoAgri);
            totherLand = totherLand + parseInt($scope.formTable[i].otherLand);
            tfallowLand = tfallowLand + parseInt($scope.formTable[i].fallowLand);
            tfallowGround = tfallowGround + parseInt($scope.formTable[i].fallowGround);
            tstarkArea = tstarkArea + parseInt($scope.formTable[i].starkArea);
            ttotalArea = ttotalArea + parseInt($scope.formTable[i].totalArea);
            tdoubleCrop = tdoubleCrop + parseInt($scope.formTable[i].doubleCrop);

        }
        if (tareAccToGP == parent.areAccToGP) {
            $scope.vareAccToGP = 'has-success';

        }
        else {
            $scope.totalError = true; $scope.vareAccToGP = 'has-error'; $scope.errorMsg = "Total not match";
        }
        if (tvanKshetra == parent.vanKshetra) {
            $scope.vvanKshetra = 'has-success';
        }
        else {
            $scope.totalError = true; $scope.vvanKshetra = 'has-error'; $scope.errorMsg = "Total not match";
        }
        if (tnotAvFoAgri == parent.notAvFoAgri) {
            $scope.vnotAvFoAgri = 'has-success';
        }
        else {
            $scope.totalError = true; $scope.vnotAvFoAgri = 'has-error'; $scope.errorMsg = "Total not match";
        }
        if (totherLand == parent.otherLand) {
            $scope.votherLand = 'has-success';
        }
        else {
            $scope.totalError = true; $scope.votherLand = 'has-error'; $scope.errorMsg = "Total not match";
        }
        if (tfallowLand == parent.fallowLand) {
            $scope.vfallowLand = 'has-success';
        }
        else {
            $scope.totalError = true; $scope.vfallowLand = 'has-error'; $scope.errorMsg = "Total not match";
        }
        if (tfallowGround == parent.fallowGround) {
            $scope.vfallowGround = 'has-success';
        }
        else {
            $scope.totalError = true; $scope.vfallowGround = 'has-error'; $scope.errorMsg = "Total not match";
        }
        if (tstarkArea == parent.starkArea) {
            $scope.vstarkArea = 'has-success';
        }
        else {
            $scope.totalError = true; $scope.vstarkArea = 'has-error'; $scope.errorMsg = "Total not match";
        }
        if (ttotalArea == parent.totalArea) {
            $scope.vtotalArea = 'has-success';
        }
        else {
            $scope.totalError = true; $scope.vtotalArea = 'has-error'; $scope.errorMsg = "Total not match";
        }
        if (tdoubleCrop == parent.doubleCrop) {
            $scope.vdoubleCrop = 'has-success';
        }
        else {
            $scope.totalError = true; $scope.vdoubleCrop = 'has-error'; $scope.errorMsg = "Total not match";
        }

    }
    $scope.totalCheck = function () {
        $scope.IsFormValid = true;
        var totalError = false;
        var parent = $scope.formTable[$scope.formTable.length - 1]
        for (x in $scope.formTable[0]) {
            if (x != 'areaId' && x != 'areaName' && x != '$$hashKey') {
                var total = 0;
                for (i = 0; i < $scope.formTable.length - 1; i++) {
                    total += parseFloat($scope.formTable[i][x]);
                }
                var vstr = 'v' + x;
                if (total == parent[x]) {
                    $scope[vstr] = 'has-success';
                }
                else {
                    totalError = true; $scope[vstr] = 'has-error'; $scope.errorMsg = "Total not match";
                }
            }
        }
        return totalError;
    }
    $scope.saveTable = function (tableNo) {
        $scope.index.fYearId = sessionStorage.yearId;
        $scope.index.createdBy = sessionStorage.id;
        $scope.index.tableNo = "3." + tableNo;
        $scope.index.districtId = sessionStorage.areaId;

        var data = [$scope.index, $scope.formTable];
        if ($scope.IsFormValid) {
            if (!$scope.totalCheck()) {
                $http({
                    method: "POST",
                    url: baseUrl + "api/entry/saveTable3",
                    data: data
                }).then(function mySucces(response) {
                    $.prompt(response.data);
                }, function myError(response) {
                    $.prompt("Error to insert data");
                });
            }
            else {
                $.prompt($scope.errorMsg);
            }
        }
        else {
            $.prompt("<h5>कृपया त्रुटी सुधर करें</h5>");
        }
    }

    if (sessionStorage.indexId == '0')
        $scope.getEntryForm();
    else
        $scope.getEditForm();
})
app.controller('part4Ctrl', function ($scope, $http, $state) {
    if (!sessionStorage.IsLogedIn)
        $state.go('home');
    $scope.index = {};
    $scope.yearName = sessionStorage.yearName;
    $scope.getEntryForm = function () {
        $scope.isLoading = true;
        $http({
            method: "GET",
            url: baseUrl + 'api/entry/getEntryForm4',
            params: { districtId: sessionStorage.areaId }
        }).then(function mySucces(response) {
            $scope.formTable = response.data;
            $scope.isLoading = false;
        }, function myError(response) {
            $.prompt("Error Get form");
        });
    }        
    $scope.$watch('f1.$valid', function (newVal) {
        $scope.IsFormValid = newVal;

    });
 
    $scope.totalCheck = function () {
        $scope.IsFormValid = true;
        var totalError = false;
        var parent = $scope.formTable[$scope.formTable.length - 1]
        for (x in $scope.formTable[0]) {
            if (x != 'areaId' && x != 'areaName' && x != '$$hashKey') {
                var total = 0;
                for (i = 0; i < $scope.formTable.length - 1; i++) {
                    total += parseFloat($scope.formTable[i][x]);
                }
                var vstr = 'v' + x;
                if (total == parent[x]) {
                    $scope[vstr] = 'has-success';
                }
                else {
                    totalError = true; $scope[vstr] = 'has-error'; $scope.errorMsg = "Total not match";
                }
            }
        }
        return totalError;
    }
    $scope.saveTable = function (tableNo) {
        $scope.index.fYearId = sessionStorage.yearId;
        $scope.index.createdBy = sessionStorage.id;
        $scope.index.tableNo = "4." + tableNo;
        $scope.index.districtId = sessionStorage.areaId;

        var data = [$scope.index, $scope.formTable];
        if ($scope.IsFormValid) {
            
                $http({
                    method: "POST",
                    url: baseUrl + "api/entry/saveTable4",
                    data: data
                }).then(function mySucces(response) {
                    $.prompt(response.data);
                }, function myError(response) {
                    $.prompt("Error to insert data");
                });
           
        }
        else {
            $.prompt("<h5>कृपया त्रुटी सुधर करें</h5>");
        }
    }

    $scope.getEntryForm();
})
app.controller('part5Ctrl', function ($scope, $http, $state) {
    if (!sessionStorage.IsLogedIn)
        $state.go('home');
    $scope.index = {};
    $scope.yearName = sessionStorage.yearName;
    $scope.getEntryForm = function () {
        $scope.isLoading = true;
        $http({
            method: "GET",
            url: baseUrl + 'api/entry/getEntryForm5',
            params: { districtId: sessionStorage.areaId }
        }).then(function mySucces(response) {
            $scope.formTable = response.data;
            $scope.emptyRow = angular.copy($scope.formTable[0]);
            $scope.isLoading = false;
        }, function myError(response) {
            $.prompt("Error Get form");
        });
    }
    $scope.getEditForm = function () {
        $scope.isLoading = true;
        $http({
            method: "GET",
            url: baseUrl + 'api/entry/getEditForm5',
            params: { indexId: sessionStorage.indexId }
        }).then(function mySucces(response) {
            $scope.index = response.data[0];
            $scope.formTable = response.data[1];
            $scope.emptyRow = angular.copy($scope.formTable[0]);
            $scope.emptyRow.id = 0;
            $scope.emptyRow.production = null;
            $scope.emptyRow.mineralName = null;
            $scope.emptyRow.price = null;
            $scope.isLoading = false;
        }, function myError(response) {
            $.prompt("Error Get form");
        });
    }
    $scope.$watch('f1.$valid', function (newVal) {
        $scope.IsFormValid = newVal;

    });
    $scope.totalCheck = function () {
        $scope.IsFormValid = true;
        var totalError = false;
        var parent = $scope.formTable[$scope.formTable.length - 1]
        for (x in $scope.formTable[0]) {
            if (x != 'areaId' && x != 'areaName' && x != '$$hashKey') {
                var total = 0;
                for (i = 0; i < $scope.formTable.length - 1; i++) {
                    total += parseFloat($scope.formTable[i][x]);
                }
                var vstr = 'v' + x;
                if (total == parent[x]) {
                    $scope[vstr] = 'has-success';
                }
                else {
                    totalError = true; $scope[vstr] = 'has-error'; $scope.errorMsg = "Total not match";
                }
            }
        }
        return totalError;
    }
    $scope.addRow = function () {
        $scope.formTable.push(angular.copy($scope.emptyRow));
    }
    $scope.removeRow = function (element) {
        const ind = $scope.formTable.indexOf(element);
        $scope.formTable.splice(ind, 1);
    }
    $scope.saveTable = function (tableNo) {
        $scope.index.fYearId = sessionStorage.yearId;
        $scope.index.createdBy = sessionStorage.id;
        $scope.index.tableNo = "5." + tableNo;
        $scope.index.districtId = sessionStorage.areaId;

        var data = [$scope.index, $scope.formTable];
        if ($scope.IsFormValid) {
          
                $http({
                    method: "POST",
                    url: baseUrl + "api/entry/saveTable5",
                    data: data
                }).then(function mySucces(response) {
                    $.prompt(response.data);
                    $state.go('entry');
                }, function myError(response) {
                    $.prompt("Error to insert data");
                });
            
           
        }
        else {
            $.prompt("<h5>कृपया त्रुटी सुधर करें</h5>");
        }
    }

    if (sessionStorage.indexId == '0')
        $scope.getEntryForm();
    else
        $scope.getEditForm();
})
app.controller('part6Ctrl', function ($scope, $http, $state){
    if (!sessionStorage.IsLogedIn)
        $state.go('home');
    $scope.index = {};
    $scope.yearName = sessionStorage.yearName;
    $scope.getEntryForm = function () {
        $scope.isLoading = true;
        $http({
            method: "GET",
            url: baseUrl + 'api/entry/getEntryForm',
            params: { districtId: sessionStorage.areaId }
        }).then(function mySucces(response) {
            $scope.formTable = response.data;
            $scope.isLoading = false;
        }, function myError(response) {
            $.prompt("Error Get form");
        });
    }
    $scope.$watch('f1.$valid', function (newVal) {
        $scope.IsFormValid = newVal;

    });
    $scope.totalCheck = function () {
        $scope.IsFormValid = true;
        var totalError = false;
        var parent = $scope.formTable[$scope.formTable.length - 1]
        for (x in $scope.formTable[0]) {
            if (x != 'areaId' && x != 'areaName' && x != '$$hashKey') {
                var total = 0;
                for (i = 0; i < $scope.formTable.length - 1; i++) {
                    total += parseFloat($scope.formTable[i][x]);
                }
                var vstr = 'v' + x;
                if (total == parent[x]) {
                    $scope[vstr] = 'has-success';
                }
                else {
                    totalError = true; $scope[vstr] = 'has-error'; $scope.errorMsg = "Total not match";
                }
            }
        }
        return totalError;
    }
    $scope.saveTable = function (tableNo) {
        $scope.index.fYearId = sessionStorage.yearId;
        $scope.index.createdBy = sessionStorage.id;
        $scope.index.tableNo = "6." + tableNo;
        $scope.index.districtId = sessionStorage.areaId;

        var data = [$scope.index, $scope.formTable];
        if ($scope.IsFormValid) {
            if (!$scope.totalCheck()) {
                $http({
                    method: "POST",
                    url: baseUrl + "api/entry/saveTable6",
                    data: data
                }).then(function mySucces(response) {
                    $.prompt(response.data);
                }, function myError(response) {
                    $.prompt("Error to insert data");
                });
            }
            else {
                $.prompt($scope.errorMsg);
            }
        }
        else {
            $.prompt("<h5>कृपया त्रुटी सुधर करें</h5>");
        }
    }

    $scope.getEntryForm();
})
app.controller('part7Ctrl', function ($scope, $http, $state) {
    if (!sessionStorage.IsLogedIn)
        $state.go('home');
    $scope.index = {};
    $scope.yearName = sessionStorage.yearName;
    $scope.getEntryForm = function () {
        $scope.isLoading = true;
        $http({
            method: "GET",
            url: baseUrl + 'api/entry/getEntryForm',
            params: { districtId: sessionStorage.areaId }
        }).then(function mySucces(response) {
            $scope.formTable = response.data;
            $scope.isLoading = false;
        }, function myError(response) {
            $.prompt("Error Get form");
        });
    }
    $scope.$watch('f1.$valid', function (newVal) {
        $scope.IsFormValid = newVal;

    });
    $scope.totalCheck = function () {
        $scope.IsFormValid = true;
        var totalError = false;
        var parent = $scope.formTable[$scope.formTable.length - 1]
        for (x in $scope.formTable[0]) {
            if (x != 'areaId' && x != 'areaName' && x != '$$hashKey') {
                var total = 0;
                for (i = 0; i < $scope.formTable.length - 1; i++) {
                    total += parseFloat($scope.formTable[i][x]);
                }
                var vstr = 'v' + x;
                if (total == parent[x]) {
                    $scope[vstr] = 'has-success';
                }
                else {
                    totalError = true; $scope[vstr] = 'has-error'; $scope.errorMsg = "Total not match";
                }
            }
        }
        return totalError;
    }
    $scope.saveTable = function (tableNo) {
        $scope.index.fYearId = sessionStorage.yearId;
        $scope.index.createdBy = sessionStorage.id;
        $scope.index.tableNo = "7." + tableNo;
        $scope.index.districtId = sessionStorage.areaId;

        var data = [$scope.index, $scope.formTable];
        if ($scope.IsFormValid) {
           
                $http({
                    method: "POST",
                    url: baseUrl + "api/entry/saveTable7",
                    data: data
                }).then(function mySucces(response) {
                    $.prompt(response.data);
                }, function myError(response) {
                    $.prompt("Error to insert data");
                });
           
        }
        else {
            $.prompt("<h5>कृपया त्रुटी सुधर करें</h5>");
        }
    }

    $scope.getEntryForm();
})
app.controller('part8Ctrl', function ($scope, $http, $state) {
    if (!sessionStorage.IsLogedIn)
        $state.go('home');
    $scope.index = {};
    $scope.yearName = sessionStorage.yearName;
    $scope.getEntryForm = function () {
        $scope.isLoading = true;
        $http({
            method: "GET",
            url: baseUrl + 'api/entry/getEntryForm',
            params: { districtId: sessionStorage.areaId }
        }).then(function mySucces(response) {
            $scope.formTable = response.data;
            $scope.isLoading = false;
        }, function myError(response) {
            $.prompt("Error Get form");
        });
    }
    $scope.$watch('f1.$valid', function (newVal) {
        $scope.IsFormValid = newVal;

    });
    $scope.totalCheck = function () {
        $scope.IsFormValid = true;
        var totalError = false;
        var parent = $scope.formTable[$scope.formTable.length - 1]
        for (x in $scope.formTable[0]) {
            if (x != 'areaId' && x != 'areaName' && x != '$$hashKey' && x != 'MainMines') {
                var total = 0;
                for (i = 0; i < $scope.formTable.length - 1; i++) {
                    total += parseFloat($scope.formTable[i][x]);
                }
                var vstr = 'v' + x;
                if (total == parent[x]) {
                    $scope[vstr] = 'has-success';
                }
                else {
                    totalError = true; $scope[vstr] = 'has-error'; $scope.errorMsg = "Total not match";
                }
            }
        }
        return totalError;
    }
    $scope.saveTable = function (tableNo) {
        $scope.index.fYearId = sessionStorage.yearId;
        $scope.index.createdBy = sessionStorage.id;
        $scope.index.tableNo = "8." + tableNo;
        $scope.index.districtId = sessionStorage.areaId;

        var data = [$scope.index, $scope.formTable];
        if ($scope.IsFormValid) {
            if (!$scope.totalCheck()) {
                $http({
                    method: "POST",
                    url: baseUrl + "api/entry/saveTable9",
                    data: data
                }).then(function mySucces(response) {
                    $.prompt(response.data);
                }, function myError(response) {
                    $.prompt("Error to insert data");
                });
            }
            else {
                $.prompt($scope.errorMsg);
            }
        }
        else {
            $.prompt("<h5>कृपया त्रुटी सुधर करें</h5>");
        }
    }

    $scope.getEntryForm();
})
app.controller('part9Ctrl', function ($scope, $http, $state) {
    if (!sessionStorage.IsLogedIn)
        $state.go('home');
    $scope.index = {};
    $scope.yearName = sessionStorage.yearName;
    $scope.getEntryForm = function () {
        $scope.isLoading = true;
        $http({
            method: "GET",
            url: baseUrl + 'api/entry/getEntryForm',
            params: { districtId: sessionStorage.areaId }
        }).then(function mySucces(response) {
            $scope.formTable = response.data;
            $scope.isLoading = false;
        }, function myError(response) {
            $.prompt("Error Get form");
        });
    }
    $scope.$watch('f1.$valid', function (newVal) {
        $scope.IsFormValid = newVal;

    });
    $scope.totalCheck = function () {
        $scope.IsFormValid = true;
        var totalError = false;
        var parent = $scope.formTable[$scope.formTable.length - 1]
        for (x in $scope.formTable[0]) {
            if (x != 'areaId' && x != 'areaName' && x != '$$hashKey') {
                var total = 0;
                for (i = 0; i < $scope.formTable.length - 1; i++) {
                    total += parseFloat($scope.formTable[i][x]);
                }
                var vstr = 'v' + x;
                if (total == parent[x]) {
                    $scope[vstr] = 'has-success';
                }
                else {
                    totalError = true; $scope[vstr] = 'has-error'; $scope.errorMsg = "Total not match";
                }
            }
        }
        return totalError;
    }
    $scope.saveTable = function (tableNo) {
        $scope.index.fYearId = sessionStorage.yearId;
        $scope.index.createdBy = sessionStorage.id;
        $scope.index.tableNo = "9." + tableNo;
        $scope.index.districtId = sessionStorage.areaId;

        var data = [$scope.index, $scope.formTable];
        if ($scope.IsFormValid) {
            if (!$scope.totalCheck()) {
                $http({
                    method: "POST",
                    url: baseUrl + "api/entry/saveTable9",
                    data: data
                }).then(function mySucces(response) {
                    $.prompt(response.data);
                }, function myError(response) {
                    $.prompt("Error to insert data");
                });
            }
            else {
                $.prompt($scope.errorMsg);
            }
        }
        else {
            $.prompt("<h5>कृपया त्रुटी सुधर करें</h5>");
        }
    }

    $scope.getEntryForm();
})
app.controller('part10Ctrl', function ($scope, $http, $state) {
    if (!sessionStorage.IsLogedIn)
        $state.go('home');
    $scope.index = {};
    $scope.yearName = sessionStorage.yearName;
    $scope.getEntryForm = function () {
        $scope.isLoading = true;
        $http({
            method: "GET",
            url: baseUrl + 'api/entry/getEntryForm',
            params: { districtId: sessionStorage.areaId }
        }).then(function mySucces(response) {
            $scope.formTable = response.data;
            $scope.isLoading = false;
        }, function myError(response) {
            $.prompt("Error Get form");
        });
    }
    $scope.$watch('f1.$valid', function (newVal) {
        $scope.IsFormValid = newVal;

    });
    $scope.totalCheck = function () {
        $scope.IsFormValid = true;
        var totalError = false;
        var parent = $scope.formTable[$scope.formTable.length - 1]
        for (x in $scope.formTable[0]) {
            if (x != 'areaId' && x != 'areaName' && x != '$$hashKey') {
                var total = 0;
                for (i = 0; i < $scope.formTable.length - 1; i++) {
                    total += parseFloat($scope.formTable[i][x]);
                }
                var vstr = 'v' + x;
                if (total == parent[x]) {
                    $scope[vstr] = 'has-success';
                }
                else {
                    totalError = true; $scope[vstr] = 'has-error'; $scope.errorMsg = "Total not match";
                }
            }
        }
        return totalError;
    }
    $scope.saveTable = function (tableNo) {
        $scope.index.fYearId = sessionStorage.yearId;
        $scope.index.createdBy = sessionStorage.id;
        $scope.index.tableNo = "10." + tableNo;
        $scope.index.districtId = sessionStorage.areaId;

        var data = [$scope.index, $scope.formTable];
        if ($scope.IsFormValid) {
            if (!$scope.totalCheck()) {
                $http({
                    method: "POST",
                    url: baseUrl + "api/entry/saveTable10",
                    data: data
                }).then(function mySucces(response) {
                    $.prompt(response.data);
                }, function myError(response) {
                    $.prompt("Error to insert data");
                });
            }
            else {
                $.prompt($scope.errorMsg);
            }
        }
        else {
            $.prompt("<h5>कृपया त्रुटी सुधर करें</h5>");
        }
    }

    $scope.getEntryForm();
})
app.controller('part11Ctrl', function ($scope, $http, $state) {
    if (!sessionStorage.IsLogedIn)
        $state.go('home');
    $scope.index = {};
    $scope.yearName = sessionStorage.yearName;
    $scope.getEntryForm = function () {
        $scope.isLoading = true;
        $http({
            method: "GET",
            url: baseUrl + 'api/entry/getEntryForm',
            params: { districtId: sessionStorage.areaId }
        }).then(function mySucces(response) {
            $scope.formTable = response.data;
            $scope.isLoading = false;
        }, function myError(response) {
            $.prompt("Error Get form");
        });
    }
    $scope.$watch('f1.$valid', function (newVal) {
        $scope.IsFormValid = newVal;

    });
    $scope.totalCheck = function () {
        $scope.IsFormValid = true;
        var totalError = false;
        var parent = $scope.formTable[$scope.formTable.length - 1]
        for (x in $scope.formTable[0]) {
            if (x != 'areaId' && x != 'areaName' && x != '$$hashKey') {
                var total = 0;
                for (i = 0; i < $scope.formTable.length - 1; i++) {
                    total += parseFloat($scope.formTable[i][x]);
                }
                var vstr = 'v' + x;
                if (total == parent[x]) {
                    $scope[vstr] = 'has-success';
                }
                else {
                    totalError = true; $scope[vstr] = 'has-error'; $scope.errorMsg = "Total not match";
                }
            }
        }
        return totalError;
    }
    $scope.saveTable = function (tableNo) {
        $scope.index.fYearId = sessionStorage.yearId;
        $scope.index.createdBy = sessionStorage.id;
        $scope.index.tableNo = "11." + tableNo;
        $scope.index.districtId = sessionStorage.areaId;

        var data = [$scope.index, $scope.formTable];
        if ($scope.IsFormValid) {
            if (!$scope.totalCheck()) {
                $http({
                    method: "POST",
                    url: baseUrl + "api/entry/saveTable11",
                    data: data
                }).then(function mySucces(response) {
                    $.prompt(response.data);
                }, function myError(response) {
                    $.prompt("Error to insert data");
                });
            }
            else {
                $.prompt($scope.errorMsg);
            }
        }
        else {
            $.prompt("<h5>कृपया त्रुटी सुधर करें</h5>");
        }
    }

    $scope.getEntryForm();
})
app.controller('part12Ctrl', function ($scope, $http, $state) {
    if (!sessionStorage.IsLogedIn)
        $state.go('home');
    $scope.index = {};
    $scope.yearName = sessionStorage.yearName;
    $scope.getEntryForm = function () {
        $scope.isLoading = true;
        $http({
            method: "GET",
            url: baseUrl + 'api/entry/getEntryForm',
            params: { districtId: sessionStorage.areaId }
        }).then(function mySucces(response) {
            $scope.formTable = response.data;
            $scope.isLoading = false;
        }, function myError(response) {
            $.prompt("Error Get form");
        });
    }
    $scope.$watch('f1.$valid', function (newVal) {
        $scope.IsFormValid = newVal;

    });
    $scope.totalCheck = function () {
        $scope.IsFormValid = true;
        var totalError = false;
        var parent = $scope.formTable[$scope.formTable.length - 1]
        for (x in $scope.formTable[0]) {
            if (x != 'areaId' && x != 'areaName' && x != '$$hashKey') {
                var total = 0;
                for (i = 0; i < $scope.formTable.length - 1; i++) {
                    total += parseFloat($scope.formTable[i][x]);
                }
                var vstr = 'v' + x;
                if (total == parent[x]) {
                    $scope[vstr] = 'has-success';
                }
                else {
                    totalError = true; $scope[vstr] = 'has-error'; $scope.errorMsg = "Total not match";
                }
            }
        }
        return totalError;
    }
    $scope.saveTable = function (tableNo) {
        $scope.index.fYearId = sessionStorage.yearId;
        $scope.index.createdBy = sessionStorage.id;
        $scope.index.tableNo = "12." + tableNo;
        $scope.index.districtId = sessionStorage.areaId;

        var data = [$scope.index, $scope.formTable];
        if ($scope.IsFormValid) {
            if (!$scope.totalCheck()) {
                $http({
                    method: "POST",
                    url: baseUrl + "api/entry/saveTable12",
                    data: data
                }).then(function mySucces(response) {
                    $.prompt(response.data);
                }, function myError(response) {
                    $.prompt("Error to insert data");
                });
            }
            else {
                $.prompt($scope.errorMsg);
            }
        }
        else {
            $.prompt("<h5>कृपया त्रुटी सुधर करें</h5>");
        }
    }

    $scope.getEntryForm();
})
app.controller('part13Ctrl', function ($scope, $http, $state) {
    if (!sessionStorage.IsLogedIn)
        $state.go('home');
    $scope.index = {};
    $scope.yearName = sessionStorage.yearName;
    $scope.getEntryForm = function () {
        $scope.isLoading = true;
        $http({
            method: "GET",
            url: baseUrl + 'api/entry/getEntryForm',
            params: { districtId: sessionStorage.areaId }
        }).then(function mySucces(response) {
            $scope.formTable = response.data;
            $scope.isLoading = false;
        }, function myError(response) {
            $.prompt("Error Get form");
        });
    }
    $scope.$watch('f1.$valid', function (newVal) {
        $scope.IsFormValid = newVal;

    });
    $scope.totalCheck = function () {
        $scope.IsFormValid = true;
        var totalError = false;
        var parent = $scope.formTable[$scope.formTable.length - 1]
        for (x in $scope.formTable[0]) {
            if (x != 'areaId' && x != 'areaName' && x != '$$hashKey') {
                var total = 0;
                for (i = 0; i < $scope.formTable.length - 1; i++) {
                    total += parseFloat($scope.formTable[i][x]);
                }
                var vstr = 'v' + x;
                if (total == parent[x]) {
                    $scope[vstr] = 'has-success';
                }
                else {
                    totalError = true; $scope[vstr] = 'has-error'; $scope.errorMsg = "Total not match";
                }
            }
        }
        return totalError;
    }
    $scope.saveTable = function (tableNo) {
        $scope.index.fYearId = sessionStorage.yearId;
        $scope.index.createdBy = sessionStorage.id;
        $scope.index.tableNo = "13." + tableNo;
        $scope.index.districtId = sessionStorage.areaId;

        var data = [$scope.index, $scope.formTable];
        if ($scope.IsFormValid) {
            if (!$scope.totalCheck()) {
                $http({
                    method: "POST",
                    url: baseUrl + "api/entry/saveTable13",
                    data: data
                }).then(function mySucces(response) {
                    $.prompt(response.data);
                }, function myError(response) {
                    $.prompt("Error to insert data");
                });
            }
            else {
                $.prompt($scope.errorMsg);
            }
        }
        else {
            $.prompt("<h5>कृपया त्रुटी सुधर करें</h5>");
        }
    }

    $scope.getEntryForm();
})
app.controller('part14Ctrl', function ($scope, $http, $state) {
    if (!sessionStorage.IsLogedIn)
        $state.go('home');
    $scope.index = {};
    $scope.yearName = sessionStorage.yearName;
    $scope.getEntryForm = function () {
        $scope.isLoading = true;
        $http({
            method: "GET",
            url: baseUrl + 'api/entry/getEntryForm',
            params: { districtId: sessionStorage.areaId }
        }).then(function mySucces(response) {
            $scope.formTable = response.data;
            $scope.isLoading = false;
        }, function myError(response) {
            $.prompt("Error Get form");
        });
    }
    $scope.$watch('f1.$valid', function (newVal) {
        $scope.IsFormValid = newVal;

    });
    $scope.totalCheck = function () {
        $scope.IsFormValid = true;
        var totalError = false;
        var parent = $scope.formTable[$scope.formTable.length - 1]
        for (x in $scope.formTable[0]) {
            if (x != 'areaId' && x != 'areaName' && x != '$$hashKey') {
                var total = 0;
                for (i = 0; i < $scope.formTable.length - 1; i++) {
                    total += parseFloat($scope.formTable[i][x]);
                }
                var vstr = 'v' + x;
                if (total == parent[x]) {
                    $scope[vstr] = 'has-success';
                }
                else {
                    totalError = true; $scope[vstr] = 'has-error'; $scope.errorMsg = "Total not match";
                }
            }
        }
        return totalError;
    }
    $scope.saveTable = function (tableNo) {
        $scope.index.fYearId = sessionStorage.yearId;
        $scope.index.createdBy = sessionStorage.id;
        $scope.index.tableNo = "14." + tableNo;
        $scope.index.districtId = sessionStorage.areaId;

        var data = [$scope.index, $scope.formTable];
        if ($scope.IsFormValid) {
            if (!$scope.totalCheck()) {
                $http({
                    method: "POST",
                    url: baseUrl + "api/entry/saveTable14",
                    data: data
                }).then(function mySucces(response) {
                    $.prompt(response.data);
                }, function myError(response) {
                    $.prompt("Error to insert data");
                });
            }
            else {
                $.prompt($scope.errorMsg);
            }
        }
        else {
            $.prompt("<h5>कृपया त्रुटी सुधर करें</h5>");
        }
    }

    $scope.getEntryForm();
})
app.controller('part15Ctrl', function ($scope, $http, $state) {
    if (!sessionStorage.IsLogedIn)
        $state.go('home');
    $scope.index = {};
    $scope.yearName = sessionStorage.yearName;
    $scope.getEntryForm = function () {
        $scope.isLoading = true;
        $http({
            method: "GET",
            url: baseUrl + 'api/entry/getEntryForm',
            params: { districtId: sessionStorage.areaId }
        }).then(function mySucces(response) {
            $scope.formTable = response.data;
            $scope.isLoading = false;
        }, function myError(response) {
            $.prompt("Error Get form");
        });
    }
    $scope.$watch('f1.$valid', function (newVal) {
        $scope.IsFormValid = newVal;

    });
    $scope.totalCheck = function () {
        $scope.IsFormValid = true;
        var totalError = false;
        var parent = $scope.formTable[$scope.formTable.length - 1]
        for (x in $scope.formTable[0]) {
            if (x != 'areaId' && x != 'areaName' && x != '$$hashKey') {
                var total = 0;
                for (i = 0; i < $scope.formTable.length - 1; i++) {
                    total += parseFloat($scope.formTable[i][x]);
                }
                var vstr = 'v' + x;
                if (total == parent[x]) {
                    $scope[vstr] = 'has-success';
                }
                else {
                    totalError = true; $scope[vstr] = 'has-error'; $scope.errorMsg = "Total not match";
                }
            }
        }
        return totalError;
    }
    $scope.saveTable = function (tableNo) {
        $scope.index.fYearId = sessionStorage.yearId;
        $scope.index.createdBy = sessionStorage.id;
        $scope.index.tableNo = "15." + tableNo;
        $scope.index.districtId = sessionStorage.areaId;

        var data = [$scope.index, $scope.formTable];
        if ($scope.IsFormValid) {
            if (!$scope.totalCheck()) {
                $http({
                    method: "POST",
                    url: baseUrl + "api/entry/saveTable15",
                    data: data
                }).then(function mySucces(response) {
                    $.prompt(response.data);
                }, function myError(response) {
                    $.prompt("Error to insert data");
                });
            }
            else {
                $.prompt($scope.errorMsg);
            }
        }
        else {
            $.prompt("<h5>कृपया त्रुटी सुधर करें</h5>");
        }
    }

    $scope.getEntryForm();
})
app.controller('viewCtrl', function ($scope, $http, $state) {

    $scope.yearName = sessionStorage.yearName;
    $scope.getViewForm = function (tableNo) {
        $scope.isLoading = true;
        $http({
            method: "GET",
            url: baseUrl + 'api/view/getPart1',
            params: { fYearId: sessionStorage.yearId, districtId: sessionStorage.areaId, tableNo: tableNo }
        }).then(function mySucces(response) {
            $scope.index = response.data[0];
            $scope.formTable = response.data[1];
            $scope.isLoading = false;
        }, function myError(response) {
            $.prompt("Error Get form");
        });
    }

    //$scope.getViewForm();

})