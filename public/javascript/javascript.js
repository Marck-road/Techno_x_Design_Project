document.getElementById("sdg1").addEventListener("click", function() {
    window.location.href = "public/pages/case-study-1.html";
});

document.getElementById("sdg2").addEventListener("click", function() {
    window.location.href = "public/pages/case-study-2.html";
});


$(document).ready(function () {
    // Add click event listener to all nav links
    $('#myNavbar .nav-link').on('click', function () {
        // Remove 'active' class from all nav items
        $('#myNavbar .nav-item').removeClass('active');
        
        // Add 'active' class to the clicked nav item
        $(this).closest('.nav-item').addClass('active');
    });
});