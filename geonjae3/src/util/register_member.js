// datepicker 부분
$(function(){
    $('#datepicker').datepicker({
        dateFormat: 'yy-mm-dd',
        showOtherMonths: true,
        showMonthAfterYear:true,
        changeYear: true,
        changeMonth: true,            
        buttonImageOnly: true,
        buttonText: "선택",    
        yearSuffix: "년",
        monthNamesShort: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],
        monthNames: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],
        dayNamesMin: ['일','월','화','수','목','금','토'],
        dayNames: ['일요일','월요일','화요일','수요일','목요일','금요일','토요일'],
        yearRange: 'c-100:c+100'
    });
});
