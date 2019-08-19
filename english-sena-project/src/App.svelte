<script>
  import { Router, Route } from "svelte-routing";

  import Header from "./layout/header.svelte";

  // pages
  import Index from "./pages/index.svelte";
  import Actions from "./pages/actions.svelte";
  import Fruits from "./pages/fruits.svelte";
  import Color from "./pages/color.svelte";
  import Animals from "./pages/animals.svelte";
</script>

<Router>
  <Header />

  <div class="container">
    <Route path="/" component={Index} />
    <Route path="/actions" component={Actions} />
    <Route path="/fruits" component={Fruits} />
    <Route path="/color" component={Color} />
    <Route path="/animals" component={Animals} />
  </div>
</Router>
