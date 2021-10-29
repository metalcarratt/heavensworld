<template>
    <span class="img-btn">
        <img :src="src" />
        <label>{{ label }}</label>
    </span>
</template>

<script>
export default {
    props: [ 'src', 'label' ]
}
</script>