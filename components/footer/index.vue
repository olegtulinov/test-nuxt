<template>
    <footer class="footer">
      <div class="content">
        <div class="footer__wrapper">
          <div class="footer__logo">
            <img class="footer__logo_img" src="~/assets/img/logo2.svg" alt="logo" />
            <h2 class="footer__logo_text">Веб-разработка и усиление IT-команд</h2>
          </div>
          <div class="footer__links">
            <ul class="footer__links_list">
              <li class="footer__links_item">
                <a  href="#">+7 999 123 45 67</a>
                </li>
              <li class="footer__links_item">
                <a  href="#">hello@cyberia.studio</a>
                </li>
              <li class="footer__links_item">
                <a  href="#">ул.Ярных, д.35, оф.10</a>
                </li>
            </ul>

            <ul class="footer__links_list">
              <li class="footer__links_item">
                <a  href="#">Агентство</a>
                </li>
              <li class="footer__links_item">
                <a class="footer__links_item" href="#">Услуги</a>
                </li>
              <li class="footer__links_item">
                <a class="footer__links_item" href="#">Кейсы</a>
                </li>
            </ul>

            <ul class="footer__links_list">
              <li class="footer__links_item">
                <a href="#">Блог</a>
                </li>
              <li class="footer__links_item">
                <a href="#">Контакты</a>
                </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
</template>
<script>
</script>
<style lang="scss">
    .footer {
  height: 396px;
  background-color: #313341;

&__wrapper {
  display: flex;
  padding-top: 131px;
  gap: 157px;
}
&__logo {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 28px;

  &_img{
      width: 196px;
    height: 40px;
      margin-left: -6px;
  }

  &_text{
    width: 196px;
    font-size: 18px;
  }
}
&__links {
  display: flex;
  width: 428px;
  justify-content: space-between;

&_list {
  display: flex;
  flex-direction: column;
}

&_item{
    margin-bottom: 23px;
}

&_item a{
    text-decoration: none;
    color: white;
    font-size: 18px;
}
}
}

@media screen and (max-width: 850px) {
  .footer{
    height: 285px;
    &__wrapper{
        flex-direction: column;
        padding-top: 30px;
        align-items: center;
        gap: 40px;
    }

    &__logo{
        gap: 10px;
        &_img{
            width: 102px;
            height: 22px;
        }
        &_text{
            width: 208px;
            font-size: 13px;
            text-align: center;
        }
    }
    &__links {
  width: 310px;


&_item a{
    font-size: 13px;
}
}
  }
}

</style>