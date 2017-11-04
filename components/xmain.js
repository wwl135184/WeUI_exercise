Vue.component("xmain", {
	template: `
		<div class="weui-panel weui-panel_access">
            <div class="weui-panel__hd">实时资讯</div>
            <div class="weui-panel__bd">
                <a href="javascript:void(0);" class="weui-media-box weui-media-box_appmsg" v-for = "n in computednews">
                    <div class="weui-media-box__hd">
                        <img @click = "showGallery(n.thumbnails[0])" class="weui-media-box__thumb" :src="n.thumbnails[0]" alt="">
                    </div>
                    <div class="weui-media-box__bd">
                        <h4 class="weui-media-box__title">{{n.source?n.source:"正在加载中..."}}</h4>
                        <p class="weui-media-box__desc">{{n.title?n.title:"正在加载中..."}}</p>
                    </div>
                </a>
                
            </div>
            <div class="weui-panel__ft">
                <a href="javascript:void(0);" class="weui-cell weui-cell_access weui-cell_link" @click = "loadMore">
                    <div class="weui-cell__bd">查看更多</div>
                    <span class="weui-cell__ft"></span>
                </a>    
            </div>
        </div>
	`,
	data: function(){
		return{
			news: [],
			search: "",
			bool: true
		}
	},
	methods: {
		loadMore: function(){
			this.bool = false;
			bus.$emit("showLoading", true);
			var self = this;
			$.ajax({
				url: "http://localhost:3000/json/qqnews.json",
				type: "GET",
				async: true,
				success: function(data){
//					console.log(data.newslist);
					setTimeout(function(){
						self.bool = true;
						bus.$emit("showLoading", false);
						self.news = self.news.concat(data.newslist);
					},2000)
				}
			})
		},
		showGallery: function(url){
//			console.log(this.$parent.$children);
			this.$parent.$children[4].bool = true;
			this.$parent.$children[4].url = url;
		}
	},
	mounted: function(){
		this.loadMore();
	},
	computed: {
		computednews: function(){
			var self = this;
			var newArr = this.news.filter(function(value){
				return value.title.indexOf(self.search) !== -1;
			})
			return newArr;
		}
	}
})
