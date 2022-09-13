<template>
<NavbarView />
  <main>
    <router-view></router-view>
  </main>
<FooterView />
</template>

<script>
import NavbarView from '@/components/frontend/NavView.vue'
import FooterView from '@/components/frontend/FootView.vue'

export default {
    name: 'FrontendLayout',
    components: {
        NavbarView,
        FooterView
    }
}
</script>