// import store from '../../store/index'

var MessageMixin = {
  created: function () {
    this.$store.dispatch('consumeMessage').then(resp => {
      if (resp !== '') this.$root.$refs.toastr.i(resp);
    });
  }
}

export default MessageMixin;
