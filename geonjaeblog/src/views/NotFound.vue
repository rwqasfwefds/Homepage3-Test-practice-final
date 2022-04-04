<template>
    <div id="content">
        <h1>{{ title }}</h1>
    </div>
</template>

<script>

export default {
    data() {
        return {
            title: "불법으로 접근했싐, Not Found 페이지 임",
        };
    },
};
</script>

<style scoped>
#content{
    text-align: center;
    margin-top: 100px;
}
</style>