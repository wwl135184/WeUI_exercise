Vue.component("xlist", {
	template: `
		<div class="weui-grids">
        <a href="javascript:;" class="weui-grid" v-for = "n in news" @click = "showAction">
            <div class="weui-grid__icon">
                <img :src="n.img" alt="">
            </div>
            <p class="weui-grid__label">{{n.title}}</p>
        </a>
    </div>
	`,
	data: function(){
		return {
			news: []
		}
	},
	methods: {
		loadGrids: function(){
			var self = this;
			$.ajax({
				url: "http://localhost:3000/json/xlist.json",
				type: "GET",
				async: true,
				success: function(data){
					self.news = self.news.concat(data);
				}
			})
		},
		showAction: function(){
			this.$parent.$children[6].bool = !this.$parent.$children[6].bool;
			this.$parent.$children[7].bool = !this.$parent.$children[7].bool;
		}
	},
	mounted: function(){
		this.loadGrids();
	}
})
