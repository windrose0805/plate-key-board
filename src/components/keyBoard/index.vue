<template>
  <div>
    <van-radio-group class="radioGroup" v-model="radio" direction="horizontal">
      <van-radio name="1">普通车牌</van-radio>
      <van-radio name="2">新能源车牌</van-radio>
    </van-radio-group>
    <div class="cell-group">
      <div
        v-for="(value, key) of plateList"
        :key="key"
        class="cell"
        @click="showPop(key)"
        :style="key == plateIndex ? { borderBottom: '2px solid red' } : ''"
      >
        {{ value }}
      </div>
    </div>
    <van-popup
      v-model="show"
      position="bottom"
      :overlay="true"
      :overlay-style="{ background: 'transparent' }"
      :style="{ height: '28%', background: '#99A3A4' }"
      :close-on-click-overlay="true"
    >
      <div class="board">
        <div class="plateRow" v-for="(item, key) of plateBoard" :key="key">
          <div
            v-for="(value, index) of item"
            @click="fillPlate(value)"
            :key="index"
            class="key"
          >
            {{ value }}
          </div>
        </div>
      </div>
    </van-popup>
  </div>
</template>

<script>
import { plateText, plateLetter } from "./constant";
export default {
  data() {
    return {
      radio: "1",
      plateIndex: null,
      show: false,
      plateBoard: plateText,
      plateList: new Array(7),
    };
  },
  watch: {
    radio(val) {
      this.plateIndex = null
      if (val == "1") this.plateList = new Array(7);
      if (val == "2") this.plateList = new Array(8);
    },
    plateList(value) {
      this.$emit('printPlate', value)
    }
  },
  methods: {
    showPop(index) {
      this.show = true;
      this.plateIndex = index;
    },
    fillPlate(value) {
      if (value == "ABC") {
        this.plateBoard = plateLetter;
      } else if (value == "返回") {
        this.plateBoard = plateText;
      } else if (value == "删除") {
        this.$set(this.plateList, this.plateIndex, null);
      } else {
        this.$set(this.plateList, this.plateIndex, value);
        if (this.plateIndex != this.plateList.length - 1) {
          this.plateIndex++;
        }
      }
    },
    printPlate() {
      this.$emit('printPlate', this.plateList)
    }
  },
};
</script>

<style lang="less" scoped>
@import "./index.less";
</style>
