<template>
    <div >
        <router-view/>
        <FooterGuide v-show="$route.meta.showFooter"/>
    </div>
</template>

<script>
    import FooterGuide from './components/FooterGuide/FooterGuide'
    export default {
        components:{
            FooterGuide
        },
        mounted(){
            this.$store.dispatch('getAdress')
            this.$store.dispatch('getCategorys')
            this.$store.dispatch('getShops')
            this.$store.dispatch('autoLogin')
        },
        data() {
            return{}
        }
    }

</script>

<style lang="stylus"  rel="stylesheet/stylus">
</style>
