<template>
    <div class="sidebar">
        <div class="sidebar-backdrop" @click="closeSidebarPanel" v-if="isPanelOpen"></div>
        <transition name="slide">
            <div v-if="isPanelOpen"
                 class="sidebar-panel">
                <slot></slot>
            </div>
        </transition>
    </div>
</template>
<script>
    import { store, mutations } from '@/store.js'

    export default {
        methods: {
            closeSidebarPanel: mutations.toggleNav
        },
        computed: {
            isPanelOpen() {
                return store.isNavOpen
            }
        }
    }
</script>

<style>

    .slide-enter-active,
    .slide-leave-active
    {
        transition: transform 0.9s ease;
    }

    .slide-enter,
    .slide-leave-to {
        transform: translateY(-35%);
        transition: all 150ms ease-in 0s
    }

    .sidebar-backdrop {
        background-color:  rgb(0,8,16);
        width: 50vw;
        height: 15vh;
        position: fixed;
        top: 0;
        left: 0;
        cursor: pointer;
    }
    li {
        float: left;
        padding:1rem
     }

    .sidebar-panel {
        list-style-type: none;
        overflow: hidden;
        background-color:  rgb(0,8,16);
        position: fixed;
        left: 0;
        top: 0;
        height: 15vh;
        z-index: 1;
        padding: 3rem 10px 2rem 10px;
        width: 100%;
    }
/* Responsive  */
@media screen and (max-width: 700px) {
  .sidebar-panel-nav {
    overflow-y:auto;
    width: 30px;
    display:block;
    height:100px
  }
   .sidebar-backdrop {
        background-color:red;
        width: 100vw;
        height: 100vh;
        position: fixed;
        top: 0;
        left: 0;
        cursor: pointer;
    }


}
</style>