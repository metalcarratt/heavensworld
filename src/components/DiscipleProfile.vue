<template>
    <div :class="['profile', hoverable ? 'hoverable' : '']">
        <img :src="'images/' + disciple.image" />
        <label>{{ disciple.name }}</label>
        <span v-if="!hideJob">{{ disciple.job }}</span>
        <span class="role">{{ role }}</span>
    </div>
</template>

<script>
export default {
    props: [ 'disciple', 'hoverable', 'hideJob', 'role' ]
}
</script>