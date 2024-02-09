<script>
export default {};
</script>

<template>
  <footer>
    <div class="container">
      <div class="left">
        <span>Boolando s.r.l.</span>
        <ul>
          <li><a href="#">Informazioni legali</a></li>
          <li><a href="#">Informativa sulla privacy</a></li>
          <li><a href="#">Diritto di recesso</a></li>
        </ul>
      </div>
      <div class="right">
        <span>Trovaci anche su:</span>
        <ul>
          <li>
            <a href="#"> <i class="fa-brands fa-square-twitter"></i></a>
          </li>
          <li>
            <a href="#"> <i class="fa-brands fa-square-facebook"></i></a>
          </li>
          <li>
            <a href="#"><i class="fa-brands fa-square-instagram"></i> </a>
          </li>
          <li>
            <a href="#"> <i class="fa-brands fa-square-pinterest"></i></a>
          </li>
          <li>
            <a href="#"><i class="fa-brands fa-square-youtube"></i> </a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
@use "../styles/partials/mixins" as *;

footer {
  background-color: black;
  color: white;
}
.container {
  @include space-between;
  height: 100px;

  span {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
  }
  .left {
    span {
      font-size: 1.2rem;
    }
    li {
      font-size: 0.9rem;
    }
  }

  .right {
    li {
      font-size: 1.2rem;
    }
  }
}
</style>
