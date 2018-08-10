webpackJsonp([0xb2078d670e21],{1051:function(n,e){n.exports={data:{latestPosts:{totalCount:60,edges:[{node:{title:"【網易考拉校招】部門總監面對面-直播答疑邀約（附網易內推碼B222E54）",url:"netease-kaola-live",createdDate:"2018-08-01T20:00+08:00"}},{node:{title:"Uncaught ReferenceError: regeneratorRuntime is not defined 解決方法",url:"regenerator-runtime-is-not-defined",createdDate:"2018-07-29T20:00+08:00"}},{node:{title:"關於作者",url:"about-calpa-liu",createdDate:"2018-05-01T20:00+08:00"}},{node:{title:"【方法】在直接複製貼上內容的時候，可能已經不知不覺注入了一段不可視的「空白」",url:"insert-zero-width-characters",createdDate:"2018-04-06T23:00+08:00"}},{node:{title:"知乎無限 live 數據流網站",url:"zhihu-unlimited-lives-website",createdDate:"2018-03-28T20:49+08:00"}},{node:{title:"Gatsbyjs async/await 更新報錯解決方法",url:"gatsybjs-async-await-upgrade-bug-solution",createdDate:"2018-03-21T20:00+08:00"}}]},pagePosts:{edges:[{node:{title:"CreateListFromArrayLike called on non-object 報錯的解決方法",createdDate:"2017-05-01T22:50+08:00",url:"CreateListFromArrayLike-problem-solution",headerImgur:null,content:"## 解決方法\n仔細再看一下到底你是如何調用`apply`的。。。\n\n你可能在使用Function.prototype.apply的時候不夠熟練，把`call`和`apply`的用法混在一起。。。。`call`是用0個或者更多的arguments，而`apply`則是用一個數組。\n\n## 錯誤例子\n```\nMath.max.apply(null, 1, 2, 3);\n// Uncaught TypeError: CreateListFromArrayLike called on non-object\n```\n\n## 正確例子\n```\nMath.max.call(null, 1, 2, 3); // 3\nMath.max.apply(null, [1, 2, 5, 10]); // 10\n```\n\n## 細節\n當調用`Function.prototype.apply`的時候，它會調用內置抽象操作：`CreateListFromArrayLike`。\n\n## CreateListFromArrayLike\n\n`CreateListFromArrayLike ( obj [ , elementTypes ] )`\n\nCreateListFromArrayLike 是一個ECMAScript的內置抽象操作 (Abstract Operation)，用於建立一個List的值，它的元素由類似數組的對象的索引屬性提供。`elementTypes`是一個List，只允許自身建立的`list`擁有ECMAScript Language 類型的值，比如`undefined, null, boolean`等。在調用的時候，它會執行以下步驟:\n1. 如果沒有定義`elementTypes`的話，它會被定義為« Undefined, Null, Boolean, String, Symbol, Number, Object »。\n2. 如果`Type(obj)`的類型不是Object，拋出TypeError 錯誤。\n3. 定義`len`為`obj`的length。\n4. 建立一個空的List `list`。\n5. 定義`index`為0\n6. 當index小於len的時候，重複以下步驟：\n\t1. 定義`indexName`為!ToString(index)\n\t2. 定義`next` 為?Get(obj, indexName)\n\t3. 如果`Type(next)`的類型不存在於`elementType`裡面，拋出TypeError 錯誤。\n\t4. 在`list`的最後增加next //`list.push(next)`\n\t5. `index`的值加1\n6. 返回`list`\n\n## 延伸閱讀\n1. 看V8是怎樣實現`Function.prototype.apply`\n2. 看V8是怎樣實現`CreateListFromArrayLike`\n\n## 參考資料\n1. [Function.prototype.apply - ECMAScript 2018](https://tc39.github.io/ecma262/#sec-function.prototype.apply)\n2. 踩過的坑。。。",tags:"JavaScript"}},{node:{title:"JavaScript 的 N 種 Hello World方法",createdDate:"2017-04-27T14:34+08:00",url:"n-ways-to-output-hello-world",headerImgur:"KMksHxZ.png",content:'在這些時候，我可以附和著笑，老闆是決不責備的。而且老闆見了他，也每每這樣問他，引人發笑。他自己知道不能和他們談天，便只好向孩子說話。有一回對我說道：「你讀過書麼？」我略略點一點頭。他說：「讀過書，。。。我便考你一考。代碼的Hello World，怎樣寫的？」他等了許久，很懇切的說道：「不能寫罷？。。。我教給你，記著！這些字應該記著。將來做老闆的時候，Debug要用。」我暗想我和老闆的等級還很遠呢，而且我們老闆也從不將代碼上傳；又好笑，又不耐煩，懶懶的答他道：「誰要你教，不就是用alert輸出嘛」他顯出極高興的樣子，將兩個指頭的長指甲敲著鍵盤，點頭說：「對呀對呀！。。。Hello World有四樣寫法，你知道麼？」我愈不耐煩了，努著嘴走遠。他剛用指甲蘸了酒，想在鍵盤上打字，見我毫不熱心，便又歎一口氣，顯出極惋惜的樣子。\n\n## alert()\n`alert("Hello, World!!");`\n\n## document.write()\n直接輸出`Hello, World!`到document:\n`document.write(\'Hello, World!\');`\n\n## document.writeln()\n在現有的document上增加`Hello, World!`這一行：\n\n`document.writeln(\'Hello, World!\');`\n\n## Function constructor\n使用Function constructor, 以及 Immediately-Invoked Function Expression (IIFE):\n```\nnew Function ([arg1[, arg2[, ...argN]],] functionBody);\n(new Function (\'console.log("Hello, World")\'))();\n```\n\n順帶一提，以下三種寫法，結果都是一樣的。\n```\nnew Function("a", "b", "c", "return a+b+c;"); // 每一個arugument都用,分開\nnew Function("a, b, c", "return a+b+c;");      \nnew Function("a,b", "c", "return a+b+c;");\n```\n\n輸出：\n```\nfunction anonymous(a, b, c\n/*``*/) {\nreturn a+b+c;\n}\n```\n\n## Function declaration\n```\nfunction sayHello() {\n  console.log(\'Hello, World!\');\n}\n\nsayHello(); // Hello, World!\nsayHello    // function sayHello() {\n        //   console.log(\'Hello, World!\');\n        // }\n```\n\n## Arrow Function\n```\n() => { console.log(\'Hello, World!\')};\n(() => { console.log(\'Hello, World!\')})(); // Hello, World!\n```\n\n## Promise\n先定義一個Promise：\n```\nvar helloPromise = new Promise(function(resolve){\n    resolve("Hello, World!");\n});\n```\n如果resolve成功的話，就會輸出"Hello, World!":\n```\nhelloPromise.then(function (value) {\n  console.log(value);\n}).catch(function (error) {\n  console.log(error);\n}); // Hello, World!\n```\n\n當然，你也可以利用Arrow Function這樣寫：\n```\nlet helloPromise = new Promise((resolve) => {\n  resolve("Hello, World!");\n});\n\nhelloPromise.then((value) => {\n  console.log(value);\n}).catch((error) => {\n  console.log(error);\n});\n```\n\n有幾回，鄰舍孩子聽得笑聲，也趕熱鬧，圍住了他。他便給他們看代碼，一人一段。孩子看完代碼，仍然不散，眼睛都望著屏幕。他著了慌，伸開五指將屏幕罩住，彎腰下去說道：「不多了，我已經不多了。」直起身又看一看代碼，自己搖頭說：「不多不多！多乎哉？不多也。」於是這一群孩子都在笑聲裏走散了。\n\n他是這樣的使人快活，可是沒有他，別人也便這麼過。\n\n自此以後，又長久沒有看見爪哇文。到了年關，掌櫃取下粉板說：「爪哇文還欠十九行代碼呢！」到第二年的端午，又說「爪哇文還欠十九行代碼呢！」到中秋可是沒有說，再到年關也沒有看見他。\n\n## 參考資料\n[Function constructor - ECMAScript® 2018 Language Specification](https://tc39.github.io/ecma262/#sec-function-p1-p2-pn-body)\n',tags:"JavaScript"}},{node:{title:"Coders of the Caribbean Online Contest 後記",createdDate:"2017-04-25T15:35+08:00",url:"coders-of-the-caribbean-review",headerImgur:null,content:"![Coders of the Caribbean report for Calpa](https://i.imgur.com/HDvrCYc.png)\n\n寫了一天Code後，我就把那些代碼放置在Codingame上面。今天它寄電郵給我說有比賽結果。對於這一次的結果，我完全不感到意外。因為很多地方都沒有去優化，比如說如何去計算各種行動的優先權重。這裡就不放上代碼了，還是下一次拿到更高的排名才放出來吧 XD\n\n看來我還是要好好地刷算法才行。。。\n",tags:"Codingame"}},{node:{title:"hackUST 2017 後記",createdDate:"2017-04-23T20:44+08:00",url:"hackUST-2017-hackathon-summary",headerImgur:"IJPUhSJ.jpg",content:"## 後記\n經過一天的努力，我們成功進入最後5強。這次比賽都幾好玩，基本上由第一天中午吃到晚上，然後第二天回來也是吃吃吃。雖然最後沒有取得獎金，但也是學到很多的知識。比如說如何解決安裝npm package問題，更新npm package問題。\n\n第一天中午的時候已經把Demo做出來了，但是不知道為什麼刪除`node_modules`之後，Expo就直接崩潰了。這是因為`package.json`裡面根本就沒有把完整的`dependencies`寫出來，當我輸入`npm install`的時候就不能順利安裝。於是我只能在CodePen裡面開一個[Pen](http://codepen.io/calpa/pen/LyZjPm)用來做控制器。\n\n## 技術細節\n這個控制器利用`window.addEventListener('deviceorientation', handleOrientation);\n`來監聽Android裝置的方向。當加速規偵測到裝置方向的變化，它就會調用`handleOrientation`方法。\n\n而`handleOrientation`方法有兩個目的：\n1. 獲取`event`裡面的`alpha`, `beta`, `gamma`數值，它們分別代表裝置的z軸， x軸， y軸動向。\n\n  z軸介乎於 0 ~ 360 度之間，x軸介乎於 -180 ~ 180 度之間，代表裝置的前後動向。y軸介乎於 -90 ~ 90 度之間，代表裝置的左右動向。\n\n1. 發送event到服務器。\n\n  這個很簡單，利用socket.io就可以了。比如說`socket.emit('event');`\n\n而在展示用戶數據的時候，我們用[C3.js](http://c3js.org/)來做實時渲染數據。利用C3.js，我們很容易就可以產生D3圖表，而不是重寫D3代碼。我們也可以修改每一個元素的樣式。感覺再寫下去就變教學文了。。。\n\n<iframe height='400' scrolling='no' title='Playground C3.js' src='//codepen.io/calpa/embed/MmevBr/?height=265&theme-id=0&default-tab=result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='http://codepen.io/calpa/pen/MmevBr/'>Playground C3.js</a> by Calpa Liu (<a href='http://codepen.io/calpa'>@calpa</a>) on <a href='http://codepen.io'>CodePen</a>.\n</iframe>\n\n## 比賽照片\n以下是比賽時拍攝的一些照片：\n![Imgur](https://i.imgur.com/vXyDaoY.jpg)\n\n感謝這次一起參賽的三位隊友。\n\n![Imgur](https://i.imgur.com/6nLsXEB.jpg)\n<center>比賽場地</center>\n\n\n![Imgur](https://i.imgur.com/2mLCtBm.jpg)\n<center>接待處</center>\n\n![Imgur](https://i.imgur.com/pL19qZw.jpg)\n<center>宣傳物品</center>\n\n![Imgur](https://i.imgur.com/g1GZHCJ.jpg)\n<center>平常用來賣官方廣告的地方現在用來賣hackUST和hardUST的廣告 XD</center>\n\n![Imgur](https://i.imgur.com/DbLEVGz.jpg)\n<center>演示的場地</center>\n\n這次主辦單位派發了港幣120元的餐券，還有很多零食，飲料。最重要的是，有我最喜歡的忌廉汽水www。希望以後都可以繼續參加比賽，學習更多的編程知識。\n\n## 參考資料\n1. [Detecting device orientation - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Detecting_device_orientation)\n1. [Socket.io 官方文檔](https://socket.io/docs/)\n1. [C3.js 官方Starter](http://c3js.org/gettingstarted.html)\n",tags:"Hackathon, HKUST"}},{node:{title:"Bootstrap v4 源碼分析(1)",createdDate:"2017-04-20T21:37+08:00",url:"bootstrap-code-analysis-1",headerImgur:null,content:"Bootstrap 是一個 Twitter 推出的 CSS 框架，也是我第一個使用的 CSS 框架。本文使用最新版本 v4.0.0-alpha.6，透過閱讀完整的源代碼，我們能夠更加了解 Bootstrap 的優缺點，以及如何自製 Bootstrap 輪子。\n\n## 為什麼使用Bootstrap\n\n透過使用Bootstrap框架，我們可以提高開發效率，避免重複製造輪子。\n\n## 閱讀本文所需知識\n1. 一顆好奇心\n1. 基本Bootstrap知識\n1. 基本SCSS/SASS知識\n\n## Bootstrap4 的新特性\n對比起Bootstrap3，Bootstrap4作出不少改動，以下是當中比較影響大的特性：\n1. 默認使用Flexbox\n1. 使用flexbox重新製作navbar，提高可塑性和客製化能力。\n1. `.card`代替`.panel`以及`.well`\n1. 能夠適應五種長度: xs, sm, md, lg, xl\n1. 更加大的默認字體: 16px\n1. 不再自帶Glyphicons圖案包。。。\n1. 使用SCSS開發\n\n## Bootstarp 源碼結構\n```\nbootstrap/  #v4-dev branch\n├── build/\n├── dist/ # 預先編譯的CSS\n│   ├── css/\n│   └── js/\n├── docs/ # 文檔\n    └── examples/ # 官方例子\n├── js/\n    ├── dist/\n    ├── src/\n    └── tests/\n├── nuget/\n└── scss/ # 本文開始入手的地方\n    ├── mixins/\n    └── utilities/\n```\n\n## Bootstrap Grid架構\nBootstrap使用`container`->`row`->`col-*-number`的架構。\n\n## 利用SCSS理解 Container\n在[_grid.scss](https://github.com/twbs/bootstrap/blob/094b3a129349a41b1319b0870fb3daa9459b7284/scss/_grid.scss)的一開始代碼段落中，我們可以看到`.container`, `.fluid-container`這兩個容器。如果 $enable-grid-classes是true的話，就可以使用`.container`以及`.fluid-container`。\n\n```\n@if $enable-grid-classes {\n  .container {\n    @include make-container();\n    @include make-container-max-widths();\n  }\n}\n\n@if $enable-grid-classes {\n  .container-fluid {\n    width: 100%;\n    @include make-container();\n  }\n}\n```\n\n## 理解Row\n```\n@if $enable-grid-classes {\n  @include make-row();\n  // 省略 .no-gutters\n}\n```\n\n## 用到的函式 (mixins)\n### container\n#### make-container (grid.scss)\n\n它們會調用[mixins/_grid.scss ](https://github.com/twbs/bootstrap/blob/2436ad589cfc235c84160fe14e4cc4ec97a9c5ca/scss/mixins/_grid.scss)裡面的[@mixin make-container](https://github.com/twbs/bootstrap/blob/2436ad589cfc235c84160fe14e4cc4ec97a9c5ca/scss/mixins/_grid.scss#L5)以及[@mixin make-container-max-widths](https://github.com/twbs/bootstrap/blob/2436ad589cfc235c84160fe14e4cc4ec97a9c5ca/scss/mixins/_grid.scss#L20)。\n```\n@mixin make-container($gutters: $grid-gutter-widths) {\n  margin-right: auto;\n  margin-left: auto;\n\n  @each $breakpoint in map-keys($gutters) {\n    @include media-breakpoint-up($breakpoint) {\n      $gutter: map-get($gutters, $breakpoint);\n      padding-right: ($gutter / 2);\n      padding-left:  ($gutter / 2);\n    }\n  }\n}\n```\n[map-get](http://sass-lang.com/documentation/Sass/Script/Functions.html#map_get-instance_method)則是Sass裡面的一個函數，輸入一個map以及key，如果map裡面有該key的話，就會返回key的值。找不到的話就會返回null。\n\n#### $grid-gutter-widths (variables.scss)\n如果沒有設置$gutters，它就會默認是[$grid-gutter-widths](https://github.com/twbs/bootstrap/blob/dd0ce3e4b2a89f245ee608a1acc9f848cf8c833a/scss/_variables.scss)，以下是$grid-gutter-widths的包含的數值: xs, sm, md, lg, xl。\n\n```\n$grid-gutter-width-base:     30px !default;\n$grid-gutter-widths: (\n  xs: $grid-gutter-width-base, // 30px\n  sm: $grid-gutter-width-base, // 30px\n  md: $grid-gutter-width-base, // 30px\n  lg: $grid-gutter-width-base, // 30px\n  xl: $grid-gutter-width-base  // 30px\n) !default;\n```\n\n#### $grid-breakpoints (variables.scss)\n```\n$grid-breakpoints: (\n  xs: 0,\n  sm: 576px,\n  md: 768px,\n  lg: 992px,\n  xl: 1200px\n) !default;\n```\n它定義不同設備的屏幕寬度，用於響應式設計(Responsive Web Design)。\n#### media-breakpoint-up (breakpoints.scss)\n而media-breakpoint-up則是在[mixins/_breakpoints.scss 第54行](https://github.com/twbs/bootstrap/blob/7ca078da815320c75862b6cf25f46ce706570279/scss/mixins/_breakpoints.scss#L54)，用處是返回最短寬度的內容。\n```\n@mixin media-breakpoint-up($name, $breakpoints: $grid-breakpoints) {\n  $min: breakpoint-min($name, $breakpoints);\n  @if $min {\n    @media (min-width: $min) {\n      @content;\n    }\n  } @else {\n    @content;\n  }\n}\n```\n\n#### breakpoint-min()\n`breakpoint-min()`可以在[mixins/_breakpoints.scss 第26行](https://github.com/twbs/bootstrap/blob/7ca078da815320c75862b6cf25f46ce706570279/scss/mixins/_breakpoints.scss#L26)找到，它的用處是返回最短斷點寬度或者null。\n\n```\n@function breakpoint-min($name, $breakpoints: $grid-breakpoints) {\n  $min: map-get($breakpoints, $name);\n  @return if($min != 0, $min, null);\n}\n```\n\n### row\n#### make-row() (grid.scss)\n```\n@mixin make-row($gutters: $grid-gutter-widths) {\n  display: flex;\n  flex-wrap: wrap;\n\n  @each $breakpoint in map-keys($gutters) {\n    @include media-breakpoint-up($breakpoint) {\n      $gutter: map-get($gutters, $breakpoint);\n      margin-right: ($gutter / -2);\n      margin-left:  ($gutter / -2);\n    }\n  }\n}\n```\n\n至於Column，我們下次再說吧。。。\n",tags:"Bootstrap, Web"}},{node:{title:"用 CSS 快速畫一個圓",createdDate:"2017-04-12T22:00+08:00",url:"use-css-to-draw-circle",headerImgur:null,content:"用CSS畫一個圓是很簡單的，用border-radius就可以了。\n\n<iframe height='293' scrolling='no' title='Circle' src='//codepen.io/calpa/embed/xdxOvV/?height=293&theme-id=0&default-tab=css,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'></iframe>\n\n但是其實border-radius可以加/來獲得特別效果XD\n\n<iframe height='265' scrolling='no' title='border-radius' src='//codepen.io/calpa/embed/eWmVwy/?height=265&theme-id=0&default-tab=css,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'></iframe>",tags:"CSS"}}]}},pathContext:{limit:6,skip:36}}}});
//# sourceMappingURL=path---page-6-5cb3d8fc5a8efdcd4e65.js.map