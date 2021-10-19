<template>
    <div class="profile">
        <img :src="disciple.image" />
        <label>{{ disciple.name }}</label>
        <span>{{ disciple.job }}</span>
    </div>
</template>

<script>
export default {
    props: [ 'disciple' ]
}
</script>