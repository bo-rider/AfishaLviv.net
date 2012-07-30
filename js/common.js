function renderPage(dataURL, templateURL, constainer) {
    var ajaxData = $.ajax(dataURL);
    var ajaxTemplate = $.ajax(templateURL);
    var def = $.Deferred();

    $.when(ajaxData, ajaxTemplate).done(function (a1, a2) {
        var data = JSON.parse(a1[2].responseText),
            template = a2[2].responseText;
        var html = Mustache.render(template, data);
        constainer.html(html);
        def.resolve();
    });

    return def;
}