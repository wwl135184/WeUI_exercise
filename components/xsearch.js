Vue.component("xsearch", {
	template: `
		<div class="weui-search-bar" :class = "{'weui-search-bar_focusing' : bool}"id="searchBar">
            <form class="weui-search-bar__form">
                <div class="weui-search-bar__box">
                    <i class="weui-icon-search"></i>
                    <input v-model = "search" type="search" class="weui-search-bar__input" id="searchInput" placeholder="搜索" required="">
                    <a href="javascript:" class="weui-icon-clear" id="searchClear"></a>
                </div>
                <label @click = "searchText" class="weui-search-bar__label" id="searchText" style="transform-origin: 0px 0px 0px; opacity: 1; transform: scale(1, 1);">
                    <i class="weui-icon-search"></i>
                    <span>搜索</span>
                </label>
            </form>
            <a @click = "searchCancel" href="javascript:" class="weui-search-bar__cancel-btn" id="searchCancel">取消</a>
        </div>
	`,
	data: function(){
		return {
			bool: false,
			search: ""
		}
	},
	methods: {
		searchText: function(){
			this.bool = true;
		},
		searchCancel: function(){
			this.bool = false;
		}
	},
	watch: {
		search: function(){
//			console.log(this.search);
			this.$parent.$children[3].search = this.search;
//			console.log(this.$parent.$children[3].search);
		}
	}
})
