"use strict";var precacheConfig=[["jeremyhan111.github.io/index.html","11bed4bdaeac22ae4031a4d528160075"],["jeremyhan111.github.io/static/css/main.0b8c7191.css","2d9cd3238abddc6a496801bd0c23b688"],["jeremyhan111.github.io/static/js/main.b4bc6296.js","450fd95050e4f6c932f2d1f98304d6df"],["jeremyhan111.github.io/static/media/comment-button.32e58990.PNG","32e58990fdbf3ff37cc2c91ecc1d4ecb"],["jeremyhan111.github.io/static/media/cover-photo.b091125c.png","b091125cfc82dd8a3569ea53ad43b5e3"],["jeremyhan111.github.io/static/media/fb-earth-logo.bad8ab43.PNG","bad8ab434691ae44357c300b32950d58"],["jeremyhan111.github.io/static/media/friends-icon.85a09f72.PNG","85a09f728e86a62c2095900fd5bafdde"],["jeremyhan111.github.io/static/media/like-button.eb411b70.PNG","eb411b707f9b5fc68aac020508a76c33"],["jeremyhan111.github.io/static/media/liked-button.46b85cdf.PNG","46b85cdf04e96160b03a4e16eb32010a"],["jeremyhan111.github.io/static/media/photo-1.d35d0c98.jpg","d35d0c983286fc4e58ddb940c56d4f9c"],["jeremyhan111.github.io/static/media/photo-2.32974863.jpg","32974863be36d3a6b60af54eb9d9a981"],["jeremyhan111.github.io/static/media/photo-3.9f038055.jpg","9f0380552334fc080157572cb0c7889b"],["jeremyhan111.github.io/static/media/photo-5.7aa12b29.jpg","7aa12b2946b254db8e1419e8233e02ad"],["jeremyhan111.github.io/static/media/photo-6.b39f54ca.jpg","b39f54cae15c7f0789db92a739d0c9fa"],["jeremyhan111.github.io/static/media/photo-7.e826809a.jpg","e826809aa67677d6e3c967ca27b62830"],["jeremyhan111.github.io/static/media/photo-8.4d92dc80.jpg","4d92dc80ea5d076c2e948dabaefa9618"],["jeremyhan111.github.io/static/media/photo-9.adc6b79d.jpg","adc6b79dd3f15d6afb2f5acf4f5e48f8"],["jeremyhan111.github.io/static/media/photos-icon.09202a44.PNG","09202a44a03f56132571bc2a6ad949d5"],["jeremyhan111.github.io/static/media/share-button.d4231b81.PNG","d4231b81cbcd7c20ddedabd850cb0790"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),r=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),e=urlsToCacheKeys.has(a));var r="jeremyhan111.github.io/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});