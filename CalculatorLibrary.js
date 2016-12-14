/// <reference path="_references.js" />

(function () {
    this.calculatorNamespace = this.calculatorNamespace || {};
    var ns = this.calculatorNamespace;

    ns.initialize = function() {
        var calculator = new ns.Calculator();

        $('button[id^="btnNumber"]').on('click', calculator.numberClick);

        // javascript button for-loop
        //for (var i = 0; i < 10; i++) {
          //  document.getElementById('btn' + i)
           //     .addEventListener('click', numberClick, false);}

        $('#btnPlus').on('click', calculator.plusClick);
        $('#btnMinus').on('click', calculator.minusClick);
        $('#btnClearEntry').on('click', calculator.clearEntry);
        $('#btnClear').on('click', calculator.clear);
      
        calculator.clear();
    }

    /// original code start

    ns.Calculator = (function () {

        function Calculator() { }

        Calculator.prototype.numberClick = function () {
            $('#txtInput').val($('#txtInput').val() == '0' ?
                $(this).text() : $('#txtInput').val() + $(this).text());
        };

        Calculator.prototype.plusClick = function () {
            $('#txtResult').val(Number($('#txtResult').val()) + Number($('#txtInput').val()));
            Calculator.prototype.clearEntry();
        };

        Calculator.prototype.minusClick = function () {
            $('#txtResult').val(Number($('#txtResult').val()) - Number($('#txtInput').val()));
            Calculator.prototype.clearEntry();
        };

        Calculator.prototype.clearEntry = function () {
            $('#txtInput').val('0');
        }

        Calculator.prototype.clear = function () {
            $('#txtInput').val('0');
            $('#txtResult').val('0');
        };
        return Calculator;
        ///original code end

    }());

})();

//var txtInput;
//var txtResult;

//function initialize() {
//    for (var i = 0; i < 10; i++) {
//        document.getElementById('btn' + i).addEventListener('click', numberClick, false);
//    }
//    txtInput = document.getElementById('txtInput');
//    txtResult = document.getElementById('txtResult');

//    document.getElementById('btnPlus').addEventListener('click', plusClick, false);
//    document.getElementById('btnMinus').addEventListener('click', minusClick, false);
//    document.getElementById('btnClearEntry').addEventListener('click', clearEntry, false);
//    document.getElementById('btnClear').addEventListener('click', clear, false);
//    clear();
//}

//function numberClick() {
//    txtInput.value = txtInput.value == '0' ? this.innerText : txtInput.value + this.innerText;
//}

//function plusClick() {
//    txtResult.value = Number(txtResult.value) + Number(txtInput.value);
//    clearEntry();
//}

//function minusClick() {
//    txtResult.value = Number(txtResult.value) - Number(txtInput.value);
//    clearEntry();
//}

//function clearEntry() {
//    txtInput.value = '0';
//}

//function clear() {
//    txtInput.value = '0';
//    txtResult.value = '0';
//}



