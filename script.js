fetch(
  "https://script.googleusercontent.com/a/macros/boiko.com.ua/echo?user_content_key=iksAgOjcV4cai5CUtrRSmyctdJUr7Pabm5AINDzQSEeSYMyyn4zREMJdaf1BHwp11BKrCXJHoEmadRK53BJbQiG3TrmLc_Xvm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_nRPgeZU6HP-258R2IqhkregMCvU4a6qz1X4897iSixajHJ6nl0AXyArs2EzaDrWwwg_WIKqFbdwOkK3j5Eie025epv17T61TuUlY-4j4ZLIw7zXNzCVuvmOSh0OHwytBfwSoZL-pPNc&lib=MJu-EdDM3SZYokobVoAGr22aF27sfQqfd"
)
  .then((response) => response.json())
  .then((data) => {
    // Обробка отриманих даних і їх відображення на сайті
    console.log(data);
  });
