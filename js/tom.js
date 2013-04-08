$(function() {
    return $('.run').click(function() {
        var html, json, template;
        template = $('.template').val();
        json = $.parseJSON($('.json').val());
        html = Mustache.to_html(template, json).replace(/^\s*/mg, '');
        $('.html').text(html);
    });
});