<template>
	<div class="home">

	</div>
</template>

<script>
export default {
	name: "Home",
	data() {
		return {
		
		};
	},
	created() {
		// this.getProfile()
	},
	methods: {
		// 个人信息
		getProfile(){
			this.api.profile({}).then((res) => {
				sessionStorage.setItem('schId',res.datas.user.schId)				
				sessionStorage.setItem('userId',res.datas.user.userId)				
			});
		},
		// 获取列表
		getProject() {
			let _this = this
			let frequency = this.timeVal == 0 ? '' : this.timeVal-1;
			// console.log(frequency);
			_this.api.getProject({keyword:_this.keyWord,frequency:frequency}).then((res) => {
				if (res.returnCode == 1) {
					_this.list = _data
				} else {
					_this.$toast(res.msg);
				}
			});
		},
	},
};
</script>

<style lang="less" scoped>

</style>
