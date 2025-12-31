<?php
header('Content-Type: application/json; charset=utf-8');

$response = [
    'success' => false,
    'message' => 'حدث خطأ غير متوقَّع.'
];

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    $response['message'] = 'طريقة الإرسال غير صحيحة.';
    echo json_encode($response, JSON_UNESCAPED_UNICODE);
    exit;
}

// Fields coming from your form
$name    = trim($_POST['name']   ?? '');
$email   = trim($_POST['email']  ?? ''); // NOTE: your form uses "Email" (capital E)
$company = trim($_POST['company'] ?? '');
$phone   = trim($_POST['phone']  ?? '');
$inqury  = trim($_POST['inqury'] ?? '');
$message = trim($_POST['message'] ?? '');

// Required validation
if ($name === '' || $email === '' || $phone === '' || $inqury === '') {
    $response['message'] = 'من فضلك املأ كل البيانات المطلوبة (الاسم – البريد الإلكتروني – الهاتف – نوع الاستفسار).';
    echo json_encode($response, JSON_UNESCAPED_UNICODE);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $response['message'] = 'البريد الإلكتروني غير صحيح.';
    echo json_encode($response, JSON_UNESCAPED_UNICODE);
    exit;
}

// Email settings
$to      = "info@azaitona.com";
$subject = "New Contact Form Submission";

// Build body
$bodyText  = "تم استلام رسالة جديدة من نموذج التواصل\r\n\r\n";
$bodyText .= "الاسم: {$name}\r\n";
$bodyText .= "البريد الإلكتروني: {$email}\r\n";
$bodyText .= "رقم الهاتف: {$phone}\r\n";
$bodyText .= "اسم الشركة: " . ($company !== '' ? $company : '-') . "\r\n";
$bodyText .= "نوع الاستفسار: {$inqury}\r\n\r\n";
$bodyText .= "الرسالة:\r\n" . ($message !== '' ? $message : '-') . "\r\n";

// Use a domain email in From to avoid SPF/DMARC rejection
$fromEmail = "no-reply@azaitona.com"; // make sure this domain email exists/allowed on server
$headers  = "From: {$fromEmail}\r\n";
$headers .= "Reply-To: {$email}\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/plain; charset=\"UTF-8\"\r\n";

if (mail($to, $subject, $bodyText, $headers)) {
    $response['success'] = true;
    $response['message'] = 'تم إرسال رسالتك بنجاح';
} else {
    $response['message'] = 'تعذر إرسال الإيميل، حاول لاحقًا.';
}

echo json_encode($response, JSON_UNESCAPED_UNICODE);
exit;
