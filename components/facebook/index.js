import React from "react";
import Script from "next/script";

const Facebook = () => {
  return (
    <div>
      <div id="fb-root" />

      <div
        attribution="biz_inbox"
        page_id="507210889388752"
        className="fb-customerchat"
      />

      <Script>
        {`

          window.fbAsyncInit = function() {
            FB.init({
              xfbml            : true,
              version          : 'v11.0'
            });
          };

          (function(d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) return;
            js = d.createElement(s); js.id = id;
            js.src = 'https://connect.facebook.net/es_LA/sdk/xfbml.customerchat.js';
            fjs.parentNode.insertBefore(js, fjs);
          }(document, 'script', 'facebook-jssdk'))
      
      `}
      </Script>
    </div>
  );
};

export default Facebook;
