
        function showContacts() {
            var contactsPopup = document.getElementById("contacts-popup");
            contactsPopup.style.display = "block";
        }

        function hideContacts() {
            var contactsPopup = document.getElementById("contacts-popup");
            contactsPopup.style.display = "none";
        }

        window.onscroll = function() {
            var backToTopButton = document.getElementById('back-to-top');
            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                backToTopButton.style.display = 'block';
            } else {
                backToTopButton.style.display = 'none';
            }
        };

        function scrollToTop() {
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        }
        function returnToHome() {
            window.location.href = "index.html";
            return false; // Це забезпечить відміну стандартної дії посилання
        }
        