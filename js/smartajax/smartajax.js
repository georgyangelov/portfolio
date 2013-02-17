(function(f,d,c){function a(){}var l;a.supported=window.History.enabled;a.enabled=true;a.html4=true;a.isAbsolute=new RegExp("^https?://","i");a.hasProtocol=new RegExp("^([a-z+]+)://","i");a.contentTypeMatch=/([a-z0-9\*\.\-]+)\/([a-z0-9\*\.\-]+)/i;a.isDebug=false;a.linkFilter=["jpe?g","png","gif","bmp","swf","mp3","flv","mp4","wmv","wav","flac","midi","txt","pdf","pptx?","xlsx?","odt","odp","ods","ppsx?","csv","css","js","vbs","djvu","zip","rar","7zip","tar","gz","tgz","bin","avi","mkv","3gp","sub","srt","diff"];a.allowedTypes=["","text/html","text/xml","text/plain"];a.root=d.getRootUrl().replace(/\/$/,"");a.options={cache:false,timeout:5,reload:false,replace:false,history:true,analytics:true,containers:[{selector:"#content, article, #article, .article, #post, .post",ifNotFound:"reload"}],before:function(m){a.proceed()},success:function(m){a.proceed()},error:function(m){window.location=m},done:function(m,n){}};a.state=d.getState();a.currentRequest=false;a.instanceOptions=a.options;a.isManual=false;a._binds=[];a._formbinds=[];a._proceedTemplate={url:"",step:0,data:"",method:"get",vars:{},replace:false};a._proceed={};j();a.setOptions=function(m){f.extend(a.options,m);a.instanceOptions=f.extend({},a.options,a.instanceOptions,m)};a.unbind=function(){a._binds=[]};a.unbindForms=function(){a._formbinds=[]};a.bind=function(m,n){a._binds.unshift({selector:m,options:n})};a.bindForms=function(m,n){a._formbinds.unshift({selector:m,options:n})};a._init=function(){f(a.handleFormButtons);f(document).bind("click.smartajax",function(p){if(!p.isDefaultPrevented()){var m=f(p.target);if(!m.is("a")){m=m.parents("a:first");if(m.length==0){return true}}var o=h(m,a._binds);if(o===false){return true}var n=a.handle(m,o.options);if(n===false){p.preventDefault()}return n}});f(document).bind("submit.smartajax",function(q){if(!q.isDefaultPrevented()){var m=f(q.target);if(!m.is("form")){m=m.filter("input[type=submit]").parents("form:first");if(m.length==0){return true}}var n=f("input[name][type=submit].SmartAjax_clicked",m);if(n.length>0){if(n.is(".nojs")){return true}}var p=h(m,a._formbinds);if(p===false){return true}var o=a.handleForm(m,p.options);if(o===false){q.preventDefault()}return o}})};a.handle=function(n,m){$element=f(n).filter("a:ajaxlink").filter(":first");if($element.length==0){return true}if(a.isDebug){console.log("SmartAjax: Handling ",$element)}return !a.load($element.attr("href"),m)};a.handleForm=function(o,n){$element=f(o).filter(":ajaxform").filter(":first");if($element.length==0){return true}if(a.isDebug){console.log("SmartAjax: Handling form ",$element)}if($element.find("input[type=file]").length>0){if($element.attr("action")==c||$element.attr("action").length==0){$element.attr("action",a.state.url)}return true}var p=k($element);var q="get";if($element.attr("method").length>0&&$element.attr("method").toLowerCase()=="post"){q="post"}var m=a.state.url;if($element.attr("action")!=null&&$element.attr("action").length>0){m=$element.attr("action")}if(typeof n!=="object"){n={}}if(q!="get"){n.replace=true}else{m=b(m,p);p={}}n.reload=true;return !a.load(m,n,q,p)};a.load=function(o,n,q,p){if(q==c){q="get"}if(p==c){p={}}a.isManual=true;o=d.getFullUrl(o||"");a.instanceOptions=f.extend({},a.options,n);if(!a.instanceOptions.reload&&o==a.state.url){return true}j();a._proceed.url=o;a._proceed.step=1;a._proceed.method=q;a._proceed.vars=p;var m=a.instanceOptions.before(o);if(m===false){j();return false}return true};a.proceed=function(){var u=a;var n=u._proceed.url;if(u._proceed.step==0||n.length==0){return false}if(u._proceed.step==1){l=document.title;if(!u.instanceOptions.history){d.replaceState({rand:Math.random()},null,u.state.url)}else{if(u.instanceOptions.replace){d.replaceState({rand:Math.random()},null,u._proceed.url)}else{if(u.instanceOptions.reload&&n==u.state.url){d.pushState({rand:Math.random()},null,u._proceed.url)}else{d.pushState(null,null,u._proceed.url)}}}}else{if(u._proceed.step==3){a.load_internal(a._proceed.url)}else{if(u._proceed.step==2){var q=u._proceed.data.replace(/<\!DOCTYPE[^\>]*>/i,"").replace(/<(html|head|body|title)( ([^\>]*))?\>/gi,'<div id="smartajax-$1" style="display:none;" $2>').replace(/<(meta|script|link)( ([^\>]*))?\>/gi,'<div class="smartajax-meta smartajax-$1" style="display:none;" $2>').replace(/<\/(html|head|body|title|meta|script|link)\>/gi,"</div>");if(u.isDebug){console.log("SmartAjax: handling data from ",n)}var p=f(q);var s=p.find("#smartajax-title");/*f("body").attr("class",p.find("#smartajax-body").andSelf().filter("#smartajax-body").attr("class"));*/if(s.length>0){document.title=s.text()}var r=[];for(i=0;i<u.instanceOptions.containers.length;i++){var o=u.instanceOptions.containers[i];var v=p.find(o.selector).andSelf().filter(o.selector).filter(":first");if(v.length==0){if(o.ifNotFound==c){o.ifNotFound="reload"}if(typeof o.ifNotFound==="function"){o.ifNotFound(o,f(document).find(o.selector))}else{if(o.ifNotFound=="reload"){window.location=n;return false}else{if(o.ifNotFound=="empty"){f(document).find(o.selector).empty()}else{if(o.ifNotFound=="hide"){f(document).find(o.selector).hide()}else{if(o.ifNotFound=="keep"){continue}}}}}}else{var t=f(document).find(o.selector);t.html(v.html());if(o.showIfFound&&t.is(":hidden")){t.show()}a.runScripts(t.find(".smartajax-script"));r.push(o)}v.remove()}var m=p.filter(".smartajax-script");f("body").append(m);a.runScripts(m);if(u.instanceOptions.analytics!==false){if(typeof u.instanceOptions.analytics==="object"){u.instanceOptions.analytics.push(["_trackPageview",d.getShortUrl(n)])}else{if(window._gaq!=c){window._gaq.push(["_trackPageview",d.getShortUrl(n)])}else{if(window.pageTracker!=c){window.pageTracker._trackPageview(d.getShortUrl(n))}}}}if(u.isDebug){console.log("SmartAjax: done with ",n)}a.handleFormButtons();j();u.instanceOptions.done(n,r)}}}};a.runScripts=function(m){m.each(function(){var q=f(this);var n=q.html().replace(/&amp;/g,"&").replace(/&quot;/g,'"').replace(/&#39;/g,"'").replace(/&lt;/g,"<").replace(/&gt;/g,">");var o=document.createElement("script");if(q.attr("type")!=null){o.setAttribute("type",f(this).attr("type"))}if(q.attr("src")!=null){o.setAttribute("src",f(this).attr("src"))}if(n.length>0){if(f.browser.msie){if(f.browser.version<8){window.execScript(n)}else{o.text=n;q.after(o);q.remove()}}else{var p=document.createTextNode(n);o.appendChild(p);q.after(o);q.remove()}}})};a.handleChangeState=function(){var n=d.getState();document.title=l;a.state=n;if(a.isDebug){console.log("SmartAjax: State changed!",n)}if(!a.isManual){j();a.instanceOptions=a.options;a._proceed.url=a.state.url;a._proceed.step=3;var m=a.instanceOptions.before(a.state.url);if(m===false){j()}}else{a.load_internal(a._proceed.url)}a.isManual=false;return true};a.load_internal=function(n){var m=a;if(m.currentRequest!==false){a.abort(false)}m.currentRequest=f.ajax(n,{cache:m.instanceOptions.cache,timeout:m.instanceOptions.timeout*1000,type:m._proceed.method.toUpperCase(),data:m._proceed.vars,beforeSend:function(p,o){p.setRequestHeader("Accept","text/html")},error:function(o,q,p){if(m.currentRequest===false){return}if(m.isDebug){console.log("SmartAjax: error loading ",n)}j();m.instanceOptions.error(n)},success:function(p,q,o){m._proceed.step=2;m._proceed.url=n;m._proceed.data=p;m.instanceOptions.success(n)},onreadystatechange:function(q,p){if((!f.browser.msie||(f.browser.msie&&f.browser.version>=9))){if((q.readyState==2||q.readyState==3)&&q.getResponseHeader("Content-Type").length>0){var o=q.getResponseHeader("Content-Type").match(a.contentTypeMatch);if(!g(o[0],a.allowedTypes)){a.abort(true)}}}}})};a.abort=function(n){if(n==c){n=true}if(a.currentRequest!==false){var m=a.currentRequest;if(!n){a.currentRequest=false}m.abort();j()}};a.handleFormButtons=function(){f("form input[type=submit]").click(function(){f("input[type=submit]",f(this).parents("form")).removeClass("SmartAjax_clicked");f(this).addClass("SmartAjax_clicked")})};function j(){a.currentRequest=false;a._proceed=f.extend({},a._proceedTemplate)}function e(q,n){var p="";var o=true;for(var m=0;m<q.length;m++){if(!o){p+=n}o=false;p+=q[m]}return p}function g(n,o){for(var m=0;m<o.length;m++){if(o[m]==n){return true}}return false}function h(m,o){for(var n=0;n<o.length;n++){if(m.is(o[n].selector)){return o[n]}}return false}function k(m){var o=m.serialize();var n;n=f("input[name][type=submit].SmartAjax_clicked",m);if(n.length==0){n=f("input[name][type=submit]",m)}if(n.length==0){return o}var p=n.attr("name")+"="+n.val();if(o.length>0){o+="&"+p}else{o=p}return o}function b(m,n){if(m.indexOf("?")>0){m=m.substring(0,m.indexOf("?"))}return m+"?"+n}f.expr[":"].ajaxlink=function(t,p,s,m){var r=f(t);var o=a;if(!r.is("a")){return false}var n=r.attr("href");if(typeof n==="undefined"||n===false){return false}var q=new RegExp("\\.("+e(o.linkFilter,"|")+")(#.*)?$","i");if(q.test(n)||n.substr(0,1)=="#"||n.substr(0,11)=="javascript:"){return false}else{if(o.isAbsolute.test(n)){return(n.substr(0,o.root.length)==o.root)}else{if(o.hasProtocol.test(n)){return false}else{return true}}}};f.expr[":"].ajaxform=function(s,p,r,m){var q=f(s);var n=a;if(!q.is("form")){return false}var o=q.attr("action")||"";if(n.isAbsolute.test(o)){return(o.substr(0,n.root.length)==n.root)}else{if(n.hasProtocol.test(o)){return false}else{return true}}};if((!f.browser.msie||(f.browser.msie&&f.browser.version>=9))){f.ajaxPrefilter(function(n,m,p){if(n.onreadystatechange){var o=n.xhr;n.xhr=function(){var r=o.apply(this,arguments);function q(){n.onreadystatechange(r,p)}if(r.addEventListener){r.addEventListener("readystatechange",q,false)}else{setTimeout(function(){var s=r.onreadystatechange;if(s){r.onreadystatechange=function(){q();s.apply(this,arguments)}}},0)}return r}}})}window.SmartAjax=a;a._init();d.Adapter.bind(window,"statechange",a.handleChangeState)})(window.jQuery,window.History);