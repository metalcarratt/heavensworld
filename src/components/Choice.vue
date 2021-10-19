<template>
    <li class="button" @click="$emit('click')">
        <label>{{ name }}</label>
        <span>{{ blurb }}</span>
    </li>
</template>

<script>
export default {
    props: ['name', 'blurb']
}
</script>