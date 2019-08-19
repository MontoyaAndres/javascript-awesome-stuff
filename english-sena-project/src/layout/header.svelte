<script>
  import { Link } from "svelte-routing";

  let isOpen = false;

  function handleMenuOpen() {
    isOpen = !isOpen;
  }
</script>

<style>
  .navbar-item:hover {
    cursor: pointer;
    background-color: #fafafa;
  }
</style>

<nav class="navbar" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a class="navbar-item" href="/">
      <img
        src="https://qph.fs.quoracdn.net/main-qimg-bd82164d44d1c2efb777593fd6ceb166"
        width="112"
        height="58"
        alt="" />
    </a>

    <span
      on:click={() => handleMenuOpen()}
      role="button"
      class="navbar-burger burger {isOpen && 'is-active'}"
      aria-label="menu"
      aria-expanded="false"
      data-target="navbarBasicExample">
      <span aria-hidden="true" />
      <span aria-hidden="true" />
      <span aria-hidden="true" />
    </span>
  </div>

  <div id="navbarBasicExample" class="navbar-menu {isOpen && 'is-active'}">
    <div class="navbar-end">
      <div class="navbar-item has-dropdown is-hoverable">
        <span class="navbar-link">Useful vocabulary</span>

        <div class="navbar-dropdown">
          <Link to="/">
            <span class="navbar-item">Sports</span>
          </Link>
          <Link to="/actions">
            <span class="navbar-item">Actions</span>
          </Link>
        </div>
      </div>

      <div class="navbar-item has-dropdown is-hoverable">
        <span class="navbar-link">General vocabulary review</span>

        <div class="navbar-dropdown">
          <Link to="/fruits">
            <span class="navbar-item">Fruits</span>
          </Link>
          <Link to="/color">
            <span class="navbar-item">Color</span>
          </Link>
          <Link to="/animals">
            <span class="navbar-item">Animals</span>
          </Link>
        </div>
      </div>
    </div>
  </div>
</nav>
