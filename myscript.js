
var newTitle = "С НОВЫМ ГОДОМ, ДОРОГИЕ ЕБАНЫЕ ГАДЫ!";


function titleReplace(bad, worse) { 
	return document.body.innerHTML = document.body.innerHTML.replace(new RegExp(bad, 'g'), worse);
}


//lookatme

if (window.location.origin.indexOf("lookatme") >- 1) {
titleReplace('<div class="title"><a href="([^>]+)>([^<]+)</a></div>', '<div class="title"><a href="$1>'+newTitle+'</a></div>');
titleReplace('<img src=("[^ ]+) data-original=("[^ ]+)', '<img src=$2 data-original=$1');
titleReplace('class="article-title" role="title">([\t]*[^>]+)<', 'class="article-title" role="title">'+newTitle+'<');
}

if (window.location.origin.indexOf("vozduh.afisha") > -1) {
//афиша воздух

titleReplace('<h3 class="title title_4super"><a href="([^>]+).<span class="article_super_rubric"></span>[^<]+</a>', '<h3 class="title title_4super"><a href="$1><span class="article_super_rubric"></span>'+newTitle+'</a>');
titleReplace('<h3 class="title title_4super"><a href="([^>]+).<span class="article_super_rubric">([^<]+)./span>[^<]+</a>', '<h3 class="title title_4super"><a href="$1><span class="article_super_rubric"></span>'+newTitle+'</a>');
titleReplace('<span class="title_subheader hyphenate">([^<]+)</span></a></h3>', '<span class="title_subheader hyphenate">'+newTitle+'</span></a></h3>');
titleReplace('<span class="title_subheader">([^<]+)</span>', '<span class="title_subheader">'+newTitle+'</span></a></h3>');
titleReplace('<span class="noise_text_title">([^>]+).</span>', '<span class="noise_text_title"> '+newTitle+'</span>');

}

//mag.afisha.ru
if (window.location.origin.indexOf("mag.afisha") > -1) {
	titleReplace('<h2 class="slides_item_content_title">([^>]+).</h2>', '<h2 class="slides_item_content_title"> '+newTitle+'</h2>');
	titleReplace('<h2>([^>]+).</h2>', '<h2> '+newTitle+'</h2>');
}

if (window.location.origin.indexOf("esquire") > -1) {
//эсквайр
titleReplace('<header class="index-recentpost-title">[^<]*<a href="([^>]+).>([^>]+).</a>[^<]*</header>', '<header class="index-recentpost-title"> <a href="$1">'+newTitle+'</a> </header>');
titleReplace('<header class="index-articlepost-title">[^<]*<a href="([^>]+).>([^>]+).</a>[^<]*</header>', '<header class="index-articlepost-title"> <a href="$1">'+newTitle+'</a> </header>');
titleReplace('<header class="index-photopost-title">[^<]*<a href="([^>]+).>([^>]+).</a>[^<]*</header>', '<header class="index-photopost-title"> <a href="$1">'+newTitle+'</a> </header>');
titleReplace('<div class="index-fictionpost-title">[^<]*<a href="([^>]+).>([^>]+).</a>[^<]*</div>', '<div class="index-fictionpost-title"> <a href="$1">'+newTitle+'</a> </div>');
titleReplace('<header class="title" data-href="([^>]+).>([^>]+)</header>',  '<header class="title" data-href="$1">'+newTitle+'</header>');
titleReplace('<h2 data-href="([^>]+).>([^>]+)</h2>', '<h2 data-href="$1">'+newTitle+'</h2>');
}


