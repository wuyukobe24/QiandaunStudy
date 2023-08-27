<template>
    <div>
        <div>{{ title }}</div>
        <div>{{ where }}</div>
        <div>{{ intro }}</div>
        <br>
    </div>
</template>

<script>
export default {
    props: ['title', 'where', 'intro']
}
</script>
