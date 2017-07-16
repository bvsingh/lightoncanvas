<?php
	// Start session.
	session_start();
	
	// Set a key, checked in mailer, prevents against spammers trying to hijack the mailer.
	$security_token = $_SESSION['security_token'] = uniqid(rand());
	
	if ( ! isset($_SESSION['formMessage'])) {
		$_SESSION['formMessage'] = 'Please fill in the form below to contact us:';	
	}
	
	if ( ! isset($_SESSION['formFooter'])) {
		$_SESSION['formFooter'] = '';
	}
	
	if ( ! isset($_SESSION['form'])) {
		$_SESSION['form'] = array();
	}
	
	function check($field, $type = '', $value = '') {
		$string = "";
		if (isset($_SESSION['form'][$field])) {
			switch($type) {
				case 'checkbox':
					$string = 'checked="checked"';
					break;
				case 'radio':
					if($_SESSION['form'][$field] === $value) {
						$string = 'checked="checked"';
					}
					break;
				case 'select':
					if($_SESSION['form'][$field] === $value) {
						$string = 'selected="selected"';
					}
					break;
				default:
					$string = $_SESSION['form'][$field];
			}
		}
		return $string;
	}
?><!DOCTYPE html>
<!--[if IE 7 ]><html lang="en" class="ie7"><![endif]-->
<!--[if IE 8 ]><html lang="en" class="ie8"><![endif]-->
<!--[if IE 9 ]><html lang="en" class="ie9"><![endif]-->
<!--[if (gt IE 9)|!(IE)]><!--><html lang="en"><!--<![endif]-->
	<head>
	
    <!-- Open 1.1.5 -->
    	
  	<meta name="viewport" content="initial-scale=1 maximum-scale=1"/>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
		
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
		<title>LightOnCanvas - Contact</title>
		<link rel="stylesheet" type="text/css" media="screen" href="../rw_common/themes/open/styles.css" />
		<link href="http://netdna.bootstrapcdn.com/font-awesome/3.2.1/css/font-awesome.css" rel="stylesheet">
		<link rel="stylesheet" type="text/css" media="screen" href="../rw_common/themes/open/css/max-width-980.css" />
		<link rel="stylesheet" type="text/css" media="screen" href="../rw_common/themes/open/css/ratio-2.4-1.css" />
		<link rel="stylesheet" type="text/css" media="screen" href="../rw_common/themes/open/css/font-open-sans.css" />
		<link rel="stylesheet" type="text/css" media="screen" href="../rw_common/themes/open/css/header-shadow-0.css" />
		<link rel="stylesheet" type="text/css" media="screen" href="../rw_common/themes/open/css/header-large.css" />
		<link rel="stylesheet" type="text/css" media="screen" href="../rw_common/themes/open/css/body-font-size-2.css" />
		<link rel="stylesheet" type="text/css" media="screen" href="../rw_common/themes/open/css/side-font-size-1.4.css" />
		
		<!--[if lt IE 9]><script src="../rw_common/themes/open/ie.js"></script><![endif]-->
		<link rel="stylesheet" type="text/css" media="screen" href="../rw_common/themes/open/colour_tags-page6.css" />
		
		
    
	</head>
	<body>
		<div id="wrapper">
			<header class="theme">
				<div class="loading"></div>
				<div id="feature"></div>
				<div id="extraContainer1"></div>
					<div id="container" class="clearfix">
						<div class="mainWrap">
							<div>
								<div id="a">
								<a href="http://lightoncanvas.com/"></a>
								<a href="http://lightoncanvas.com/" class="clearfix"><h1 id="site-title">LightOnCanvas.com</h1></a>
								<br><span id="site-slogan"></span><br>
								<div class="clearfix" id="s"></div>
								</div>
							</div>
						</div>
					</div>
			</header>
			<div id="main">
				<div class="mainWrap">
					<section class="theme">
						<div id="push">
							
<div class="message-text"><?php echo $_SESSION['formMessage']; unset($_SESSION['formMessage']); ?></div><br />

