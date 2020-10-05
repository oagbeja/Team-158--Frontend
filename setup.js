$(function() {
    $('#farmerSetup').hide();
    $('#category').change(function() {
        category=$(this).val()
        if (category=="farmer") {
            $('#userType').hide();
            $('#farmerSetup').show();
            $('#nextForm').click(function(_event){
                phoneRegex=/0\d+/
                if ($('#fName').val()===""||$('#lName').val()===""||$('#email').val()===""||$('#BName').val()===""||$('#BAdd').val()===""||($('#phone').val()===""||!phoneRegex.test($('#phone').val())|| ($('#phone').val().count()!=11))) {
                    $('#farmerSetup').append('<p>Fill all fields correctly</p>')
                    _event.preventDefault();
                }
                else {
                    $('#userType').hide();
                    $('#farmerSetup').hide();
                    $('#farmerVerification').show();
                    _event.preventDefault();
                }
            })
        }
        if (category=="investor") {
            $('#userType').hide();
            $('#pleaseUnderstand').text("Coming Soon, Please Bear With Us");            
        }
    })
})