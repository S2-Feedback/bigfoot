<template>
  <button
    v-if="positionRight"
    @click="click"
    :class="`dflex button ${color}`"
    :style="`color:white; height:${height}px; width:${width}px;`"
  >
    <slot name="buttonText"></slot><slot name="buttonIcon" class="ml-10"></slot>
  </button>
  <button
    v-else
    @click="click"
    :class="`dflex button ${color}`"
    :style="`color:white; height:${height}px; width:${width}px;`"
  >
    <slot name="buttonIcon" class="mr-15"></slot><slot name="buttonText"></slot>
  </button>
</template>

<script>
export default {
  name: "S2Button",
  components: {},
  data() {
    return {};
  },
  props: {
    height: {
      type: Number,
      default: 40
    },
    width: {
      type: Number,
      default: 100
    },
    color: {
      type: String,
      default: "s2success"
    },
    click: {
      type: Function,
      default: () => {}
    },
    positionRight: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style>
.button {
  border: none;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  box-shadow: black 0px 0px 12px -4px;
  text-transform: uppercase;
}
.s2success {
  background-color: #4caf50 !important;
}
.s2success :hover {
  box-shadow: 0 14px 26px -12px rgba(76, 175, 80, 0.42),
    0 4px 23px 0 rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(76, 175, 80, 0.2);
  background-color: #47a44b !important;
}
.s2default {
  background-color: #999999 !important;
}
.s2default :hover {
  box-shadow: 0 14px 26px -12px rgba(153, 153, 153, 0.42),
    0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(153, 153, 153, 0.2);
  background-color: #919191 !important;
}
</style>
