<script>
  export let title;
  export let handleStartGame;
</script>

<style>
  .title {
    color: white;
  }

  .section {
    background-color: #03a9f4;
    margin-bottom: 40px;
  }

  .game-introduction {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 400px;
  }
</style>

<section class="section">
  <div class="game-introduction">
    <h1 class="title">
      Let's play this game! Don't forget to read first the description.
    </h1>
    <button
      class="button is-success is-large"
      on:click={() => handleStartGame()}>
      Play {title} game
    </button>
  </div>
</section>
