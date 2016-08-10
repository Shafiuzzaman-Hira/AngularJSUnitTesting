(function() {
    'use strict';

    angular
        .module('calculatorApp')
        .controller('CalculatorController', CalculatorController);

    CalculatorController.$inject = [];

    function CalculatorController() {
        var vm = this;
        vm.sum = sum;

        function sum() {
            vm.ans = vm.input1 + vm.input2;
        }
    }
})();