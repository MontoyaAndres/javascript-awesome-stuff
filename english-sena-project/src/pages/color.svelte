<script>
  import { useRecognition } from "../utils/useRecognition";

  // components
  import Description from "../components/description.svelte";
  import Game from "../components/game.svelte";

  let colors = [
    {
      id: 1,
      color: "blue",
      word: "blue",
      win: false
    },
    {
      id: 2,
      color: "yellow",
      word: "yellow",
      win: false
    },
    {
      id: 3,
      color: "gray",
      word: "gray",
      win: false
    },
    {
      id: 4,
      color: "red",
      word: "red",
      win: false
    },
    {
      id: 5,
      color: "brown",
      word: "brown",
      win: false
    }
  ];
  let startGame = false;
  let talkingText = "";

  async function handleStartGame() {
    const isMicrophoneActive = await navigator.permissions.query({
      name: "microphone"
    });

    if (isMicrophoneActive.state == "granted") {
      startGame = true;
    } else {
      navigator.mediaDevices.getUserMedia({ audio: true });
      handleStartGame();
    }
  }

  function handleTalkingText() {
    const { recognition, transcript } = useRecognition();
    recognition.start();
    console.log(transcript);
  }
</script>

<style>
  .section {
    height: 400px;
    margin-bottom: 40px;
    background-color: #ff9800;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .question-color {
    width: 200px;
    height: 200px;
    margin-bottom: 20px;
  }
</style>

<Description
  title="Colors Game"
  description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi
  reprehenderit voluptatem error, eos distinctio pariatur velit, nobis minus
  optio quaerat quia modi officia ex quisquam illo soluta blanditiis, alias
  fuga!" />

{#if startGame}
  {#each colors as color}
    <section class="section">
      <div class="question-color" style="background-color: {color.color}" />
      <h1 class="title">What color is this?</h1>
      <button class="button is-primary" on:click={() => handleTalkingText()}>
        Start talking
      </button>
      <p class="subtitle">{talkingText}</p>
    </section>
  {/each}
{:else}
  <Game {handleStartGame} title="Colors" />
{/if}
