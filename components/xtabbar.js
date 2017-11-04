Vue.component("xTabbar", {
	template: `
		<div class="weui-tabbar">
	        <a @click = "showTab(n.id)" href="javascript:;" class="weui-tabbar__item" :id = "n.id + '==' + id" v-for = "n in news"  :class = "{'weui-bar__item_on' : id == n.id}">
	            <span style="display: inline-block;position: relative;">
	                <img src="./img/16dd2373-8ffa-460b-8bc2-5254b02044c1.png" alt="" class="weui-tabbar__icon">
	                <span class="weui-badge" style="position: absolute;top: -2px;right: -13px;">0</span>
	            </span>
	            <p class="weui-tabbar__label">{{n.title}}</p>
	        </a>
	    </div>
	`,
	data: function(){
		return {
			news: [],
			id: 1
		}
	},
	methods: {
		loadtab: function(){
			var self = this;
			$.ajax({
				url: "http://localhost:3000/json/tabbar.json",
				type: "GET",
				async: true,
				success: function(data){
					console.log(data);
					self.news = self.news.concat(data);
				}
			})
		},
		showTab: function(id){
			this.id = id;
		}
	},
	mounted: function(){
		this.loadtab();
	}
})
