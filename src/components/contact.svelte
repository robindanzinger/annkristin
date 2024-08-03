<script>
  import Layout from './layout.svelte'
</script>

<Layout>
  <div class="container">
    <h1>Ann-Kristin Danzinger</h1>
    <div><a href="mailto:annkristindanzinger@gmail.com">annkristindanzinger@gmail.com</a></div>
    <div>Berlin</div>
  </div>
</Layout>

<style> 
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column;
    gap: 0.8rem;
  }

h1 {
  font-size: 1.2rem;
  margin: 0;
}

div {
  font-size: 1rem;
}
</style>
