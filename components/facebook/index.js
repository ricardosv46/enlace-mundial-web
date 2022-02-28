import React from 'react'

export function init() {
  window.fbAsyncInit = function () {
    FB.init({
      xfbml: true,
      version: 'v11.0'
    })
  }
  // ;(function (d, s, id) {
  //   var js,
  //     fjs = d.getElementsByTagName(s)[0]
  //   if (d.getElementById(id)) return
  //   js = d.createElement(s)
  //   js.id = id
  //   js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js'
  //   fjs.parentNode.insertBefore(js, fjs)
  // })(document, 'script', 'facebook-jssdk')
}

export function cleanup() {
  ;(function (d, id) {
    let target = d.getElementById(id)
    if (target) {
      target.parentNode.removeChild(target)
    }
  })(document, 'facebook-jssdk')

  delete window.FB
}

const Facebook = () => {
  React.useEffect(() => {
    console.log('FACEBOOK')
    init()

    return () => {
      cleanup()
    }
  }, [])

  return (
    <>
      <div id="fb-root" />
      <div
        attribution="biz_inbox"
        page_id="101774235552574"
        className="fb-customerchat"
      />
    </>
  )
}

export default Facebook
