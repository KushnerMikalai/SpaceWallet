<template>
    <h1>{{ msg }}</h1>
    <p class="asd">{{count}}</p>
    <UiButton
        :value="'Up + 1'"
        @click="increment"
    />
    {{test?.name}}
</template>

<script lang="ts">
import { reactive, onMounted, computed, defineComponent } from 'vue'
import { useStore } from 'vuex'
import { key } from '../store'
import UiButton from './ui/UiButton.vue'

interface TestType {
    name?: string
}

export default defineComponent({
    name: 'HelloWorld',
    components: {
        UiButton,
    },
    props: {
        msg: {type: String, required: true}
    },
    setup: (props, context) => {
        const store = useStore(key)
        const test: TestType = reactive({})

        onMounted(() => {
            test.name = 'asdas'
        })

        return {
            test,
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
