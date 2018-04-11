<template>
  <ul>
    <message
    	@message-clicked="handleMessageClick" 
    	:message="message" 
    	v-for="message in messages"
    	:key="message"/>
  </ul>
</template>

<script>
	import Message from './Message'

 	export default {
		name: 'list',
		props: ['messages'],
		components: {
			Message
		},
		methods: {
			handleMessageClick(message) {
				console.log(message)
			}
		}
  }
</script>

<style scoped>
</style>
