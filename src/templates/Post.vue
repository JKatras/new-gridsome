<template>
    <Layout>
        <h1>{{ $page.post.title }}</h1>
        <h2>{{ $page.post.subhead }}
        <div class="date-published">
            <p>{{ $page.post }}</p>
        </div>
        <div class="featured-image">
            <g-image v-if="$page.post.featuredImage" :src="$page.post.featuredImage">
        </div>
        
    </Layout>
</template>

<page-query>
query Post ($path: String!) {
    post: post(path: $path) {
        title
        path
        date (format: "D. MMMM YYYY")
        content
        featuredImage
    }
}
</page-query>