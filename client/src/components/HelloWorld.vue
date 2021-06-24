<template>
    <h1>{{ msg }}</h1>
    <p class="asd">{{count}}</p>
    <UiButton
        :value="'Up + 1'"
        @click="increment"
    />
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useStore } from 'vuex'
import { key } from '../store'
import UiButton from './ui/UiButton.vue'

export default defineComponent({
    name: 'HelloWorld',
    components: {
        UiButton,
    },
    props: {
        msg: {type: String, required: true}
    },
    setup: () => {
        const store = useStore(key)

        return {
            count: computed(() => store.state.count),
            increment: () => store.commit('increment'),
        };
    },
})
</script>

<style scoped>
a {
    color: #42b983;
}

label {
    margin: 0 0.5em;
    font-weight: bold;
}

code {
    background-color: #eee;
    padding: 2px 4px;
    border-radius: 4px;
    color: #304455;
}
</style>
