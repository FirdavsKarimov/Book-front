<script setup>
defineProps({
    labelName: {
        type: String,
        required: true
    },
    propsId: {
        required: true
    },
    inputType: {
        default: 'text'
    },
    modelValue: {
        
    }
})
</script>

<template>
    <div class="mb-3">
        <label v-bind:for="propsId">{{ labelName }}</label>
        <input @input="$emit('update:modelValue', $event.target.value)"
            :type="inputType" :id="propsId" class="form-control">
    </div>
</template>

<style scoped>

</style>