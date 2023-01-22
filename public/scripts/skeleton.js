"use strict";
function loadSkeleton(){
    console.log($('#navPlaceholder').load('../../app/html/nav.html'));
    console.log($('#footerPlaceholder').load('../../app/html/footer.html'));
}
loadSkeleton();