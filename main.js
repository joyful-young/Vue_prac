const app = new Vue({
  // 옵션
  el: '#app',
  data: {
    message: '',
    list: ['사과', '바나나', '딸기'],
    show: true,
  },
  methods: {
    handleClick: function(event) {
      alert(event.target)
    },
  },
}) 