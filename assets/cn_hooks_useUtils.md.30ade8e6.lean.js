import{o as n,c as s,q as t}from"./app.0e767945.js";const l='{"title":"\u5B89\u88C5","description":"","frontmatter":{"title":"\u5B89\u88C5","lang":"cn"},"headers":[{"level":2,"title":"\u57FA\u7840\u7528\u6CD5","slug":"\u57FA\u7840\u7528\u6CD5"}],"relativePath":"cn/hooks/useUtils.md","lastUpdated":1725434322000}',p={},u=Object.assign(p,{__name:"useUtils",setup(o){return(e,a)=>(n(),s("div",null,a[0]||(a[0]=[t(`<h1 id="useutils-\u5DE5\u5177" tabindex="-1">useUtils \u5DE5\u5177 <a class="header-anchor vp-link" href="#useutils-\u5DE5\u5177" aria-hidden="true">#</a></h1><p>\u516C\u5171\u5DE5\u5177\u65B9\u6CD5\u3002</p><h2 id="\u57FA\u7840\u7528\u6CD5" tabindex="-1">\u57FA\u7840\u7528\u6CD5 <a class="header-anchor vp-link" href="#\u57FA\u7840\u7528\u6CD5" aria-hidden="true">#</a></h2><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>OtcTimePicker</span>
        <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>formData.time<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>small<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\u8BF7\u9009\u62E9\u65F6\u95F4<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">:disabled-hours</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>disabledNotTradingHours<span class="token punctuation">&quot;</span></span>
    <span class="token punctuation">/&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>OtcDatePicker</span>
        <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>formData.date<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\u8BF7\u9009\u62E9\u65E5\u671F<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>small<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">value-format</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>YYYYMMDD<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">:disabled-date</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>disabledNotTodayDate<span class="token punctuation">&quot;</span></span> 
    <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
    <span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
    <span class="token keyword">import</span> <span class="token punctuation">{</span> useUtils <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@common/hooks&#39;</span> <span class="token comment">// \u5BFC\u5165hooks\u6A21\u5757</span>

    <span class="token keyword">const</span> formData <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">time</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">date</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

    <span class="token comment">// \u6839\u636E\u81EA\u5DF1\u9700\u8981\u4F20\u53C2\u6216\u5BFC\u51FA\u51FD\u6570\u53CA\u53D8\u91CF</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span>
        disabledNotTradingHours<span class="token punctuation">,</span> <span class="token comment">// \u7981\u7528\u975E\u4EA4\u6613\u65F6\u95F4\uFF089-15\u70B9\u4E4B\u5916\u7684\u65F6\u95F4\uFF09</span>
        disabledNotTodayDate <span class="token comment">// \u7981\u7528\u975E\u5F53\u5929\u65E5\u671F</span>
    <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useUtils</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div>`,4)])))}});export{l as __pageData,u as default};
