<template>
  <div>
    “喂你好，是尼克陈吗？我是叮咚买菜的送菜员，由于您电话打不通，特意在页面里跟您说一声，您菜到家了。
  </div>
  <img :src="logo" alt="" @click="testFunction" />
</template>
<script>
  import logo from "@/assets/Test.jpg";
    import getData from "@/utils/getData";
export default {
  setup() {
    const testFunction = () => {
      console.log("滚!!!");
      alert("滚!!!");
    };
  
    getData()
      .then((result) => {
        console.log(result)
      })
      .catch((err) => {});
    return {
      testFunction,
      logo,
      getData,
    };
  },
};
</script>
<style>
div {
  color: yellowgreen;
}
</style>
