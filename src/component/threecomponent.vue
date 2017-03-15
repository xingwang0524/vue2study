<template>
	<div>
		<h1>这是第三个页面，里面没有东西</h1>
		<ul>
			<li v-for="article in articles">
				{{article.title}}
			</li>
		</ul>
		<h2>User {{ $route.params.id }}</h2>
	    <p>
		    <router-link to="/threecomponent/foo">/user/foo</router-link>
		    <router-link to="/threecomponent/foo/profile">/user/foo/profile</router-link>
		    <router-link to="/threecomponent/foo/foo">/user/foo/posts</router-link>
		</p>
      	<router-view></router-view>
	</div>
</template>
<script>
	export default {
		data() {
				return {
					articles:[]
				}
			},
			mounted: function() {
				this.$http.jsonp('https://api.douban.com/v2/movie/top250?count=10', {}, {
					headers: {

					},
					emulateJSON: true
				}).then(function(response) {
					// 这里是处理正确的回调

					this.articles = response.data.subjects
						// this.articles = response.data["subjects"] 也可以

				}, function(response) {
					// 这里是处理错误的回调
					console.log(response)
				});
			}
	}
</script>