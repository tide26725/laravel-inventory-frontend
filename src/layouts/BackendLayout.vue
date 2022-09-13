<template>
    <div class="flex h-screen bg-gray-50 dark:bg-gray-900">
        <SidebarView />
        <div class="flex flex-col flex-1 w-full">
            <NavbarView />
            <main class="h-full overflow-y-auto">
                <div class="container grid px-6 mx-auto">
                    <router-view></router-view>
                </div>
            </main>
        </div>
    </div>
</template>

<script>
import SidebarView from '@/components/backend/SidebarView.vue'
import NavbarView from '@/components/backend/NavbarView.vue'

export default {

    name: 'BackendLayout',
    components: {
        SidebarView,
        NavbarView
        
    }
    
}
</script>