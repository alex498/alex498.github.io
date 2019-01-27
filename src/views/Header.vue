<template>
<div>
<b-nav fill tabs>
		<b-nav-item :to="{ name: 'home' }">Home</b-nav-item>
		<b-nav-item :to="{ name: 'about'}">About Us</b-nav-item>
		<b-nav-item :to="{ name: 'contacts'}">Contact Us</b-nav-item>
	</b-nav>
	<router-view></router-view>
</div>
</template>

<style>
.nav {
  margin-bottom:40px;
}
</style>
