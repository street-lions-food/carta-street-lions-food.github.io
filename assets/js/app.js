window.addEventListener('DOMContentLoaded', (event) => {
    var base = document.querySelector('body'); // the container for the variable content
    var selector = '.carta'; // any css selector for children

    base.addEventListener('click', function(event) {
        // find the closest parent of the event target that
        // matches the selector
        var closest = event.target.closest(selector);
        if (closest && base.contains(closest) && closest.id) {
            window.open("pdf/"+closest.id+".pdf", '_blank');
        }
    });

});