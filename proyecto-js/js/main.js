$("document").ready(function () {
  // SLIDER

  $(".galeria").bxSlider({
    mode: "fade",
    cpations: false,
    slideWidth: 1200,
    responsive: true,
    pager: true,
  });

  // POSTS

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


  // Selector de tema
  
  var theme = $('#theme');

  $('#to-green').click(function(){
    theme.attr("href","css/green.css")
  });

  $('#to-red').click(function(){
    theme.attr("href","css/red.css")
  });

  $('#to-blue').click(function(){
    theme.attr("href","css/blue.css")
  });
});
