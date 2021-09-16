(window.webpackJsonp=window.webpackJsonp||[]).push([[170],{601:function(e,t,r){"use strict";r.r(t);var s=r(46),a=Object(s.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"服务端渲染指南"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#服务端渲染指南"}},[e._v("#")]),e._v(" 服务端渲染指南")]),e._v(" "),r("blockquote",[r("p",[e._v("这份指南仍处在活跃更新的状态")])]),e._v(" "),r("h2",{attrs:{id:"什么是服务端渲染-ssr"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#什么是服务端渲染-ssr"}},[e._v("#")]),e._v(" 什么是服务端渲染 (SSR)？")]),e._v(" "),r("p",[e._v("Vue.js 是一个构建客户端应用的框架。默认情况下作为其输出，Vue 组件会在浏览器中生产并封装 DOM。然而，我们也有可能在服务器把相同的组件渲染成 HTML 字符串，然后直接发送给浏览器，最终将静态标记“hydrate”成为完整的可交互的客户端应用。")]),e._v(" "),r("p",[e._v("一个服务端渲染的 Vue.js 应用也可以被认为是“同构的”或”通用的“。这意味着应用代码的主体可以同时运行在“服务端”"),r("em",[e._v("和")]),e._v("“客户端”。")]),e._v(" "),r("h2",{attrs:{id:"为什么选择-ssr"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#为什么选择-ssr"}},[e._v("#")]),e._v(" 为什么选择 SSR？")]),e._v(" "),r("p",[e._v("较之于一个传统的 SPA (单页面应用)，SSR 主要的好处是：")]),e._v(" "),r("ul",[r("li",[r("p",[e._v("更好的搜索引擎优化 (SEO)。因为搜索引擎爬虫会直接读取完整的渲染出来的页面。")]),e._v(" "),r("p",[e._v("注意，目前 Google 和 Bing 已经可以很好地为同步加载的 JavaScript 应用建立索引。在这里同步加载是关键。如果应用起始状态只是一个加载中的效果，而通过 API 调用获取内容，则爬虫不会等待页面加载完成。这意味着如果你有异步加载的页面内容且 SEO 也很重要，那么你需要 SSR。")])]),e._v(" "),r("li",[r("p",[e._v("更快的内容呈现，尤其是网络连接缓慢或设备运行速度缓慢的时候。服务端标记不需要等待所有的 JavaScript 都被下载并执行之后才显示，所以用户可以很快看到完整渲染好的内容。这通常会带来更好的用户体验，同时对于内容呈现时间和转化率呈正相关的应用来说尤为关键。")])])]),e._v(" "),r("p",[e._v("这里有一些是否选用 SSR 的取舍因素：")]),e._v(" "),r("ul",[r("li",[r("p",[e._v("开发一致性。浏览器特有的代码可以只用在特性的生命周期钩子里；一些外部的库在服务端渲染的应用里可能需要特殊的对待。")])]),e._v(" "),r("li",[r("p",[e._v("需要更多的构建设定和部署要求。不同于一个完全静态的 SPA 可以部署在任意静态服务器，一个服务端渲染的应用需要一个 Node.js 的环境。")])]),e._v(" "),r("li",[r("p",[e._v("更多的服务端负载。在 Node.js 中渲染一个完整的应用会比服务静态文件产生更密集的 CPU 运算。所以如果流量很高，请务必备好与其负载相对应的服务器并采取明智的缓存策略。")])])]),e._v(" "),r("p",[e._v("Before using SSR for your application, the first question you should ask is whether you actually need it. It mostly depends on how important time-to-content is for your application. For example, if you are building an internal dashboard where an extra few hundred milliseconds on the initial load doesn't matter that much, SSR would be overkill. However, in cases where time-to-content is absolutely critical, SSR can help you achieve the best possible initial load performance.\n在应用中使用 SSR 之前，你需要问自己的第一个问题是是否真的需要它。")]),e._v(" "),r("h2",{attrs:{id:"ssr-vs-预渲染"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#ssr-vs-预渲染"}},[e._v("#")]),e._v(" SSR vs 预渲染")]),e._v(" "),r("p",[e._v("如果你希望通过 SSR 来改善一些推广页面 SEO (例如 "),r("code",[e._v("/")]),e._v("、"),r("code",[e._v("/about")]),e._v("、"),r("code",[e._v("/contact")]),e._v(" 等)，你也许需要的是"),r("strong",[e._v("预渲染")]),e._v("。和使用线上编译 HTML 的 web 服务器相比，预渲染可以在构建时为静态路由生成静态 HTML 文件。它的优势在于预渲染的设置更加简单，且前端仍然是一个完全静态的站点。")]),e._v(" "),r("p",[e._v("如果你使用 "),r("a",{attrs:{href:"https://webpack.js.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("webpack"),r("OutboundLink")],1),e._v("，你可以通过 "),r("a",{attrs:{href:"https://github.com/chrisvfritz/prerender-spa-plugin",target:"_blank",rel:"noopener noreferrer"}},[e._v("prerender-spa-plugin"),r("OutboundLink")],1),e._v(" 支持预渲染。该插件已经被大量 Vue 应用检验过。")]),e._v(" "),r("h2",{attrs:{id:"关于该指南"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#关于该指南"}},[e._v("#")]),e._v(" 关于该指南")]),e._v(" "),r("p",[e._v("该指南会非常深入且假设你已经熟悉 Vue.js 本身，且具有一定的 Node.js 和 webpack 知识和经验。")]),e._v(" "),r("p",[r("a",{attrs:{href:"#",title:"TODO: This guide is focused on server-rendered Single-Page Applications using Node.js as the server. Mixing Vue SSR with other backend setups is a topic of its own and briefly discussed in a [dedicated section]."}},[e._v("//")]),e._v(": # 'If you prefer a higher-level solution that provides a smooth out-of-the-box experience, you should probably give "),r("a",{attrs:{href:"https://nuxtjs.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Nuxt.js"),r("OutboundLink")],1),e._v(" a try. It's built upon the same Vue stack but abstracts away a lot of the boilerplate, and provides some extra features such as static site generation. However, it may not suit your use case if you need more direct control of your app's structure. Regardless, it would still be beneficial to read through this guide to understand better how things work together.'")]),e._v(" "),r("p",[e._v("最后，注意该指南的方案并不是最终方案——我们觉得它已经适合我们，但不意味着没有改进空间。它们将来也可能被修订——欢迎大家通过 pull request 来参与贡献！")])])}),[],!1,null,null,null);t.default=a.exports}}]);