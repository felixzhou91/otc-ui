import{o as a,c as s,q as t}from"./app.0e767945.js";const l='{"title":"\u5B89\u88C5","description":"","frontmatter":{"title":"\u5B89\u88C5","lang":"cn"},"headers":[{"level":2,"title":"\u57FA\u7840\u7528\u6CD5","slug":"\u57FA\u7840\u7528\u6CD5"}],"relativePath":"cn/hooks/useForm.md","lastUpdated":1725434322000}',p={},u=Object.assign(p,{__name:"useForm",setup(o){return(e,n)=>(a(),s("div",null,n[0]||(n[0]=[t(`<h1 id="useform-\u8868\u5355" tabindex="-1">useForm \u8868\u5355 <a class="header-anchor vp-link" href="#useform-\u8868\u5355" aria-hidden="true">#</a></h1><p>\u5FEB\u901F\u521B\u5EFAForm\u8868\u5355\u6570\u636E\u5F55\u5165\u7EC4\u4EF6\uFF0C\u7B80\u5316\u5F00\u53D1\u6240\u9700\u8981\u7684\u4EE3\u7801\u5757\u3002</p><p>Form\u8868\u5355\u578B\u6A21\u5757\u6216\u9875\u9762\u7EC4\u6210\uFF1A<code>\u6570\u636E\u5F55\u5165</code>\u3001<code>\u6570\u636E\u6821\u9A8C</code>\u3001<code>\u63D0\u4EA4\u6570\u636E</code>\u3002</p><h2 id="\u57FA\u7840\u7528\u6CD5" tabindex="-1">\u57FA\u7840\u7528\u6CD5 <a class="header-anchor vp-link" href="#\u57FA\u7840\u7528\u6CD5" aria-hidden="true">#</a></h2><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>page-container__card<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>OtcFormHeader</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>isExpand<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>title<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:show-expand</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">v-show</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>isExpand<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>FormContainer</span>
            <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>formDataRef<span class="token punctuation">&quot;</span></span>
            <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>formData<span class="token punctuation">&quot;</span></span>
            <span class="token attr-name">:columns</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>formColumns<span class="token punctuation">&quot;</span></span>
            <span class="token attr-name">:row-column-num</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>2<span class="token punctuation">&quot;</span></span>
            <span class="token attr-name">th-width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>190px<span class="token punctuation">&quot;</span></span>
        <span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#transactorId-td</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>OtcSelect</span>
                    <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>formData.transactorId<span class="token punctuation">&quot;</span></span>
                    <span class="token attr-name">clearable</span>
                    <span class="token attr-name">filterable</span>
                    <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>small<span class="token punctuation">&quot;</span></span>
                    <span class="token attr-name">reserve-keyword</span>
                    <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\u8BF7\u9009\u62E9<span class="token punctuation">&quot;</span></span>
                    <span class="token attr-name">:option-list</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>transactorList<span class="token punctuation">&quot;</span></span>
                    <span class="token attr-name">label-format</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>transactorName<span class="token punctuation">&quot;</span></span>
                    <span class="token attr-name">value-format</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>transactorId<span class="token punctuation">&quot;</span></span>
                    <span class="token attr-name">@change</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>handleTransactorChange<span class="token punctuation">&quot;</span></span>
                <span class="token punctuation">/&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>FormContainer</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p>\u8868\u5355\u9700\u8981\u5C55\u793A\u7684\u5B57\u6BB5\u914D\u7F6E\u6587\u4EF6\uFF0C<code>script/data.ts</code></p><div class="language-js"><pre><code>    
<span class="token comment">//form \u8868\u5355\u914D\u7F6E</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> getFormColumns <span class="token operator">=</span> <span class="token punctuation">(</span>
    <span class="token literal-property property">actionType</span><span class="token operator">:</span> <span class="token string">&#39;create&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;edit&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;detail&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token operator">:</span> FormContainerType<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u53EA\u80FD\u67E5\u770B\u4E0D\u80FD\u4FEE\u6539</span>
    <span class="token keyword">const</span> isView <span class="token operator">=</span> actionType <span class="token operator">===</span> <span class="token string">&#39;detail&#39;</span>
    <span class="token keyword">const</span> isRequire <span class="token operator">=</span> <span class="token boolean">true</span>
    <span class="token keyword">const</span> isRulesRequired <span class="token operator">=</span> isView <span class="token operator">?</span> <span class="token boolean">false</span> <span class="token operator">:</span> <span class="token boolean">true</span>

    <span class="token keyword">return</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;input&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">&#39;transactorName&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&#39;\u7ECF\u529E\u4EBA\u59D3\u540D&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">require</span><span class="token operator">:</span> isRequire<span class="token punctuation">,</span>
            <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token literal-property property">disabled</span><span class="token operator">:</span> isView
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token function-variable function">rules</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
                <span class="token keyword">return</span> <span class="token punctuation">[</span>
                    <span class="token punctuation">{</span>
                        <span class="token literal-property property">required</span><span class="token operator">:</span> isRulesRequired<span class="token punctuation">,</span>
                        <span class="token literal-property property">trigger</span><span class="token operator">:</span> <span class="token string">&#39;submit&#39;</span><span class="token punctuation">,</span>
                        <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">&#39;\u7ECF\u529E\u4EBA\u59D3\u540D\u4E0D\u80FD\u4E3A\u7A7A&#39;</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">]</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;select&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">&#39;transactorType&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&#39;\u7ECF\u529E\u4EBA\u4E2A\u4EBA/\u673A\u6784\u7C7B\u578B&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">require</span><span class="token operator">:</span> isRequire<span class="token punctuation">,</span>
            <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token literal-property property">disabled</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
                <span class="token literal-property property">optionList</span><span class="token operator">:</span> <span class="token constant">ALL_OPTIONS</span><span class="token operator">?.</span><span class="token constant">CON_HOLDER_TYPE</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token function-variable function">rules</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
                <span class="token keyword">return</span> <span class="token punctuation">[</span>
                    <span class="token punctuation">{</span>
                        <span class="token literal-property property">required</span><span class="token operator">:</span> isRulesRequired<span class="token punctuation">,</span>
                        <span class="token literal-property property">trigger</span><span class="token operator">:</span> <span class="token string">&#39;submit&#39;</span><span class="token punctuation">,</span>
                        <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">&#39;\u8BF7\u9009\u62E9\u7ECF\u529E\u4EBA\u4E2A\u4EBA/\u673A\u6784\u7C7B\u578B&#39;</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">]</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
</code></pre></div><div class="language-js"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> useForm <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@common/hooks/new&#39;</span> <span class="token comment">// \u5BFC\u5165hooks\u6A21\u5757</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> getFormColumns <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./script/formColumns.ts&#39;</span>

<span class="token keyword">const</span> formColumns <span class="token operator">=</span> <span class="token function">computed</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">getFormColumns</span><span class="token punctuation">(</span><span class="token string">&#39;edit&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// \u6839\u636E\u81EA\u5DF1\u9700\u8981\u4F20\u53C2\u6216\u5BFC\u51FA\u51FD\u6570\u53CA\u53D8\u91CF</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span>
    isExpand<span class="token punctuation">,</span> <span class="token comment">// \u5C55\u5F00/\u6536\u8D77 \u63A7\u5236</span>
    isLoading<span class="token punctuation">,</span> <span class="token comment">// \u63D0\u4EA4loading</span>
    formData<span class="token punctuation">,</span> <span class="token comment">// form\u8868\u5355\u6570\u636E</span>
    formDataRef<span class="token punctuation">,</span> <span class="token comment">// form\u8868\u5355ref</span>
    formDataGetFn<span class="token punctuation">,</span>  <span class="token comment">// \u83B7\u53D6form\u8868\u5355\u6570\u636E</span>
    formDataSetFn<span class="token punctuation">,</span> <span class="token comment">// \u8BBE\u7F6Eform\u6570\u636E</span>
    formDataResetFn<span class="token punctuation">,</span> <span class="token comment">// \u91CD\u7F6E\u8868\u5355\u3001\u6E05\u9664\u6821\u9A8C\u7ED3\u679C\u3001\u6E05\u7A7A\u6570\u636E</span>
    formValidateFn<span class="token punctuation">,</span> <span class="token comment">// \u83B7\u53D6\u8868\u5355\u6821\u9A8C\u7ED3\u679C</span>
    formValidateFieldFn<span class="token punctuation">,</span> <span class="token comment">// \u83B7\u53D6\u8868\u5355\u90E8\u5206\u5B57\u6BB5\u6821\u9A8C\u7ED3\u679C</span>
    formResetFieldsFn<span class="token punctuation">,</span> <span class="token comment">// \u91CD\u7F6E\u8868\u5355\u3001\u6E05\u9664\u6821\u9A8C\u7ED3\u679C</span>
    formClearValidateFn <span class="token comment">// \u6E05\u9664\u90E8\u5206\u5B57\u6BB5\u6821\u9A8C\u7ED3\u679C</span>
<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useForm</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">defaultData</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token comment">// \u521D\u59CB\u6570\u636E</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div>`,8)])))}});export{l as __pageData,u as default};
