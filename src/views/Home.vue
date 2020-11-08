<template>
  <div class="home">
    <KeyBoard @printPlate="plateShow" />
  </div>
</template>

<script>
import KeyBoard from "@/components/keyBoard";
export default {
  components: {
    KeyBoard,
  },
  data() {
    return {
      plateList: [],
    };
  },
  methods: {
    plateShow(value) {
      if(value instanceof Array) {
        this.plateList = value.join('')
      }
    },
  },
};
</script>