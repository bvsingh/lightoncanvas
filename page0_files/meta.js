(function() {
	var Realmac = Realmac || {};

	Realmac.meta = {
		
		// Set the browser title
		//
		// @var String text
		setTitle: function(text) {
			return document.title = text;
		},
		
		// Set the content attribute of a meta tag
		//
		// @var String name
		// @var String content
		setTagContent: function(tag, content){
			// If the tag being set is title
			// return the result of setTitle
			if ( tag === 'title' )
			{
				return this.setTitle(content);
			}
			
			// Otherwise try and find the meta tag
			var tag = this.getTag(tag);
			
			// If we have a tag, set the content
			if ( tag !== false )
			{
				return tag.setAttribute('content', content);
			}
			
			return false;
		},
		
		// Find a meta tag
		//
		// @var String name
		getTag: function(name) {
			var meta = document.querySelectorAll('meta');
			
			for ( var i=0; i<meta.length; i++ )
			{
				if (meta[i].name == name){
					return meta[i];
				}
			}
			
			var tag = document.createElement('meta');
			tag.name = name;
			document.getElementsByTagName('head')[0].appendChild(tag);
			
			return tag;
		}
	};
 
	// Object containing all website meta info
	var websiteMeta = {"tag-swift.html":"Posts tagged &ldquo;Swift&rdquo;","category-ios6.html":"A list of posts in category &ldquo;iOS6&rdquo;","tag-school-bus-status.html":"Posts tagged &ldquo;School Bus Status&rdquo;","tag-ios6.html":"Posts tagged &ldquo;iOS6&rdquo;","tag--os-x.html":"Posts tagged &ldquo; OS X&rdquo;","bb815241a708c001b42079b8dd4021e6-51.html":"Finally...","category-personal.html":"A list of posts in category &ldquo;Personal&rdquo;","category-mac-pro.html":"A list of posts in category &ldquo;Mac Pro&rdquo;","tag-generic-programming.html":"Posts tagged &ldquo;Generic programming&rdquo;","category-ios-7.html":"A list of posts in category &ldquo;iOS 7&rdquo;","archive-sep-2013.html":"Archives for Sep 2013","category-red.html":"A list of posts in category &ldquo;ReD&rdquo;","tag-mountain-lion.html":"Posts tagged &ldquo;Mountain Lion&rdquo;","e86282f6edafca0c4493cf78dfed13b6-39.html":"Video showing design details of School Bus application is now available.","tag-ios-7.html":"Posts tagged &ldquo;iOS 7&rdquo;","e4b3371be4d20d5ad3f85740897c0656-44.html":"New Camera version 1.1.1 is in review with Apple\nIt contains fix for an issue where images do not appear when updated from version 1.0 to 1.1. Images ","8de8834dd9d6517f22b1109c404de4e8-48.html":"Un-compromised iPad mini with retina display","tag-protocols.html":"Posts tagged &ldquo;Protocols&rdquo;","552eaa361f68a0b800cc11fe4aadc0b7-42.html":"Back from WWDC, lots of new stuff","category-camera.html":"A list of posts in category &ldquo;Camera&rdquo;","category-apple-news.html":"A list of posts in category &ldquo;Apple news&rdquo;","tag-iphones.html":"Posts tagged &ldquo;iPhones&rdquo;","archive-mar-2012.html":"Archives for Mar 2012","category-mavrick.html":"A list of posts in category &ldquo;Mavrick&rdquo;","category-steve-jobs.html":"A list of posts in category &ldquo;Steve Jobs&rdquo;","category-humor.html":"A list of posts in category &ldquo;Humor&rdquo;","category-retina-display.html":"A list of posts in category &ldquo;Retina Display&rdquo;","category-protocols.html":"A list of posts in category &ldquo;Protocols&rdquo;","category-ipad.html":"A list of posts in category &ldquo;iPad&rdquo;","category-apple.html":"A list of posts in category &ldquo;Apple&rdquo;","archive-aug-2012.html":"Archives for Aug 2012","a1b09087ceea73d508697891d705f3ec-46.html":"iPhone 5C = iPhone 5 in plastic + colours.","archive-feb-2012.html":"Archives for Feb 2012","WWDC 2013.html":"Biggest surprise, MacPro. Mavericks will launch at the same time as MacPro.","tag-retina-display.html":"Posts tagged &ldquo;Retina Display&rdquo;","archive-oct-2013.html":"Archives for Oct 2013","category-wwdc.html":"A list of posts in category &ldquo;WWDC&rdquo;","tag-mavrick.html":"Posts tagged &ldquo;Mavrick&rdquo;","category-test.html":"A list of posts in category &ldquo;Test&rdquo;","category--nikon.html":"A list of posts in category &ldquo; Nikon&rdquo;","category-photography.html":"A list of posts in category &ldquo;Photography&rdquo;","category-cameras.html":"A list of posts in category &ldquo;Cameras&rdquo;","archive-dec-2013.html":"Archives for Dec 2013","category--samsung.html":"A list of posts in category &ldquo; Samsung&rdquo;","archive-jun-2012.html":"Archives for Jun 2012","tag-wwdc.html":"Posts tagged &ldquo;WWDC&rdquo;","2253d63bf30edf2a20b39d35d2ee0cb7-49.html":"MacPro (Product Red)","0d1d94ffa0d3941413aafa273cd3f72d-50.html":"Samsung has hired Apple Store designer to design their stores.","tag-apple.html":"Posts tagged &ldquo;Apple&rdquo;","category-swift.html":"A list of posts in category &ldquo;Swift&rdquo;","category-ios-application.html":"A list of posts in category &ldquo;iOS Application&rdquo;","9b58430314b82eda00226e559b3dded0-52.html":"Generic picker implementation in swift. Uses protocols to implement picker data source.\n","f3e187d52893439225adf1ee0e8cc660-47.html":"iPhone 5s, top of the line phone","archive-jun-2013.html":"Archives for Jun 2013","f17aa5cc65a80f89e212822a1425c640-43.html":"New Camera v1.1 is now available on the AppStore","3ab94335fd499870eceda8116b9a8d05-40.html":"Canon announced replacement for 5D Mark II","category-mountain-lion.html":"A list of posts in category &ldquo;Mountain Lion&rdquo;","ef113147bb5ce03592caf14dc4a5a6a0-38.html":"Steve Jobs honoured with \"Trustees Award\".","category-iphone.html":"A list of posts in category &ldquo;iPhone&rdquo;","category-work.html":"A list of posts in category &ldquo;Work&rdquo;","tag-ios.html":"Posts tagged &ldquo;iOS&rdquo;","tag-mac-pro.html":"Posts tagged &ldquo;Mac Pro&rdquo;","tag-canon.html":"Posts tagged &ldquo;Canon&rdquo;","archive-apr-2012.html":"Archives for Apr 2012","archive-jun-2015.html":"Archives for Jun 2015","tag-ipad.html":"Posts tagged &ldquo;iPad&rdquo;","7cecbd0063a24392a630bd181d1e62a9-0.html":"Welcome to our completely re-designed LightOnCanvas.com website!","category-first-post.html":"A list of posts in category &ldquo;First Post&rdquo;","df608db45e96db3847d6f80af554b8fa-37.html":"Ottawa-Carleton School Bus Status application is now available on the AppStore.","category-generic-programming.html":"A list of posts in category &ldquo;Generic programming&rdquo;","e78980bb8809284a44c390183a23635b-41.html":"￼ New Camera App\n\nA fresh look at your iPhone \/ iPad camera"};
 
	// pageId must match the key in websiteMeta object
	var url = window.location.pathname;
	var pageId = url.substring(url.lastIndexOf('/')+1);
	if (!pageId || pageId.length == 0){
		pageId = 'index.html';
	}
	pageMeta = websiteMeta[pageId];
 
	// If we have meta for this page
	if (pageMeta){
		Realmac.meta.setTagContent('description', pageMeta);
	}
 
 })();