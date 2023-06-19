window.addEventListener('click', () => {
  let elements = document.querySelectorAll(
    '.c1, .o1, .d1, .e1, .h2, .t2, .m2, .l2, .c2, .s2, .s21, .name, .smile, .r3, .e3, .a3, .c3, .t3, .a4, .s4, .s41, .e4, .m4, .b4, .l4, .e41, .r4, .con, .conR'
  );
  elements.forEach((item, i) => {
    item.classList.add('ani');
  });
  setTimeout(function () {
    window.location.href = './main.html';
  }, 4900);
});
