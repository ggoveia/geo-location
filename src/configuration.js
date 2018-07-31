(function () {
    $(initializeTooltips);
})()

function initializeTooltips() {
    $('span[data-toggle="tooltip"]').tooltip({
        animated: 'fade',
        placement: 'right',
    });
}