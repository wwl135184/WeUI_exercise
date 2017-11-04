Vue.component("xloadMore", {
	template: `
		<div id="loadingToast" style="opacity: 1;" :style = "{'display' : bool ? 'block' : 'none'}">
	        <div class="weui-mask_transparent"></div>
	        <div class="weui-toast">
	            <i class="weui-loading weui-icon_toast"></i>
	            <p class="weui-toast__content">数据加载中</p>
	        </div>
	    </div>
	`,
	data: function(){
		return {
			bool: false
		}
	},
	mounted: function(){
		var self = this;
		bus.$on("showLoading", function(status){
			self.bool = status;
		})
	}
})
