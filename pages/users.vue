<template>
  <div>
    <li v-for="(item,index) in userData" :key="index" :id="gernerateId(index)" :class="'users_'+index">
      {{item.label}}
    </li>
    <nuxt-child />
  </div>
</template>
<script>
import usersIndex from './users/index.vue'
export default {
  components: {
    usersIndex
  },
  data() {
    return {
      userData: [
        { id: 1, label: '手机' },
        { id: 2, label: '电脑' },
        { id: 3, label: '平板' },
      ]
    }
  },
  methods: {
    gernerateId: function(index) {
      return "person_" + index
    }
  }
}

</script>
