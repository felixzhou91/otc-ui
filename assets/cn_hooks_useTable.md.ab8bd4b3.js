import{o as n,c as s,q as t}from"./app.d9d94f7c.js";const l='{"title":"\u5B89\u88C5","description":"","frontmatter":{"title":"\u5B89\u88C5","lang":"cn"},"headers":[{"level":2,"title":"\u57FA\u7840\u7528\u6CD5","slug":"\u57FA\u7840\u7528\u6CD5"}],"relativePath":"cn/hooks/useTable.md","lastUpdated":1725434322000}',p={},u=Object.assign(p,{__name:"useTable",setup(o){return(e,a)=>(n(),s("div",null,a[0]||(a[0]=[t(`<h1 id="usetable-\u5217\u8868\u67E5\u8BE2" tabindex="-1">useTable \u5217\u8868\u67E5\u8BE2 <a class="header-anchor vp-link" href="#usetable-\u5217\u8868\u67E5\u8BE2" aria-hidden="true">#</a></h1><p>\u5FEB\u901F\u521B\u5EFA\u4E00\u4E2A\u5217\u8868\u67E5\u8BE2\u9875\u9762\u6240\u9700\u8981\u7684\u4EE3\u7801\u5757\u3002</p><p>\u5217\u8868\u67E5\u8BE2\u9875\u9762\u7EC4\u6210\uFF1A<code>\u67E5\u8BE2\u6761\u4EF6</code>\u3001<code>table\u5217\u8868(\u5C55\u793A\u6570\u636E)</code>\u3001<code>\u5206\u9875\u5668</code>\u3002</p><h2 id="\u57FA\u7840\u7528\u6CD5" tabindex="-1">\u57FA\u7840\u7528\u6CD5 <a class="header-anchor vp-link" href="#\u57FA\u7840\u7528\u6CD5" aria-hidden="true">#</a></h2><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>OtcTableContainer</span>
    <span class="token attr-name">show-research</span>
    <span class="token attr-name">@research</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>tableResearchFn<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">@search</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>tableSearchFn<span class="token punctuation">&quot;</span></span>
<span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#top</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>OtcInput</span>
            <span class="token attr-name">v-model.trim</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>searchForm.id<span class="token punctuation">&quot;</span></span>
            <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\u4EFB\u52A1\u7F16\u53F7<span class="token punctuation">&quot;</span></span>
            <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>small<span class="token punctuation">&quot;</span></span>
            <span class="token attr-name">label-width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>85px<span class="token punctuation">&quot;</span></span>
            <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>300px<span class="token punctuation">&quot;</span></span>
            <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\u8BF7\u8F93\u5165<span class="token punctuation">&quot;</span></span>
        <span class="token punctuation">/&gt;</span></span>
        <span class="token comment">&lt;!-- \u67E5\u8BE2\u6761\u4EF6 --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#body</span><span class="token punctuation">&gt;</span></span>
        <span class="token comment">&lt;!-- table\u5217\u8868 --&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>OtcTableList</span>
            <span class="token attr-name">:loading</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>listLoading<span class="token punctuation">&quot;</span></span>
            <span class="token attr-name">:data</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>tableData<span class="token punctuation">&quot;</span></span>
            <span class="token attr-name">:columns</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>tableColumnList<span class="token punctuation">&quot;</span></span>
            <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>100%<span class="token punctuation">&quot;</span></span>
        <span class="token punctuation">&gt;</span></span>
        <span class="token comment">&lt;!-- \u5217\u8868\u5185\u5BB9 slot \u63D2\u69FD --&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>OtcTableList</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

    <span class="token comment">&lt;!-- \u5206\u9875\u5668 --&gt;</span>
     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>paginationTotal &gt; 0<span class="token punctuation">&quot;</span></span> <span class="token attr-name">#bottom</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>OtcPagination</span>
            <span class="token attr-name"><span class="token namespace">v-model:</span>current-page</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>paginationCurrentPage<span class="token punctuation">&quot;</span></span>
            <span class="token attr-name"><span class="token namespace">v-model:</span>page-size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>paginationPageSize<span class="token punctuation">&quot;</span></span>
            <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>small<span class="token punctuation">&quot;</span></span>
            <span class="token attr-name">:total</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>paginationTotal<span class="token punctuation">&quot;</span></span>
            <span class="token attr-name">@change</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>paginationChangeFn<span class="token punctuation">&quot;</span></span>
        <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>OtcTableContainer</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p>table\u5217\u8868\u9700\u8981\u5C55\u793A\u7684\u5B57\u6BB5\u914D\u7F6E\u6587\u4EF6\uFF0C<code>script/data.ts</code></p><div class="language-js"><pre><code><span class="token comment">// table\u5217\u8868\u9700\u8981\u5C55\u793A\u7684\u5B57\u6BB5\u914D\u7F6E</span>
<span class="token keyword">const</span> <span class="token literal-property property">tableColumnList</span><span class="token operator">:</span> any<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
        <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">&#39;id&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&#39;\u6D88\u606F\u7F16\u53F7&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">minWidth</span><span class="token operator">:</span> <span class="token string">&#39;150&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">align</span><span class="token operator">:</span> <span class="token string">&#39;center&#39;</span><span class="token punctuation">,</span>
        <span class="token function-variable function">formatter</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">row</span><span class="token operator">:</span> any<span class="token punctuation">,</span> <span class="token literal-property property">column</span><span class="token operator">:</span> any<span class="token punctuation">,</span> <span class="token literal-property property">cellValue</span><span class="token operator">:</span> any</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> cellValue <span class="token operator">||</span> <span class="token string">&#39;-&#39;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token operator">...</span>
<span class="token punctuation">]</span>
</code></pre></div><div class="language-js"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> useTable <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@common/hooks/new&#39;</span> <span class="token comment">// \u5BFC\u5165hooks\u6A21\u5757</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> fetchTableList<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@src/api/xxx&#39;</span> <span class="token comment">// \u5BFC\u5165\u63A5\u53E3api</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> tableColumnList <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./script/data&#39;</span>

<span class="token comment">// \u6839\u636E\u81EA\u5DF1\u9700\u8981\u4F20\u53C2\u6216\u5BFC\u51FA\u51FD\u6570\u53CA\u53D8\u91CF</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span>
    <span class="token comment">// table</span>
    tableListRef<span class="token punctuation">,</span>
    tableLoading<span class="token punctuation">,</span>
    tableSearchForm<span class="token punctuation">,</span>
    tableData<span class="token punctuation">,</span>
    tableSearchFn<span class="token punctuation">,</span>
    tableResearchFn<span class="token punctuation">,</span>

    <span class="token comment">// pagination</span>
    paginationCurrentPage<span class="token punctuation">,</span>
    paginationPageSize<span class="token punctuation">,</span>
    paginationTotal<span class="token punctuation">,</span>
    paginationChangeFn
<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useTable</span><span class="token punctuation">(</span>fetchTableList<span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">isImmediate</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// \u662F\u5426\u5728\u521D\u59CB\u5316\u65F6\u8C03\u7528\u67E5\u8BE2\u63A5\u53E3</span>
    <span class="token literal-property property">queryForm</span><span class="token operator">:</span> defaultData<span class="token punctuation">,</span> <span class="token comment">// \u9ED8\u8BA4\u67E5\u8BE2\u6761\u4EF6</span>
    <span class="token literal-property property">currentPageKeys</span><span class="token operator">:</span> <span class="token string">&#39;pageNo&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \u9ED8\u8BA4\u5206\u9875\u6570\u636Ekey</span>
    <span class="token literal-property property">pageSizeKeys</span><span class="token operator">:</span> <span class="token string">&#39;pageSize&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \u9ED8\u8BA4\u5206\u9875\u6570\u636Ekey</span>
    <span class="token literal-property property">isPagination</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// \u662F\u5426\u5F00\u542F\u5206\u9875</span>
    
    <span class="token comment">// \u641C\u7D22\u8868\u5355\u6570\u636E\u683C\u5F0F\u5316</span>
    <span class="token function-variable function">onBeforeSearch</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">data<span class="token punctuation">,</span> isResearch</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> params <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token operator">...</span>data <span class="token punctuation">}</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>isResearch<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            params<span class="token punctuation">.</span>appBeginDate <span class="token operator">=</span> workDay<span class="token punctuation">.</span>value <span class="token operator">||</span> <span class="token string">&#39;&#39;</span>
            params<span class="token punctuation">.</span>appEndDate <span class="token operator">=</span> workDay<span class="token punctuation">.</span>value <span class="token operator">||</span> <span class="token string">&#39;&#39;</span>
        <span class="token punctuation">}</span>
        tableSearchForm<span class="token punctuation">.</span>value <span class="token operator">=</span> params
        <span class="token keyword">return</span> params
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// \u63A5\u53E3\u8BF7\u6C42\u6210\u529F\u56DE\u8C03</span>
    <span class="token function-variable function">onSuccess</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> <span class="token punctuation">{</span> data <span class="token punctuation">}</span> <span class="token operator">=</span> res<span class="token punctuation">.</span>data <span class="token operator">||</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
        paginationTotal<span class="token punctuation">.</span>value <span class="token operator">=</span> data<span class="token operator">?.</span>total <span class="token operator">||</span> <span class="token number">0</span>
        tableData<span class="token punctuation">.</span>value <span class="token operator">=</span> data<span class="token operator">?.</span>list <span class="token operator">||</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// \u5217\u8868\u67E5\u8BE2\u63A5\u53E3\u8BF7\u6C42\u4E4B\u524D\u7684\u5904\u7406</span>
    <span class="token function-variable function">beforeCallback</span><span class="token operator">:</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> <span class="token punctuation">{</span> data <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">queryWorkDay</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        workDay<span class="token punctuation">.</span>value <span class="token operator">=</span> data <span class="token operator">||</span> <span class="token string">&#39;&#39;</span>
        tableSearchForm<span class="token punctuation">.</span>value<span class="token punctuation">.</span>appBeginDate <span class="token operator">=</span> data
        tableSearchForm<span class="token punctuation">.</span>value<span class="token punctuation">.</span>appEndDate <span class="token operator">=</span> data
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><p>\u5982\u4E0A\uFF1A\u4E00\u4E2A\u67E5\u8BE2\u5217\u8868\u5C31\u505A\u597D\u4E86\uFF0C\u662F\u4E0D\u662F\u8D85\u7EA7easy\uFF1F</p><p>\u6709\u4E86 <code>useTable</code> \u5E2E\u6211\u4EEC\u628A\u5927\u90E8\u5206\u7684\u5DE5\u4F5C\u505A\u4E86\uFF0C\u6211\u4EEC\u53EA\u9700\u8981\u5173\u6CE8\u4E1A\u52A1\u903B\u8F91\u5373\u53EF\uFF0C\u5F53\u7136\u8FD8\u5F97\u628A\u5217\u8868<code>tableColumnList</code>\u9700\u8981\u5C55\u793A\u7684\u5B57\u6BB5\u914D\u7F6E\u5B8C\u6210\u3002</p>`,10)])))}});export{l as __pageData,u as default};
