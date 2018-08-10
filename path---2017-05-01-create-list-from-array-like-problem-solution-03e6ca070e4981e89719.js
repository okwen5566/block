webpackJsonp([59990977225276],{995:function(e,n){e.exports={data:{content:{content:'<h2 id=解決方法>解決方法</h2>\n<p>仔細再看一下到底你是如何調用<code>apply</code>的。。。</p>\n<p>你可能在使用Function.prototype.apply的時候不夠熟練，把<code>call</code>和<code>apply</code>的用法混在一起。。。。<code>call</code>是用0個或者更多的arguments，而<code>apply</code>則是用一個數組。</p>\n<h2 id=錯誤例子>錯誤例子</h2>\n<pre><code><pre><code class="hljs javascript"><span class="hljs-built_in">Math</span>.max.apply(<span class="hljs-literal">null</span>, <span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>);\n<span class="hljs-comment">// Uncaught TypeError: CreateListFromArrayLike called on non-object</span>\n</code></pre></code></pre>\n<h2 id=正確例子>正確例子</h2>\n<pre><code><pre><code class="hljs javascript"><span class="hljs-built_in">Math</span>.max.call(<span class="hljs-literal">null</span>, <span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>); <span class="hljs-comment">// 3</span>\n<span class="hljs-built_in">Math</span>.max.apply(<span class="hljs-literal">null</span>, [<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">5</span>, <span class="hljs-number">10</span>]); <span class="hljs-comment">// 10</span>\n</code></pre></code></pre>\n<h2 id=細節>細節</h2>\n<p>當調用<code>Function.prototype.apply</code>的時候，它會調用內置抽象操作：<code>CreateListFromArrayLike</code>。</p>\n<h2 id=CreateListFromArrayLike>CreateListFromArrayLike</h2>\n<p><code>CreateListFromArrayLike ( obj [ , elementTypes ] )</code></p>\n<p>CreateListFromArrayLike 是一個ECMAScript的內置抽象操作 (Abstract Operation)，用於建立一個List的值，它的元素由類似數組的對象的索引屬性提供。<code>elementTypes</code>是一個List，只允許自身建立的<code>list</code>擁有ECMAScript Language 類型的值，比如<code>undefined, null, boolean</code>等。在調用的時候，它會執行以下步驟:</p>\n<ol>\n<li>如果沒有定義<code>elementTypes</code>的話，它會被定義為« Undefined, Null, Boolean, String, Symbol, Number, Object »。</li>\n<li>如果<code>Type(obj)</code>的類型不是Object，拋出TypeError 錯誤。</li>\n<li>定義<code>len</code>為<code>obj</code>的length。</li>\n<li>建立一個空的List <code>list</code>。</li>\n<li>定義<code>index</code>為0</li>\n<li>當index小於len的時候，重複以下步驟：\n<ol>\n<li>定義<code>indexName</code>為!ToString(index)</li>\n<li>定義<code>next</code> 為?Get(obj, indexName)</li>\n<li>如果<code>Type(next)</code>的類型不存在於<code>elementType</code>裡面，拋出TypeError 錯誤。</li>\n<li>在<code>list</code>的最後增加next //<code>list.push(next)</code></li>\n<li><code>index</code>的值加1</li>\n</ol></li>\n<li>返回<code>list</code></li>\n</ol>\n<h2 id=延伸閱讀>延伸閱讀</h2>\n<ol>\n<li>看V8是怎樣實現<code>Function.prototype.apply</code></li>\n<li>看V8是怎樣實現<code>CreateListFromArrayLike</code></li>\n</ol>\n<h2 id=參考資料>參考資料</h2>\n<ol>\n<li><a href="https://tc39.github.io/ecma262/#sec-function.prototype.apply">Function.prototype.apply - ECMAScript 2018</a></li>\n<li>踩過的坑。。。</li>\n</ol>\n',title:"CreateListFromArrayLike called on non-object 報錯的解決方法",createdDate:"2017-05-01T22:50+08:00",headerImgur:null,id:"26lHnWoMq4scaYGMSikKUY",toc:["解決方法","錯誤例子","正確例子","細節","CreateListFromArrayLike","延伸閱讀","參考資料"],tags:"JavaScript"},latestPosts:{totalCount:60,edges:[{node:{title:"【網易考拉校招】部門總監面對面-直播答疑邀約（附網易內推碼B222E54）",url:"netease-kaola-live",createdDate:"2018-08-01T20:00+08:00"}},{node:{title:"Uncaught ReferenceError: regeneratorRuntime is not defined 解決方法",url:"regenerator-runtime-is-not-defined",createdDate:"2018-07-29T20:00+08:00"}},{node:{title:"關於作者",url:"about-calpa-liu",createdDate:"2018-05-01T20:00+08:00"}},{node:{title:"【方法】在直接複製貼上內容的時候，可能已經不知不覺注入了一段不可視的「空白」",url:"insert-zero-width-characters",createdDate:"2018-04-06T23:00+08:00"}},{node:{title:"知乎無限 live 數據流網站",url:"zhihu-unlimited-lives-website",createdDate:"2018-03-28T20:49+08:00"}},{node:{title:"Gatsbyjs async/await 更新報錯解決方法",url:"gatsybjs-async-await-upgrade-bug-solution",createdDate:"2018-03-21T20:00+08:00"}}]}},pathContext:{id:"26lHnWoMq4scaYGMSikKUY"}}}});
//# sourceMappingURL=path---2017-05-01-create-list-from-array-like-problem-solution-03e6ca070e4981e89719.js.map