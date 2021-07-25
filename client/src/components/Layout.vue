<template>
    <div class="layout">
        <header>
            <nav>
                <router-link to="/">Home</router-link>
                |
                <router-link to="/about">About</router-link>
            </nav>
        </header>
        <slot></slot>
    </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: 'Layout',
})
</script>
