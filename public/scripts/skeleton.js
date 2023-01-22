"use strict";
function loadSkeleton() {
    console.log($('#navPlaceholder').load('../../app/html/nav.html'));
    console.log($('#footerPlaceholder').load('../../app/html/footer.html'));
}
loadSkeleton();

$(".goBack").on("click", function (e) {
    e.preventDefault();
    window.history.back();
});