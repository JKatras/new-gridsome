<template>
  <Layout>
    
    <!-- Learn how to use images here: https://gridsome.org/docs/images -->
    <!-- <g-image alt="Example image" src="src/favicon.png" width="135" /> -->
    
    <h1>Courses</h1>

    <div class="course-list">
      <ul>
        <li v-for="edge in $page.courses.edges" :key="edge.node.id" :course="edge.node">
          <div>
            <h3>{{ edge.node.title }}</h3>
            <ul>
              <!-- <li>{{ edge.node.courseDetails.location }}</li> -->
            </ul>
          </div>
        </li>
      </ul>
    </div>
    <!-- <div class="course-tables">
      <table v-for="edge in $page.courses.edges" :key="edge.node.id">
        <caption>
          <h2>{{ edge.node.title}}</h2>
        <caption>
        <tr>
          <th>Date and Time</th>
          <th>Location</th>
        </tr>      
      </table>
    </div> -->

  </Layout>
</template>

<page-query>
query {
    courses: allCourse {
      edges {
        node {
          id
          title
          courseDetails {
            dateTime
            location
          }
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
