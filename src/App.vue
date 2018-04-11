<template>
  <div id="app">
    <message-list :messages="messages"></message-list>
    <form></form>
  </div>
</template>

<script>
import MessageList from './components/MessageList'
import Form from './components/Form'

export default {
  name: 'App',
  components: {
    MessageList,
    Form
  },
  data: () => ({
    messages: [
      'Hey John',
      'Howdy Paco'
    ]
  })
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
