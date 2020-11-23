export default function (ctx, inject) {
  const GA_ID = process.env.GA_ID

  if (GA_ID === undefined) {
    return;
  }

  /*
   ** Only run on client-side and only in production mode
   */
  // if (process.env.NODE_ENV !== 'production') {
  //   return;
  // }
  /*
   ** Include Google Analytics Script
   */
  let script = document.createElement('script');
  script.async = true;
  script.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_ID;
  document.body.appendChild(script);

  window.dataLayer = window.dataLayer || [];

  function gtag() {
    dataLayer.push(arguments);
  }

  /*
   ** Set the current page
   */
  gtag('js', new Date());
  gtag('config', GA_ID);

  inject('gtag', gtag)
  ctx.$gtag = gtag

  /*
   ** Every time the route changes (fired on initialization too)
   */
  ctx.app.router.afterEach((to, from) => {
    /*
     ** We tell Google Analytics to add a `pageview`
     */
    gtag('config', GA_ID, {
      'page_path': to.fullPath
    });
  });
}
