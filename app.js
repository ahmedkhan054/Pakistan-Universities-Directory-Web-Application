var app = angular.module("uniApp", []);

app.controller("uniCtrl", function ($scope) {

    $scope.currentPage = 1;
    $scope.itemsPerPage = 3;

    $scope.universities = [

        {
            name: "University of the Punjab",
            website: "https://pu.edu.pk",
            phone: "+92-42-99231100",
            image: "image/Punjab.jpg"
        },

        {
            name: "University of Karachi",
            website: "https://uok.edu.pk",
            phone: "+92-21-99261300",
            image: "image/Karachi.png"
        },

        {
            name: "Quaid-i-Azam University",
            website: "https://qau.edu.pk",
            phone: "+92-51-90643000",
            image: "image/quaid-i-azam_university.jpg"
        },

        {
            name: "University of Engineering & Technology, Lahore",
            website: "https://uet.edu.pk",
            phone: "+92-42-99029416",
            image: "image/Lahore.png"
        },

        {
            name: "National University of Sciences & Technology",
            website: "https://nust.edu.pk",
            phone: "+92-51-90851234",
            image: "image/National University of Sciences & Technology.png"
        },

        {
            name: "COMSATS University Islamabad",
            website: "https://comsats.edu.pk",
            phone: "+92-51-90498000",
            image: "image/islamabad.webp"
        }

    ];

    $scope.filteredUniversities = angular.copy($scope.universities);

    function updatePage() {

        var start = ($scope.currentPage - 1) * $scope.itemsPerPage;

        $scope.paginatedList = $scope.filteredUniversities.slice(
            start,
            start + $scope.itemsPerPage
        );
    }

    $scope.$watch("searchText", function () {

        var search = ($scope.searchText || "").toLowerCase();

        $scope.filteredUniversities = $scope.universities.filter(function (uni) {

            return uni.name.toLowerCase().includes(search);

        });

        $scope.currentPage = 1;

        updatePage();
    });

    $scope.totalPages = function () {

        return Math.ceil(
            $scope.filteredUniversities.length /
            $scope.itemsPerPage
        ) || 1;
    };

    $scope.nextPage = function () {

        if ($scope.currentPage < $scope.totalPages()) {

            $scope.currentPage++;
            updatePage();
        }
    };

    $scope.prevPage = function () {

        if ($scope.currentPage > 1) {

            $scope.currentPage--;
            updatePage();
        }
    };

    updatePage();
});