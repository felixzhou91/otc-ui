import{o as a,c as s,q as t}from"./app.0e767945.js";const l='{"title":"\u5B89\u88C5","description":"","frontmatter":{"title":"\u5B89\u88C5","lang":"cn"},"headers":[{"level":2,"title":"\u7236\u7EC4\u4EF6","slug":"\u7236\u7EC4\u4EF6"},{"level":2,"title":"\u5F39\u7A97\u7EC4\u4EF6","slug":"\u5F39\u7A97\u7EC4\u4EF6"}],"relativePath":"cn/hooks/useDialog.md","lastUpdated":1725434322000}',p={},u=Object.assign(p,{__name:"useDialog",setup(o){return(c,n)=>(a(),s("div",null,n[0]||(n[0]=[t(`<h1 id="usedialog-\u5F39\u7A97" tabindex="-1">useDialog \u5F39\u7A97 <a class="header-anchor vp-link" href="#usedialog-\u5F39\u7A97" aria-hidden="true">#</a></h1><p>\u5FEB\u901F\u521B\u5EFA\u5F39\u7A97 <code>Dialog</code> \u6240\u9700\u8981\u7684\u4EE3\u7801\u5757\u3002</p><h2 id="\u7236\u7EC4\u4EF6" tabindex="-1">\u7236\u7EC4\u4EF6 <a class="header-anchor vp-link" href="#\u7236\u7EC4\u4EF6" aria-hidden="true">#</a></h2><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>OtcButton</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>small<span class="token punctuation">&quot;</span></span> <span class="token attr-name">link</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>dialogOpenFn(row)<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u7F16\u8F91<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>OtcButton</span><span class="token punctuation">&gt;</span></span>

    <span class="token comment">&lt;!-- \u7236\u7EC4\u4EF6\u8C03\u7528\u5F39\u7A97 --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>DialogEdit</span>
        <span class="token attr-name">:title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>dialogTitle<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>dialogVisible<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">:data</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>dialogData<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">@close</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>dialogCloseFn<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">@submit</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>dialogSubmitFn<span class="token punctuation">&quot;</span></span>
    <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
    <span class="token keyword">import</span> DialogEdit <span class="token keyword">from</span> <span class="token string">&#39;./DialogEdit.vue&#39;</span>
    <span class="token keyword">import</span> <span class="token punctuation">{</span> useDialogForParent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@common/hooks/new&#39;</span> <span class="token comment">// \u5BFC\u5165hooks\u6A21\u5757</span>

    <span class="token comment">// \u7236\u7EC4\u4EF6\u7684--\u8C03\u7528\u5B50dialog\u5F39\u7A97</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> 
        <span class="token comment">// ref</span>
        dialogTitle<span class="token punctuation">,</span> <span class="token comment">// dialog\u6807\u9898</span>
        dialogVisible<span class="token punctuation">,</span> <span class="token comment">// dialog\u663E\u793A/\u9690\u85CF</span>
        dialogData<span class="token punctuation">,</span> <span class="token comment">// \u4F20\u9012\u7ED9dialog\u7684\u6570\u636E</span>

        <span class="token comment">// fn</span>
        dialogOpenFn<span class="token punctuation">,</span> <span class="token comment">// \u6253\u5F00\u5F39\u7A97</span>
        dialogCloseFn<span class="token punctuation">,</span> <span class="token comment">// \u5173\u95ED\u5F39\u7A97</span>
        dialogSubmitFn <span class="token comment">// \u5F39\u7A97\u63D0\u4EA4\u56DE\u8C03\u5904\u7406</span>
    <span class="token punctuation">}</span> <span class="token operator">=</span> useDialogForParent<span class="token operator">&lt;</span>Record<span class="token operator">&lt;</span>string<span class="token punctuation">,</span> any<span class="token operator">&gt;&gt;</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token function-variable function">submitCallback</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
            <span class="token comment">// \u5F39\u7A97\u63D0\u4EA4\u6210\u529F\u540E\u5237\u65B0\u5217\u8868</span>
            <span class="token comment">// tableSearchFn()</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token function-variable function">closeCallback</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
            <span class="token comment">// \u5173\u95ED\u5F39\u7A97\u540E\u5904\u7406</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h2 id="\u5F39\u7A97\u7EC4\u4EF6" tabindex="-1">\u5F39\u7A97\u7EC4\u4EF6 <a class="header-anchor vp-link" href="#\u5F39\u7A97\u7EC4\u4EF6" aria-hidden="true">#</a></h2><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-dialog</span>
        <span class="token attr-name">:width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>600<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">:close-on-click-modal</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>false<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">v-bind</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>$attrs<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">@opened</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>dialogOpenFn<span class="token punctuation">&quot;</span></span>
    <span class="token punctuation">&gt;</span></span>
        <span class="token comment">&lt;!-- dialog \u5185\u5BB9 --&gt;</span>

        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#footer</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>OtcButton</span>
                <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>primary<span class="token punctuation">&quot;</span></span>
                <span class="token attr-name">:disabled</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>isLoading<span class="token punctuation">&quot;</span></span>
                <span class="token attr-name">plain</span>
                <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>small<span class="token punctuation">&quot;</span></span>
                <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>dialogCloseFn<span class="token punctuation">&quot;</span></span>
                <span class="token punctuation">&gt;</span></span>\u5173\u95ED<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>OtcButton</span>
            <span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>OtcButton</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>primary<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:loading</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>isLoading<span class="token punctuation">&quot;</span></span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>small<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>dialogSubmitFn<span class="token punctuation">&quot;</span></span>
                <span class="token punctuation">&gt;</span></span>\u786E\u5B9A<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>OtcButton</span>
            <span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-dialog</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
    <span class="token keyword">import</span> <span class="token punctuation">{</span> useDialogForSelf <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@common/hooks/new&#39;</span> <span class="token comment">// \u5BFC\u5165hooks\u6A21\u5757</span>

    <span class="token keyword">const</span> props <span class="token operator">=</span> <span class="token function">defineProps</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">type</span><span class="token operator">:</span> Object<span class="token punctuation">,</span>
            <span class="token function-variable function">default</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
                <span class="token keyword">return</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

    <span class="token comment">// \u5B50 dialog</span>
    <span class="token keyword">const</span> emits <span class="token operator">=</span> <span class="token function">defineEmits</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;submit&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;close&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> dialogOpenFn<span class="token punctuation">,</span> dialogCloseFn<span class="token punctuation">,</span> dialogSubmitFn <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useDialogForSelf</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token function-variable function">openCallback</span><span class="token operator">:</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
            <span class="token function">formDataSetFn</span><span class="token punctuation">(</span>props<span class="token punctuation">.</span>data<span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token function-variable function">closeCallback</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
            <span class="token function">emits</span><span class="token punctuation">(</span><span class="token string">&#39;close&#39;</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token function-variable function">submitCallback</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
            <span class="token function">emits</span><span class="token punctuation">(</span><span class="token string">&#39;submit&#39;</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div>`,6)])))}});export{l as __pageData,u as default};
