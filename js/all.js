function openNav() {
    document.getElementById("mySidepanel").style.width = "250px";
}
function closeNav() {
    document.getElementById("mySidepanel").style.width = "0";
}

// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.getElementById("navbar").style.top = "0px";
    } else {
        document.getElementById("navbar").style.top = "34px";
    }
}

$(document).ready(function () {
    $(".nav-tabs a").click(function () {
        $(this).tab('show');
    });

    $(".nav-tabs p").click(function () {
        $(this).tab('show');
    });

    $('#inner-images').owlCarousel({
        loop: true,
        margin: 30,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })

    $('#combos-boxex').owlCarousel({
        loop: true,
        margin: 30,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    })

    $('#roller-images').owlCarousel({
        loop: true,
        margin: 0,
        nav: false,
        responsive: {
            0: {
                items: 1.5
            },
            600: {
                items: 2
            },
            1000: {
                items: 3.5
            }
        }
    })
    $('#brand-banner').owlCarousel({
        loop: true,
        margin: 0,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 3
            }
        }
    })
});
