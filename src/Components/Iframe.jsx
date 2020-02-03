import React from 'react'

const Iframe = () => {
  return (
    <>
      <div id="iframe-container">
        <div id="iframe-wrapper">
          <iframe
            title='synthwave'
            src="//fast.wistia.net/embed/iframe/90uezxx8ob?"
            frameBorder="0"
            scrolling="no"
            className="wistia_embed"
            name="wistia_embed"
            width="100%"
            height="1000px"
          ></iframe>
        </div>
        <div className="banner-text">
          <h1 id="banner-header">
            ◪ ◬ ◒ ✕
            <br />
            FRONT END
            <br />
            DEVELOPER
            <br />
            BASED IN STOCKHOLM, SWEDEN
          </h1>
        </div>
      </div>
    </>
  )
}

export default Iframe
