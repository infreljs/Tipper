    window.onscroll = function() {scrollFunction()};
        
    function scrollFunction() 
    {
        document.getElementById("navbar").style.top = "0";
    }

    function openNav() 
    {
        document.getElementById("mySidenav").style.width = "300px";
    }

    function closeNav() 
    {
        document.getElementById("mySidenav").style.width = "0";
    }
    function dropdown()
    {
        document.getElementById("dropdown-menu").classList.toggle("show");
    }
    window.onclick = function(event) {
        if (!event.target.matches('.right-menu')) {
            var dropdowns = document.getElementsByClassName("dropdown-content");
            var i;
            for (i = 0; i < dropdowns.length; i++) {
                var openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('show')) {
                    openDropdown.classList.remove('show');
                }
            }
        }
    }