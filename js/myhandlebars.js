jQuery(document).ready(function(){
    /*
    var source   = $("#entry-template").html();
    var template = Handlebars.compile(source);
    var context = {title: "My New Post", body: "This is my first post!"}
    var html    = template(context);
    $("#insert").html(html);
    */
    // Load a single template.
    $.Mustache.load('template-head.html')
        .done(function () {
            var output = $('h2');

            output.append($.Mustache.render('head-template', { name: "Dave" }));
        });

});