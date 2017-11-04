Vue.component("xshadow", {
	template: `
		<div class="weui-mask" id="iosMask" style="opacity: 1;" :style = "{'display' : bool ? 'block' : 'none'}" @click = "showHide"></div>
	`,
	data: function(){
		return {
			bool: false
		}
	},
	methods: {
		showHide: function(){
			this.bool = !this.bool;
			this.$parent.$children[6].bool = !this.$parent.$children[6].bool;
		}
	}
})
