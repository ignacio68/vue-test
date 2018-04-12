<template>
  <div id="app">
    <message-list>
      <message
        @message-clicked="handleMessageClick" 
        :message="message" 
        v-for="message in messages"
        :key="message"/>
    </message-list>
    <!--form></form-->
  </div>
</template>

<script>
import MessageList from './components/MessageList'
import Message from './components/Message'
// import Form from './components/Form'

export default {
  name: 'App',
  components: {
    MessageList,
    Message
    //Form
  },
  data: () => ({
    messages: [
      'Hey John',
      'Howdy Paco'
    ]
  }),
  methods: {
    handleMessageClick(message) {
      console.log(message)
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
