import React from "react"
import Script from "next/script"
const Facebook = () => {
  return (
    <div>
      <div id='fb-root'></div>

      <div
        id='fb-customer-chat'
        className='fb-customerchat'
        attribution='biz_inbox'
        page_id='101774235552574'
      ></div>

      <Script strategy='lazyOnload'>
        {` var chatbox = document.getElementById('fb-customer-chat');
      chatbox.setAttribute("page_id", "101774235552574");
      chatbox.setAttribute("attribution", "biz_inbox");

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
      }(document, 'script', 'facebook-jssdk'))`}
      </Script>
    </div>
  )
}

export default Facebook
