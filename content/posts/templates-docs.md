---
layout: post
title: Templates
subhead: from Gridsome docs
featuredImage: ''
---
Templates are used for single post views to GraphQL collections. Add a .vue file with the same name as a GraphQL collection to src/templates to create a template. For example, if you have a collection called "WordPressPost" you create a WordPressPost.vue file.

You can browse available collections in the schema tab inside the [GraphQL explorer](https://gridsome.org/docs/querying-data).

The example shows a Blog.vue in /pages where Blog posts will be listed and then a BlogPost.vue inside /templates that will show the single post view.

##Creating templates

Templates must have a <page-query> block which fetches the source node for the current page. You can use the $id variable to get the node.

```
<!-- src/templates/WordPressPost.vue -->

<template>
  <Layout :title="$page.post.title">
    <div v-html="$page.post.content">
  </Layout>
</template>

<page-query>
query Post ($id: String!) {
  post: wordPressPost (id: $id) {
    title
    content
  }
}
</page-query>

<script>
import Layout from '~/layouts/Default.vue'

export default {
  components: {
    Layout
  },
  metaInfo () {
    return {
      title: this.$page.post.title
    }
  }
}
</script>

```
