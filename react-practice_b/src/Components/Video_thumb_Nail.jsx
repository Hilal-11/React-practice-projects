import React from 'react'

function Video_thumb_Nail(props) {

  const FetchedData = props.fetch_data;
  return (
    <div>

      {
        FetchedData.map( 
          (filteredData) => 
            (
              <div>
                <div>
                  <iframe 
                      src={filteredData.video} frameborder={filteredData.iframe_Controls.frameborder} title={filteredData.iframe_Controls.title} allow={filteredData.iframe_Controls.allow} referrerPolicy={filteredData.iframe_Controls.referrerpolicy}>
                  </iframe>
                </div>
                <div>
                  <p>{filteredData.description}</p>
                </div>
              </div>
            )
      )
      }

    </div>
  )
}

export default Video_thumb_Nail
