<script>
  export let title;
  export let description;
</script>

<style>
  .title-padding {
    padding-bottom: 50px;
  }
</style>

<section class="section">
  <div class="container">
    <h1 class="title has-text-centered title-padding">{title}</h1>
    <p class="subtitle">{description}</p>
  </div>
</section>
