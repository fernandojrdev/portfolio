<template>
  <nav class="navbar navbar-expand-md fixed-top px-3" data-bs-theme="auto">
    <a class="navbar-brand" href="#">
      <img src="./assets/imgs/favicon.png" alt="Fernando Jr Dev Logo" width="30">
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#navbarOffcanvasLg"
      aria-controls="navbarOffcanvasLg" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="offcanvas offcanvas-end px-3" tabindex="-1" id="navbarOffcanvasLg" aria-labelledby="navbarOffcanvasLgLabel">
      <div class="offcanvas-header">
        <a class="navbar-brand" href="#">
          <img src="./assets/imgs/favicon.png" alt="Fernando Jr Dev Logo" width="30">
        </a>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <ul class="navbar-nav justify-content-end flex-grow-1">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Dropdown
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li>
                <hr class="dropdown-divider">
              </li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>
        </ul>
        <form class="d-flex mt-3" role="search">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
</template>

<script>
import '../assets/main.css'

export default {
    name: "Navbar"
}
</script>

<style scoped>
  nav {
    background: var(--color-background);
    color: var(--color-text);
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  a {

    color: var(--color-text);
  }
  .offcanvas {
    background: var(--color-background);
    color: var(--color-text);
    border: none;
    max-width: 85%;
    transition: ease-in-out 300ms;
  }
</style>