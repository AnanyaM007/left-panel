var panelLinks = document.querySelectorAll('#left-panel a');
var contentDivs = document.querySelectorAll('.tab-content');
for (var i = 1; i < contentDivs.length; i++) {
    contentDivs[i].style.display = 'none';
}
for (var j = 0; j < panelLinks.length; j++) {
    panelLinks[j].addEventListener('click', function (event) {
        event.preventDefault();
        for (var k = 0; k < panelLinks.length; k++) {
            panelLinks[k].classList.remove('active');
        }
        event.target.classList.add('active');
        for (var l = 0; l < contentDivs.length; l++) {
            contentDivs[l].style.display = 'none';
        }
        var contentId = event.target.getAttribute('href');
        document.querySelector(contentId).style.display = 'block';
    });
}
