<template>
  <Layout>
    
    <!-- Learn how to use images here: https://gridsome.org/docs/images -->
    <!-- <g-image alt="Example image" src="src/favicon.png" width="135" /> -->

    <h1>Courses</h1>

    <div class="posts">
        <table>
            <tr>
                <th>{{ $page }}</th>
            <th>
                <tr>
                    <td>Date and time</td>
                    <td>Location</td>
                </tr>
            </th>
            <li v-for="edge in $page.posts.edges" :key="edge.node.id" :post="edge.node">
                <g-link :to="edge.node.path">
                    <h3>{{ edge.node.title }}</h3>
                </g-link>
                <p>{{ edge.node.subhead }}</p>
            </li>
        </table>
    </div>

  </Layout>
</template>

<page-query>
query {
    posts: allPost {
        edges {
            node {
                id
                path
                title
                subhead
                date (format: "MMM DD YYYY")
                featuredImage
            }  
        }
    }
}

</page-query>


<script>
export default {
  metaInfo: {
    title: 'Home'
  },
  props: ['post']
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
