<template>
    <button class="button">{{ value }}</button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'UiButton',
    props: {
        value: {type: String, default: ''},
    },
    setup() {

    },
})
</script>

<style scoped>
.button {
    padding: 4px 16px;
    display: inline-block;
    background-color: var(--theme);
    border: none;
}
</style>
