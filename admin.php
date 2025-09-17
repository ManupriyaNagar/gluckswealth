<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Portfolio Login</title>
</head>

<body>
<?php
$callbackUrl = "https://www.neptunewealth.co.in";
$siteUrl = "https://wealthelite.in/";
?>

<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">



<section style="padding: 100px 0;">
<div class="container">
     <div class="row">

        <div class="col-sm-3">
            
            
        </div>
       <div class="col-sm-6" style="background-color: #dddddd">
<div class="" style="border:none;">
       <div>
            <form name="signinForm" id="signinForm" action="<?php echo $siteUrl; ?>/Login/login/validate-user" method="POST" style="border: solid 1px #eee;padding: 10px;margin: 10px; text-align: center;" onsubmit="return GetSubmitLogin();">
                <div style="width: fit-content; margin: auto;">
                    <label style="width: 100px;margin-bottom: 15px;" for="inputEmail">Username</label>
                    <input style="width: 190px; font-size: 13px;padding: 5px 8px;" type="text" id="inputEmail" name="username" value="" placeholder="Enter your User Name" required>
                    <br>

                    <label style="width: 100px;margin-bottom: 20px;" for="inputPassword">Password</label>
                    <input style="width: 190px; font-size: 13px;padding: 5px 8px;" type="password" id="inputPassword" name="password" value="" placeholder="******" required>
                    <br>

                    <label style="width: 240px;margin-bottom: 15px;cursor: pointer;" data-toggle="modal" data-target="#exampleModal" onclick="resetForgetPasswordForm()">Forgot Password?</label>
                    <button style="padding: 4px 8px;" type="submit">Login</button>

                    <input type="hidden" name="loginFor" id="loginFor" value="ARN">
                    <input type="hidden" name="callbackUrl" id="callbackUrl" value="<?php echo $callbackUrl; ?>">
                </div>
                <div style="text-align: center;font-size: 14px;width: 100%;font-weight: 700;">
                    <p style="color: #dc3545; display: none" id="loginPageAlertError"></p>
                    <p style="color: #28a745; display: none" id="loginPageAlertSuccess"></p>
                </div>
            </form>
            
            <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog" style="width: 430px;" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" style="float: left;width: 90%;">Forgot Password</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <form name="forgotForm" id="forgetPwdForm" method="POST" style="width: 380px;padding: 10px;margin: 10px auto;display: block;">
                                <div style="width: fit-content; margin: 0 auto;">
                                    <label style="width: 100px;line-height: 30px;margin: 0;" for="inputEmail">Username</label>
                                    <div class="d-flex">
                                        <input style="width: 190px; font-size: 13px;padding: 5px 8px;" type="text" id="inputEmail" name="userName" value="" placeholder="Enter your User Name" required>
                                        <input type="hidden" name="type" id="type" value="ARN">
                                        <input type="hidden" name="source" id="source" value="link" />
                                        <button style="padding: 4px 8px;margin-left: 10px;" type="button" onclick="submitForgetPwdUserNameForWeb();">Submit</button>
                                    </div>
                                </div>
                            </form>

                            <form name="forgotForm" id="forgetPwdFormVerify" method="POST" style="width: 380px;padding: 10px;margin: 10px auto;display: flex; display: none">
                            </form>
                            <div style="text-align: center;font-size: 14px;width: 100%;font-weight: 700;">
                                <p style="color: #dc3545; display: none" id="loginPageAlertErrorFp"></p>
                                <p style="color: #28a745; display: none" id="loginPageAlertSuccessFp"></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <?php
            $get = $_REQUEST;
            $type = "";
            $msg = "";
            if (isset($get['et'])) {
                $ET = $get['et'];
                $type = "";
                $msg = "";
                if ($ET == 1) {
                    $type = "error";
                    $msg = "Username or password is incorrect";
                }
                if ($ET == 2) {
                    $type = "error";
                    $msg = "Username not exists";
                }

                if ($ET == 3) {
                    $type = "error";
                    $msg = "Your IP was blocked! Please contact admin to access your account";
                }

                if ($ET == 4) {
                    $type = "error";
                    $msg = "Login disabled.";
                }
            }
            ?>
            </div>
    </div>
       </div>
     </div>

        <div class="col-sm-3">
            
            
        </div>

</div>    
</section>


<script src="https://code.jquery.com/jquery-3.1.1.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" ></script>
<script src="<?php echo $siteUrl; ?>/js/aes.js"></script>
<script src="<?php echo $siteUrl; ?>/js/login_script.js"></script>
<script src="<?php echo $siteUrl; ?>/js/formValidation.js"></script>
<script src="<?php echo $siteUrl; ?>/js/ajaxCore.js"></script>
<script src="<?php echo $siteUrl; ?>/js/login.js"></script>    

<script>
    var msgType = '<?php echo $type; ?>';
    var msg = '<?php echo $msg; ?>';
    if (msgType === "error" && msg !== "") {
        $('#loginPageAlertError').html(msg);
        $('#loginPageAlertError').css("display", "block");
    }

    $('input[type=radio][name=loginType]').change(function () {
        var optionValue = this.value;
        $('#loginFor').val('');
        if (optionValue != "" && optionValue != 'undefined') {
            $('#loginFor').val(optionValue);
            $('#type').val(optionValue);
        }
    });
</script>
<!-- <script>
$(document).ready(function(){
  $(".close").click(function(){
    $("#exampleModal").addClass("intro");
  });
});
</script> -->




</body>
</html>

