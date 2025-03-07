import{o as s,c as a,q as t}from"./app.d9d94f7c.js";const l='{"title":"\u5FEB\u901F\u4E0A\u624B","description":"","frontmatter":{"lang":"cn"},"headers":[{"level":2,"title":"\u6CE8\u610F","slug":"\u6CE8\u610F"},{"level":3,"title":"\u5B8C\u6574\u5F15\u5165","slug":"\u5B8C\u6574\u5F15\u5165"},{"level":3,"title":"\u6309\u9700\u5BFC\u5165","slug":"\u6309\u9700\u5BFC\u5165"}],"relativePath":"cn/guide/quickstart.md","lastUpdated":1710840213000}',p={},r=Object.assign(p,{__name:"quickstart",setup(o){return(e,n)=>(s(),a("div",null,n[0]||(n[0]=[t(`<h1 id="\u5FEB\u901F\u4E0A\u624B" tabindex="-1">\u5FEB\u901F\u4E0A\u624B <a class="header-anchor vp-link" href="#\u5FEB\u901F\u4E0A\u624B" aria-hidden="true">#</a></h1><p>\u672C\u8282\u5C06\u4ECB\u7ECD\u5982\u4F55\u5728\u9879\u76EE\u4E2D\u4F7F\u7528 Howbuy OtcUI</p><h2 id="\u6CE8\u610F" tabindex="-1">\u6CE8\u610F <a class="header-anchor vp-link" href="#\u6CE8\u610F" aria-hidden="true">#</a></h2><p>Howbuy OtcUI \u662F\u4E00\u4E2A\u57FA\u4E8E ElementUI \u8FDB\u884C\u4E8C\u6B21\u5C01\u88C5\u7684\u7EC4\u4EF6\u5E93, \u6240\u4EE5\u5728\u4F7F\u7528\u7684\u65F6\u5019\uFF0C\u522B\u5FD8\u4E86\u5B89\u88C5\u6CE8\u518CElementPlus\u7EC4\u4EF6\u5E93\u3002</p><h3 id="\u5B8C\u6574\u5F15\u5165" tabindex="-1">\u5B8C\u6574\u5F15\u5165 <a class="header-anchor vp-link" href="#\u5B8C\u6574\u5F15\u5165" aria-hidden="true">#</a></h3><p>\u5982\u679C\u4F60\u5BF9\u6253\u5305\u540E\u7684\u6587\u4EF6\u5927\u5C0F\u4E0D\u662F\u5F88\u5728\u4E4E\uFF0C\u90A3\u4E48\u4F7F\u7528\u5B8C\u6574\u5BFC\u5165\u4F1A\u66F4\u65B9\u4FBF\u3002</p><div class="language-js"><pre><code>\u5728\u9879\u76EE\u7684 main<span class="token punctuation">.</span>ts \u5165\u53E3\u6587\u4E2D

<span class="token keyword">import</span> <span class="token punctuation">{</span> createApp <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>

<span class="token keyword">import</span> ElementPlus <span class="token keyword">from</span> <span class="token string">&#39;element-plus&#39;</span>
<span class="token keyword">import</span> HowbuyOtcUI <span class="token keyword">from</span> <span class="token string">&#39;@howbuy/otc-ui&#39;</span>

<span class="token keyword">import</span> <span class="token string">&#39;element-plus/dist/index.css&#39;</span>
<span class="token keyword">import</span> <span class="token string">&#39;@howbuy/otc-ui/dist/index.css&#39;</span>

<span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">&#39;./App.vue&#39;</span>

<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">createApp</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span>

app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>ElementPlus<span class="token punctuation">)</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>HowbuyOtcUI<span class="token punctuation">)</span>
app<span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">&#39;#app&#39;</span><span class="token punctuation">)</span>
</code></pre></div><h3 id="\u6309\u9700\u5BFC\u5165" tabindex="-1">\u6309\u9700\u5BFC\u5165 <a class="header-anchor vp-link" href="#\u6309\u9700\u5BFC\u5165" aria-hidden="true">#</a></h3><p>\u60A8\u9700\u8981\u4F7F\u7528\u989D\u5916\u7684\u63D2\u4EF6\u6765\u5BFC\u5165\u8981\u4F7F\u7528\u7684\u7EC4\u4EF6\u3002</p><div class="language-js"><pre><code><span class="token operator">&lt;</span>template<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>OtcButton<span class="token operator">&gt;</span><span class="token constant">I</span> am OtcButton<span class="token operator">&lt;</span><span class="token operator">/</span>OtcButton<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>script<span class="token operator">&gt;</span>
  <span class="token keyword">import</span> <span class="token punctuation">{</span> ElButton <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;element-plus&#39;</span>
  <span class="token keyword">import</span> <span class="token punctuation">{</span> OtcButton <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@howbuy/otc-ui&#39;</span>

  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span> ElButton<span class="token punctuation">,</span> OtcButton <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>
</code></pre></div>`,10)])))}});export{l as __pageData,r as default};
