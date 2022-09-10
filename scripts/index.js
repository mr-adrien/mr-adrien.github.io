const wrappedElements = $(".wrapped");

wrappedElements.each((i, el) => {
    $(el).removeClass("wrapped");
    $(el).wrap("<div class='wrapped'></div>");
});
