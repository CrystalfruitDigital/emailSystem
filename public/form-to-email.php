<?php

$config['base_url'] = 'http://platinumbrandspr.com';
if(!isset($_POST['submit']))
{
	//This page should not be accessed directly. Need to submit the form.
	echo "error; you need to submit the form!";
}
$name = filter_input(INPUT_POST, 'name');
$visitor_email = filter_input(INPUT_POST, 'email');
$phone = filter_input(INPUT_POST, 'phone');
$website = filter_input(INPUT_POST, 'website');
$message = filter_input(INPUT_POST, 'message');

//Validate first
if(empty($name)||empty($visitor_email)) 
{
  echo "Name and email are mandatory!";
  exit;
}

if(IsInjected($visitor_email))
{
  echo "Bad email value!";
  exit;
}

$email_from = 'crystalfruit.jack@gmail.com';//<== update the email address
$email_subject = "New Form submission";
$email_body = "You have received a new message from the user $name.\n Email : $visitor_email\n Website : $website \n Phone: $phone \n".
"Here is the message:\n $message \n".

$to = "jack@vitriswireless.com";//<== update the email address
$headers = "From: $email_from \r\n";
$headers .= "Reply-To: $visitor_email \r\n";
//Send the email!
mail($to,$email_subject,$email_body,$headers);
//done. redirect to thank-you page.
header('Location: http://platinumbrandspr.com/');


// Function to validate against any email injection attempts
function IsInjected($str)
{
  $injections = array('(\n+)',
    '(\r+)',
    '(\t+)',
    '(%0A+)',
    '(%0D+)',
    '(%08+)',
    '(%09+)'
    );
  $inject = join('|', $injections);
  $inject = "/$inject/i";
  if(preg_match($inject,$str))
  {
    return true;
  }
  else
  {
    return false;
  }
}

?> 