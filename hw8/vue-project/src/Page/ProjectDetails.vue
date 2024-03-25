<template>
    <div>
        <HeaderComponent />
        <ProjectDetailsHeaderBox />
        <ProjectDetailsMain />
        <FooterComponent />
    </div>
</template>

<script>
    import HeaderComponent from '@/components/HeaderComponent.vue'
    import FooterComponent from '@/components/FooterComponent.vue'
    import ProjectDetailsHeaderBox from '@/components/pages/ProjectDetailsPage/ProjectDetailsHeaderBox.vue'
    import ProjectDetailsMain from '@/components/pages/ProjectDetailsPage/ProjectDetailsMain.vue'

    export default {
        name: 'ProjectDetails',
        components: { 
            HeaderComponent, 
            FooterComponent, 
            ProjectDetailsHeaderBox, 
            ProjectDetailsMain 
        },

    data () {
        return {

        }
    },

    mounted () {

    },

    methods: {

    }
    }
</script>

<style lang="scss" scoped>
$width_site: 1200px;

* {
    margin: 0;
    padding: 0;
    
}

.center {
    padding-left: calc(50% - $width_site / 2);
    padding-right: calc(50% - $width_site / 2);
}
</style>