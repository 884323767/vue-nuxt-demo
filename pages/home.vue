<template>
  <div>
    <Navbar></Navbar>
    <h1>Hello world!</h1>
  </div>
</template>
<script>
// import axios from 'axios'
import Navbar from '~/components/Navbar'

export default {
  async asyncData ({ params }) {
    // let { data } = await axios.get(`https://baidu.com`)
    // return { title: data.title }
    return { title: 'test' }
  },
  components: {
    Navbar
  },
  layout: 'test'
}
</script>
