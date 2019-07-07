<template>
  <Layout>
    
    <!-- Learn how to use images here: https://gridsome.org/docs/images -->
    <!-- <g-image alt="Example image" src="src/favicon.png" width="135" /> -->
    
    <h1>Yo, whattup</h1>
   
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur excepturi labore tempore expedita, et iste tenetur suscipit explicabo! Dolores, aperiam non officia eos quod asperiores
    </p>

    <h2>Posts</h2>

    <div class="posts">
        <ul>
            <li v-for="edge in $page.posts.edges" :key="edge.node.id" :post="edge.node">
              <div>
                <h3>{{ edge.node.title }}</h3>

              </div>
            </li>
        </ul>
    </div>

  </Layout>
</template>

<page-query>
query {
    posts: allPost {
        edges {
            node {
                id
                title
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
