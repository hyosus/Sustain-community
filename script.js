const app = new Vue({
  el: '#post',
  data: {
    voteCount: 34,
    commentCount: 12,
    title: 'Vivamus nisi tellus, interdum vel iaculis id, dignissim in metus. Morbi...',
    green: false,
    red: false,
    showComments: true
  },
  methods: {
    upVote() {
      if(this.red) {
        return;
      } else if(!this.green) {
        this.voteCount += 1;
        this.green = !this.green;       
      } else {
        this.voteCount -= 1;
        this.green = !this.green;
      }
    },
    downVote() {
      if(this.green) {
        return;
      } else if(!this.red) {
        this.voteCount -= 1;
        this.red = !this.red;       
      } else {
        this.voteCount += 1;
        this.red = !this.red;
      }
    }
  }
})