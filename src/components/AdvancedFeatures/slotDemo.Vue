<template>
  <div>
    <!-- 普通插槽 -->
    <div>
      <slot>默认文本</slot>
    </div>
    <!-- 作用域插槽,比如我想将当前组件的数据传给父组件，让父组件去写入，虽然不知道这么做有啥用。。。。 -->
    <div>
        <slot name = "zuoyongyu" :slotData="info"></slot>
    </div>
    <!-- 具名插槽 -->
    <div>
      <slot name="putong">  </slot>
    </div>
  </div>
</template>
<script>
/*
        slot 插槽
    */
export default {
  data() {
    return {
      info: {
        title: "插槽演示",
      },
    };
  },
};
</script>