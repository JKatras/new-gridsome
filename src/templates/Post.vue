<template>
    <Layout>
        <header class="post-title">
            <h1>{{ $page.post.title }}</h1>
            <h2>{{ $page.post.subhead }}</h2>
            <p>{{ $page.post.date }}</p>
        </header>
        <div class="post-content">
            <g-image alt=""  v-if="$page.post.featuredImage" :src="$page.post.featuredImage" />
            <div v-html="$page.post.content"></div>
        </div>        
    </Layout>
</template>

<page-query>
query Post ($path: String!) {
    post: post(path: $path) {
        title
        path
        subhead
        layout
        date (format: "D. MMMM YYYY")
        content
        featuredImage
    }
}
</page-query>