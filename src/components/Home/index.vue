<template>
    <div>
      <HeadBar></HeadBar>
      <div class="bodys">
          
      </div>

      <FooterBar></FooterBar>
    </div>
</template>
<script>
    import HeadBar from '../HeadBar'
    import FooterBar from '../FooterBar'

    export default {
        name: 'Home',
        components: {
            HeadBar,
            FooterBar
        }
    }
</script>
<style>
    .bodys {
        height: 1000px;
    }
</style>