

$(document).ready(function(){
  $('#emailForm').submit(function(e){
    e.preventDefault()
    let $inputs = $('#emailForm :input' )
    let values  = {}
    values.message = {}
    values.to = 'chethtra.yen@temple.edu'
    values.subject = 'test'
    $inputs.each(function () {
      values.message[this.name] = $(this).val()
    })

    
    $.ajax({
      url: "http://ec2-54-146-129-247.compute-1.amazonaws.com/mailer/sendMail",
      method: "POST",
      crossDomain: true,
      data: values,
      dataType: "text",
      success: function (data) {
        
        $('#emailForm').css('display', 'none')
        $('#returnHome').css('display', 'initial')

      },
      error: function (textStatus, errorThrown) {
         $('errorMessage').css('display', 'initial')
      }
    })

  })
})
