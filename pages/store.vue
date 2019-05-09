<template>
  <div class="store">
    <div>vuex 使用方法</div>
    <div>
    	{{$store.state.counter}}
    	<button @click="add">+</button>
    	<button @click="reduction">-</button>
    </div>
   
  </div>
</template>
<script>
export default {
  head() {
    return {
      title: "vuex",
      meta: [
        { hid: 'store', name: 'store', content: 'store' }
      ],
    }
  },
  methods:{
  	add(){
  		this.$store.dispatch('incrementMutations')
  	},
  	reduction(){
  		this.$store.dispatch('reductionMutations')
  	}
  }
}

</script>
