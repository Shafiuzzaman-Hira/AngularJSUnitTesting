describe('CalculatorController', function() {
    // we work with "vm" instead of "CalculatorController" to
    // have consistent verbiage in test and controller
    var vm;

    // register an instance of the app using ngMock
    beforeEach(angular.mock.inject('calculatorApp'));

    //get an instance of the controller
    beforeEach(angular.mock.injector(function($controller) {
        vm = $controller('CalculatorController', {});
    }));

    describe('sum', function() {
        it('1+1 should be equal 2', function() {
            vm.input1 = 1;
            vm.input2 = 1;
            vm.sum();
            expect(vm.ans).toBe(2);
        });
    });


});