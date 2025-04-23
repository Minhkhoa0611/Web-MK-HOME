document.addEventListener("DOMContentLoaded", function () {
    const contactInfoSection = document.querySelector(".contact-info");
    const footerSection = document.querySelector(".site-footer");

    if (contactInfoSection && footerSection) {
        const fbCommentsHTML = `
            <div id="fb-root"></div>
            <div class="fb-comments-container" style="margin: 50px auto; max-width: 100%; padding: 30px; border-radius: 15px; box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2); background-color: #ffffff; border: 1px solid #e0e0e0;">
                <div style="text-align: center; margin-bottom: 20px;">
                    <img src="Logo.png" alt="MK Logo" style="height: 80px; width: auto; border-radius: 10px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
                </div>
                <h3 style="font-size: 24px; font-weight: bold; color: #0055ff; margin-bottom: 20px; text-align: center; text-shadow: 1px 1px 3px rgba(0, 85, 255, 0.3);">
                    Ý Kiến Khách Hàng
                </h3>
                <div class="fb-comments" 
                     data-href="https://www.xaydungminhkhoa.online" 
                     data-width="100%" 
                     data-numposts="5" 
                     style="border-top: 1px solid #e0e0e0; padding-top: 20px; overflow-x: hidden;">
                </div>
            </div>
        `;

        contactInfoSection.insertAdjacentHTML("afterend", fbCommentsHTML);

        // Load Facebook SDK
        (function (d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) return;
            js = d.createElement(s); js.id = id;
            js.src = "https://connect.facebook.net/vi_VN/sdk.js#xfbml=1&version=v19.0";
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
    }
});