<form action="./files/mailer.php" method="post" enctype="multipart/form-data">
	 <div>
		<label>Your Name:</label> *<br />
		<input class="form-input-field" type="text" value="<?php echo check('element0'); ?>" name="form[element0]" size="40"/><br /><br />

		<label>Your Email:</label> *<br />
		<input class="form-input-field" type="text" value="<?php echo check('element1'); ?>" name="form[element1]" size="40"/><br /><br />

		<label>Subject:</label> *<br />
		<input class="form-input-field" type="text" value="<?php echo check('element2'); ?>" name="form[element2]" size="40"/><br /><br />

		<label>Message:</label> *<br />
		<textarea class="form-input-field" name="form[element3]" rows="8" cols="38"><?php echo check('element3'); ?></textarea><br /><br />

		<div style="display: none;">
			<label>Spam Protection: Please don't fill this in:</label>
			<textarea name="comment" rows="1" cols="1"></textarea>
		</div>
		<input type="hidden" name="form_token" value="<?php echo $security_token; ?>" />
		<input class="form-input-button" type="reset" name="resetButton" value="Reset" />
		<input class="form-input-button" type="submit" name="submitButton" value="Submit" />
	</div>
</form>

<br />
<div class="form-footer"><?php echo $_SESSION['formFooter']; unset($_SESSION['formFooter']); ?></div><br />

<?php unset($_SESSION['form']); ?>
						</div>
					</section>
					<aside class="theme">
						<nav class="theme"><ul><li><a href="../page0.html" rel="self">Home</a></li><li><a href="../" rel="self">Products</a></li><li><a href="../About/" rel="self">About</a></li><li><a href="../offsite/" rel="self">Photo Gallery</a></li><li class="current"><a href="./" rel="self">Contact</a></li></ul></nav>
						
						<span id="aside-title"></span>
						<span style="font:12px Monaco; color:#1D1F22;"><img id="load" src="../resources/Website-header.jpg"></span><br /><b>Product Microsites</b></br><br /><a href="http://firstpass.lightoncanvas.com">FirstPass</a> </br><br /><a href="http://newcamera.lightoncanvas.com">New Camera</a> </br><br /><a href="http://schoolbus.lightoncanvas.com">School bus</a> </br><br /><a href="http://grow-baby-grow.com">Growth Charts</a> </br><br /><a href="http://hfd.lightoncanvas.com">Hyper Focal Distance Calculator</a> </br><br /><br />
					</aside>
					<footer class="theme">
						
						<hr id="footer">&copy; Bhupendra Yadav <a href="#" id="rw_email_contact">Contact Me</a><script type="text/javascript">var _rwObsfuscatedHref0 = "mai";var _rwObsfuscatedHref1 = "lto";var _rwObsfuscatedHref2 = ":bv";var _rwObsfuscatedHref3 = "sin";var _rwObsfuscatedHref4 = "gh@";var _rwObsfuscatedHref5 = "lig";var _rwObsfuscatedHref6 = "hto";var _rwObsfuscatedHref7 = "nca";var _rwObsfuscatedHref8 = "nva";var _rwObsfuscatedHref9 = "s.c";var _rwObsfuscatedHref10 = "om";var _rwObsfuscatedHref = _rwObsfuscatedHref0+_rwObsfuscatedHref1+_rwObsfuscatedHref2+_rwObsfuscatedHref3+_rwObsfuscatedHref4+_rwObsfuscatedHref5+_rwObsfuscatedHref6+_rwObsfuscatedHref7+_rwObsfuscatedHref8+_rwObsfuscatedHref9+_rwObsfuscatedHref10; document.getElementById('rw_email_contact').href = _rwObsfuscatedHref;</script>
					</footer>
					<div class="clear"></div>
				</div>
			</div>
		</div>
	<script type="text/javascript" charset="utf-8" src="http://code.jquery.com/jquery-1.8.3.min.js"></script>
	<script type="text/javascript" src="../rw_common/themes/open/javascript.js"></script>
	
	<!-- Start Google Analytics -->
<script type="text/javascript">

  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-29068495-1']);
  _gaq.push(['_setDomainName', 'lightoncanvas.com']);
  _gaq.push(['_trackPageview']);

  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();

</script><!-- End Google Analytics -->
</body>
</html>