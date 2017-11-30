// import store from '../../store/index'

var MessageMixin = {
  created: function () {
    console.log("hey from mixin");
    this.$store.dispatch('consumeMessage').then(resp => {
      console.log(resp);
      if (resp !== '') this.$root.$refs.toastr.i(resp);
    });
  }
}

export default MessageMixin;
