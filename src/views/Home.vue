<template>
  <div class="home">
    <Userdata/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Userdata from '@/components/Userdata.vue'; // @ is an alias to /src

@Component({
  components: {
    Userdata
  },
})
export default class Home extends Vue {}
</script>
