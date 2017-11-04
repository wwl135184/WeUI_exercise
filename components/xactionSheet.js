Vue.component("xactionSheet", {
	template: `
		<div class="weui-actionsheet" :class = "{'weui-actionsheet_toggle' : bool}" id="iosActionsheet">
	        <div class="weui-actionsheet__title">
	            <p class="weui-actionsheet__title-text">这是一个标题，可以为一行或者两行。</p>
	        </div>
	        <div class="weui-actionsheet__menu">
	            <div class="weui-actionsheet__cell">示例菜单</div>
	            <div class="weui-actionsheet__cell">示例菜单</div>
	            <div class="weui-actionsheet__cell">示例菜单</div>
	            <div class="weui-actionsheet__cell">示例菜单</div>
	        </div>
	        <div class="weui-actionsheet__action">
	            <div class="weui-actionsheet__cell" id="iosActionsheetCancel">取消</div>
	        </div>
	    </div>
	`,
	data: function(){
		return {
			bool: false
		}
	}
})
