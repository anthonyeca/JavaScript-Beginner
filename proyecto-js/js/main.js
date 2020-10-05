$("document").ready(function () {
  // SLIDER
  if (window.location.href.indexOf("index") > -1) {
    $(".galeria").bxSlider({
      mode: "fade",
      cpations: false,
      slideWidth: 1200,
      responsive: true,
      pager: true,
    });
  }

  // POSTS
  if (window.location.href.indexOf("index") > -1) {
    var posts = [
      {
        title: "Prueba de Titulo 1",
        date:
          "Publicado el dia " +
          moment().date() +
          " de " +
          moment().format("MMMM") +
          " del " +
          moment().format("YYYY"),
        content:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita, excepturi perferendis? Aspernatur laboriosam, cum rerum optio magnam quas? Iure perspiciatis dolorum necessitatibustotam, minus nesciunt consequuntur mollitia deleniti iusto non!",
      },
      {
        title: "Prueba de Titulo 2",
        date:
          "Publicado el dia " +
          moment().date() +
          " de " +
          moment().format("MMMM") +
          " del " +
          moment().format("YYYY"),
        content:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita, excepturi perferendis? Aspernatur laboriosam, cum rerum optio magnam quas? Iure perspiciatis dolorum necessitatibustotam, minus nesciunt consequuntur mollitia deleniti iusto non!",
      },
      {
        title: "Prueba de Titulo 3",
        date:
          "Publicado el dia " +
          moment().date() +
          " de " +
          moment().format("MMMM") +
          " del " +
          moment().format("YYYY"),
        content:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita, excepturi perferendis? Aspernatur laboriosam, cum rerum optio magnam quas? Iure perspiciatis dolorum necessitatibustotam, minus nesciunt consequuntur mollitia deleniti iusto non!",
      },
      {
        title: "Prueba de Titulo 4",
        date:
          "Publicado el dia " +
          moment().date() +
          " de " +
          moment().format("MMMM") +
          " del " +
          moment().format("YYYY"),
        content:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita, excepturi perferendis? Aspernatur laboriosam, cum rerum optio magnam quas? Iure perspiciatis dolorum necessitatibustotam, minus nesciunt consequuntur mollitia deleniti iusto non!",
      },
      {
        title: "Prueba de Titulo 5",
        date:
          "Publicado el dia " +
          moment().date() +
          " de " +
          moment().format("MMMM") +
          " del " +
          moment().format("YYYY"),
        content:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita, excepturi perferendis? Aspernatur laboriosam, cum rerum optio magnam quas? Iure perspiciatis dolorum necessitatibustotam, minus nesciunt consequuntur mollitia deleniti iusto non!",
      },
    ];

    posts.forEach((item, index) => {
      var post = `
        <article class="post">
                    <h2>${item.title}</h2>
                    <span class="date">${item.date}</span>
                    <p>${item.content}</p>
                    <a href="#" class="button-more">Leer más</a>
                </article>
        `;

      $("#posts").append(post);
    });
  }
  // Selector de tema

  var theme = $("#theme");

  $("#to-green").click(function () {
    theme.attr("href", "css/green.css");
  });

  $("#to-red").click(function () {
    theme.attr("href", "css/red.css");
  });

  $("#to-blue").click(function () {
    theme.attr("href", "css/blue.css");
  });

  // Scroll arriba de la web
  /* 
  $('.subir')click(function(e){
    e.preventDefault();

    $('html,body').animate({
      scrollTop:0
    }, 500);
    return false;
  });
*/

  // Login Falso

  $("#login form").submit(function () {
    var form_name = $("#form_name").val();

    localStorage.setItem("form_name", form_name);
  });

  var form_name = localStorage.getItem("form_name");
  if (form_name != null && form_name != "undefined") {
    var about_parrafo = $("#about p");

    about_parrafo.html("<br><strong>Bienvenido, " + form_name + "</strong> ");
    about_parrafo.append("<a href='#' id='logout'>Cerrar Sesion</a>");

    $("#login").hide();

    $("#logout").click(function () {
      localStorage.clear();
      location.reload();
    });
  }

  // Acordeon
  if (window.location.href.indexOf("about") > -1) {
    $('#acordeon').accordion();
    $()
  
  
  }
});
