<?php
//Import PHPMailer classes into the global namespace
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/MailerConfig.php';
require 'PHPMailer/Exception.php';
require 'PHPMailer/PHPMailer.php';
require 'PHPMailer/SMTP.php';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {

    $response = [];
    $entries = [];
    $errors = [];
    $messages = [];
    $hasErrors = false;

    // Escape and extract all the post values
    foreach ($_POST as $key => $value) {
        $entries[$key] = sanitize($value);
    }

    // Get a set of variable variables for easier use
    foreach ($entries as $key => $value) {
        ${$key} = $value;
    }

    // Validate shared form fields
    if (!empty($goAway)) {
        $errors['goAway'] = true;
    }

    // Validate specific Incubator form fields
    if ($template === "incubator") {
        if (empty($firstName)) {
            $errors['firstName'] = true;
        }
        if (empty($lastName)) {
            $errors['lastName'] = true;
        }
        if (empty($company)) {
            $errors['company'] = true;
        }
        if (empty($phone)) {
            $errors['phone'] = true;
        }
        if (empty($email)) {
            $errors['email'] = true;
        }
        elseif (!(filter_var($email, FILTER_VALIDATE_EMAIL))) {
            $errors['email'] = true;
        }
        if (empty($phone)) {
            $errors['country'] = true;
        }
        if (empty($description)) {
            $errors['description'] = true;
        }

        // Prepare data
        $data = [
            'firstName' => $firstName,
            'lastName' => $lastName,
            'company' => $company,
            'phone' => $phone,
            'email' => $email,
            'country' => $country,
            'budget' => $budget,
            'description' => $description,
            'requestNDA' => $requestNDA
        ];
    }

    // Validate specific Tech Trips form fields
    if ($template === "techTrips") {
        if (empty($adults)) {
            $errors['adults'] = true;
        }

        if (empty($departureDate)) {
            $errors['departureDate'] = true;
        }

        if (empty($returnDate)) {
            $errors['returnDate'] = true;
        }

        if (empty($fromCity)) {
            $errors['fromCity'] = true;
        }

        if (empty($toCity)) {
            $errors['toCity'] = true;
        }

        if (empty($description)) {
            $errors['description'] = true;
        }

        // Prepare data
        $data = [
            'tripType' => $tripType,
            'adults' => $adults,
            'children' => $children,
            'departureDate' => $departureDate,
            'returnDate' => $returnDate,
            'fromCity' => $fromCity,
            'toCity' => $returnDate,
            'budget' => $budget,
            'description' => $description
        ];
    }

    // Prepared shared data information for the email template
    $data['emailTemplate'] = $template;
    $data['subject'] = $subject;
    $data['isPageInKorean'] = $isPageInKorean;

    // Prepare response (fill error and message information)
    if (empty($errors)) {
        $mailerResponse = sendEmail($data);

        if ($mailerResponse['hasErrors']) {
            $hasErrors = $mailerResponse['hasErrors'];
            $messages['error'] = $mailerResponse['message'];
        } else {
            $hasErrors = $mailerResponse['hasErrors'];
            $messages['success'] = $mailerResponse['message'];
        }
    } else {
        $hasErrors = true;

        if ($isPageInKorean === "true") {
            $messages['error'] = !empty($goAway) ? '오류가 발생했습니다. 다시 시도해 주세요.' : '미기재 필수항목이 있습니다.';
        } else {
            $messages['error'] = !empty($goAway) ? 'There was an error. Please refresh the page and try again.' : 'Please fill all the required fields';
        }
    }

    // Send response
    $response = [
        "hasErrors" => $hasErrors,
        "errors" => $errors,
        "messages" => $messages
    ];

    header('Content-Type: application/json');
    echo json_encode($response);
}

/*
* Send email
*/
function sendEmail ($data) {

    //Create a new PHPMailer instance
    $mail = new PHPMailer;

    //Server settings
    $mail->SMTPDebug = MAIL_SMTP_DEBUG;                   // Enable verbose debug output
    $mail->isSMTP();                                      // Set mailer to use SMTP
    $mail->Host = MAIL_HOST;                              // Specify main and backup SMTP servers
    $mail->SMTPAuth = true;                               // Enable SMTP authentication
    $mail->Username = MAIL_USER;                          // SMTP username
    $mail->Password = MAIL_PASS;                          // SMTP password
    $mail->SMTPSecure = MAIL_ENCRYPTION;                  // Enable TLS encryption, `ssl` also accepted
    $mail->Port = MAIL_PORT;                              // TCP port to connect to

    //Recipients
    $mail->setFrom(MAIL_USER, MAIL_USER_NAME);
    $mail->addAddress(MAIL_TO_ADDR, MAIL_TO_ADDR_NAME);   // Add a recipient
    $mail->addReplyTo(MAIL_USER, MAIL_USER_NAME);

    //Content
    $mail->isHTML(true);                                  // Set email format to HTML
    $mail->Subject = $data['subject'];
    $mail->Body    = parseTemplate('PHPMailer/templates/' . $data['emailTemplate'] . '.phtml', $data);

    //Send the message, check for errors
    if (!$mail->send()) {
        return [
            "hasErrors" => true,
            "message" => "Mailer Error: " . $mail->ErrorInfo
        ];
    } else {
        return [
            "hasErrors" => false,
            "message" => ($data['isPageInKorean'] === "true") ? "접수가 완료되었습니다." : "Message sent!"
        ];
    }
}

function parseTemplate($templateFile, array $templateData) {
    extract($templateData);

    ob_start();
    include $templateFile;
    $content = ob_get_contents();
    ob_end_clean();

    return $content;
}

function sanitize($text) {
    $text = trim($text);

    if (get_magic_quotes_gpc()) {
        $text = stripslashes($text);
    }
    return $text;
}
?>
