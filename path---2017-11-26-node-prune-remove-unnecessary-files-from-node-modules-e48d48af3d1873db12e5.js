webpackJsonp([0xfeec5b188088],{1021:function(s,n){s.exports={data:{content:{content:'<h2 id=前言>前言</h2>\n<p>如果你有試過打包整個 Node 項目到服務器上，那麼你發現自己的項目體積比較大，其中一個原因是 <code>node_modules</code> 文件夾包含很多不必要的檔案。在使用 npm 安裝不同插件時，往往會包含很多不必要的文件夾，例如<code>example</code>, <code>doc</code>。要麼我們就是手動刪除它們，要麼我們就是自己寫一個自動腳本。而開發 Koa、Co、Express 的 TJ 大神則提供了一個簡單輕巧的工具。我們可以學習一下他的思路，以及使用這個工具。</p>\n<h2 id=簡述>簡述</h2>\n<p>node-prune 移除所有 <code>node_modules</code> 內的不必要的檔案，例如 markdown, typescript 源碼。具體的移除內容可以看下方的<a href="#移除檔案分析">移除檔案分析</a>。</p>\n<p>Github: <a href="https://github.com/tj/node-prune">tj/node-prune</a></p>\n<p><a data-fancybox="gallery" href="https://i.imgur.com/rpR4yVlh.jpg"><img class="lozad d-block mx-auto" data-src=https://i.imgur.com/rpR4yVll.jpg title="node_modules" /></a></p>\n<p>安裝方法：</p>\n<pre><code class="language-shell"><pre><code class="hljs shell">$ go get github.com/tj/node-prune/cmd/node-prune\n</code></pre></code></pre>\n<h2 id=使用方法>使用方法</h2>\n<p>你可以直接在項目的文件夾裡使用：</p>\n<pre><code><pre><code class="hljs javascript">$ node-prune\n\nfiles total <span class="hljs-number">27</span>,<span class="hljs-number">330</span>\nfiles removed <span class="hljs-number">3</span>,<span class="hljs-number">990</span>\nsize removed <span class="hljs-number">13</span> MB\n   duration <span class="hljs-number">200</span>ms\n</code></pre></code></pre>\n<p>或者你可以在其他文件夾裡面用，例如 <code>node_modules</code></p>\n<pre><code><pre><code class="hljs javascript">$ node-prune path/to/node_modules\n\nfiles total <span class="hljs-number">27</span>,<span class="hljs-number">330</span>\nfiles removed <span class="hljs-number">3</span>,<span class="hljs-number">990</span>\nsize removed <span class="hljs-number">13</span> MB\n   duration <span class="hljs-number">200</span>ms\n</code></pre></code></pre>\n<h2 id=移除檔案分析>移除檔案分析</h2>\n<h3 id=移除的檔案>移除的檔案</h3>\n<h4 id=自動化>自動化</h4>\n<p>這些文件你都會只用一次，無需一同打包上生產環境。</p>\n<pre><code><pre><code class="hljs javascript"><span class="hljs-string">"Makefile"</span>\n<span class="hljs-string">"Gulpfile.js"</span> <span class="hljs-comment">// Gulp 任務自動管理工具文件</span>\n<span class="hljs-string">"Gruntfile.js"</span> <span class="hljs-comment">// Grunt 任務自動管理工具文件</span>\n</code></pre></code></pre>\n<h4 id=與寫代碼時相關的>與寫代碼時相關的</h4>\n<p>無論你寫代碼所需要的檔案，還是那些編輯器自動產生的檔案，都不是必須的。</p>\n<pre><code><pre><code class="hljs javascript"><span class="hljs-string">".DS_Store"</span> <span class="hljs-comment">// Mac OS X 下的隱藏文件，用於儲存目錄的自定義屬性</span>\n<span class="hljs-string">".tern-project"</span> <span class="hljs-comment">// Tern server 所需文件</span>\n<span class="hljs-string">".gitattributes"</span> <span class="hljs-comment">// Git 屬性文件</span>\n<span class="hljs-string">".editorconfig"</span> <span class="hljs-comment">// 統一代碼格式的文件</span>\n<span class="hljs-string">".eslintrc"</span> <span class="hljs-comment">// 用於統一 Eslint 代碼風格 (JSON)</span>\n<span class="hljs-string">".eslintrc.js"</span> <span class="hljs-comment">// 用於統一 Eslint 代碼風格 (JavaScript)</span>\n<span class="hljs-string">".eslintignore"</span> <span class="hljs-comment">// 告訴 Eslint 忽略特定文件和目錄</span>\n<span class="hljs-string">".npmignore"</span> <span class="hljs-comment">// 告訴 NPM 忽略特定文件和目錄</span>\n<span class="hljs-string">".jshintrc"</span> <span class="hljs-comment">// 用於配置 JSHint</span>\n<span class="hljs-string">".flowconfig"</span> <span class="hljs-comment">// 用於配置 Facebook 出品的 Flow-typed</span>\n<span class="hljs-string">".documentup.json"</span>\n<span class="hljs-string">".yarn-metadata.json"</span>\n</code></pre></code></pre>\n<h4 id=自動化構建>自動化構建</h4>\n<pre><code><pre><code class="hljs javascript"><span class="hljs-string">".travis.yml"</span> <span class="hljs-comment">// 用於配置 Travis 自動化測試，部署</span>\n<span class="hljs-string">"appveyor.yml"</span> <span class="hljs-comment">// 用於配置 AppVeyor 自動化測試，部署</span>\n<span class="hljs-string">"circle.yml"</span> <span class="hljs-comment">// 用於配置 Circle 自動化測試，部署</span>\n<span class="hljs-string">".coveralls.yml"</span> <span class="hljs-comment">// Coverall</span>\n</code></pre></code></pre>\n<h4 id=給人類看的>給人類看的</h4>\n<p>這是最小化項目的其中一個步驟，畢竟你上傳的東西和項目開發的文件夾是不同的。</p>\n<pre><code><pre><code class="hljs javascript"><span class="hljs-string">"CHANGES"</span> <span class="hljs-comment">// 用於記錄項目改動</span>\n<span class="hljs-string">"LICENSE.txt"</span> <span class="hljs-comment">// 開源協議</span>\n<span class="hljs-string">"LICENSE"</span> <span class="hljs-comment">// 同上</span>\n<span class="hljs-string">"AUTHORS"</span> <span class="hljs-comment">// 作者</span>\n<span class="hljs-string">"CONTRIBUTORS"</span> <span class="hljs-comment">// 貢獻者</span>\n</code></pre></code></pre>\n<h4 id=Yarn相關>Yarn 相關</h4>\n<pre><code><pre><code class="hljs javascript"><span class="hljs-string">".yarn-integrity"</span> <span class="hljs-comment">// Yarn 文件</span>\n<span class="hljs-string">".yarnclean"</span>, <span class="hljs-comment">// Yarn 文件</span>\n</code></pre></code></pre>\n<h3 id=移除的檔案（副檔名）>移除的檔案（副檔名）</h3>\n<p>如果檔案有以下副檔名的話，也會一同刪除。</p>\n<pre><code><pre><code class="hljs javascript"><span class="hljs-string">".md"</span>, <span class="hljs-comment">// Markdown 檔案</span>\n<span class="hljs-string">".ts"</span>, <span class="hljs-comment">// TypeScript 源碼</span>\n<span class="hljs-string">".jst"</span>, <span class="hljs-comment">// Javascript Templates (JST)</span>\n<span class="hljs-string">".coffee"</span>, <span class="hljs-comment">// CoffeeScript</span>\n<span class="hljs-string">".tgz"</span>, <span class="hljs-comment">// tgz 壓縮檔案</span>\n<span class="hljs-string">".swp"</span>, <span class="hljs-comment">// vi 產生檔案</span>\n</code></pre></code></pre>\n<h3 id=移除的目錄>移除的目錄</h3>\n<p>測試用：&quot;_<em>tests_</em>&quot;,&quot;test&quot;,&quot;tests&quot;,&quot;powered-test&quot;</p>\n<p>文件類：&quot;docs&quot;,&quot;doc&quot;</p>\n<p>隱藏文件夾：&quot;.idea&quot;,&quot;.vscode&quot;</p>\n<p>Demo 類：&quot;website&quot;,&quot;images&quot;,&quot;assets&quot;,&quot;example&quot;,&quot;examples&quot;</p>\n<p>自動化工具類：&quot;coverage&quot;,&quot;.nyc_output&quot;,&quot;.circleci&quot;</p>\n<p>Github用： &quot;.github&quot;</p>\n<h2 id=感想>感想</h2>\n<p>我們可以按照這個思路，自己寫一個基於 Node.js 的腳本。另外，在 Github 上面，有人寫了一個等同 Node-prune 的 Shell 腳本。</p>\n<pre><code><pre><code class="hljs javascript"><span class="hljs-meta">#!/usr/bin/env bash</span>\nfind node_modules \\( -name <span class="hljs-string">\'__tests__\'</span> -o \\\n-name <span class="hljs-string">\'test\'</span> -o \\\n-name <span class="hljs-string">\'tests\'</span> -o \\\n-name <span class="hljs-string">\'powered-test\'</span> -o \\\n-name <span class="hljs-string">\'docs\'</span> -o \\\n-name <span class="hljs-string">\'doc\'</span> -o \\\n-name <span class="hljs-string">\'.idea\'</span> -o \\\n-name <span class="hljs-string">\'.vscode\'</span> -o \\\n-name <span class="hljs-string">\'website\'</span> -o \\\n-name <span class="hljs-string">\'images\'</span> -o \\\n-name <span class="hljs-string">\'assets\'</span> -o \\\n-name <span class="hljs-string">\'example\'</span> -o \\\n-name <span class="hljs-string">\'examples\'</span> -o \\\n-name <span class="hljs-string">\'coverage\'</span>-o \\\n-name <span class="hljs-string">\'.nyc_output\'</span> -o \\\n-name <span class="hljs-string">"*.md"</span> -o \\\n-name <span class="hljs-string">"*.ts"</span> -o \\\n-name <span class="hljs-string">"*.jst"</span> -o \\\n-name <span class="hljs-string">"*.coffee"</span> -o \\\n-name <span class="hljs-string">"*.tgz"</span> \\) -exec rm -rf {} \\;\n</code></pre></code></pre>\n',title:"Node-prune﹣﹣專門移除 node_modules 不必要檔案的輕量工具",createdDate:"2017-11-26T18:00+08:00",headerImgur:"Cpqs4sf.jpg",id:"6AubbWcyBOkkAKe84mIGIo",toc:["前言","簡述","使用方法","移除檔案分析","移除的檔案","自動化","與寫代碼時相關的","自動化構建","給人類看的","Yarn相關","移除的檔案（副檔名）","移除的目錄","感想"],tags:"Node_modules, Serverless"},latestPosts:{totalCount:60,edges:[{node:{title:"【網易考拉校招】部門總監面對面-直播答疑邀約（附網易內推碼B222E54）",url:"netease-kaola-live",createdDate:"2018-08-01T20:00+08:00"}},{node:{title:"Uncaught ReferenceError: regeneratorRuntime is not defined 解決方法",url:"regenerator-runtime-is-not-defined",createdDate:"2018-07-29T20:00+08:00"}},{node:{title:"關於作者",url:"about-calpa-liu",createdDate:"2018-05-01T20:00+08:00"}},{node:{title:"【方法】在直接複製貼上內容的時候，可能已經不知不覺注入了一段不可視的「空白」",url:"insert-zero-width-characters",createdDate:"2018-04-06T23:00+08:00"}},{node:{title:"知乎無限 live 數據流網站",url:"zhihu-unlimited-lives-website",createdDate:"2018-03-28T20:49+08:00"}},{node:{title:"Gatsbyjs async/await 更新報錯解決方法",url:"gatsybjs-async-await-upgrade-bug-solution",createdDate:"2018-03-21T20:00+08:00"}}]}},pathContext:{id:"6AubbWcyBOkkAKe84mIGIo"}}}});
//# sourceMappingURL=path---2017-11-26-node-prune-remove-unnecessary-files-from-node-modules-e48d48af3d1873db12e5.js.map