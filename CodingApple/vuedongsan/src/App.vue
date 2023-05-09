<template>
  <div id="app">

    <!-- 모달창 디자인 -->
    <div class="black-bg" v-if="modal">
      <div class="white-bg">
        <h4>상세페이지</h4>
        <p>내용</p>
        <button @click="modal = false">close</button>
      </div>
    </div>

    <h1>부동산앱</h1>

    <div>
      <h4 @click="modal = true">XX 원룸</h4>
      <p>{{ price1 }} 만원</p>
    </div>
    <div>
      <h4>XX 원룸</h4>
      <p>{{ price2 }} 만원</p>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      price1: 60,
      price2: 70,

      // 모달창 상태
      modal: false,
    }
  },
  components: {
  },
  methods: {

  }
}
</script>

<style>
body {
  margin: 0;
}
div {
  box-sizing: border-box;
}
.black-bg {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  padding: 20px;
}
.white-bg {
  width: 100%;
  background: white;
  border-radius: 8px;
  padding: 20px;
}




#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
