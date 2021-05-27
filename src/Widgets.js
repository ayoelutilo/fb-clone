import React from 'react';
import './Widgets.css';

function Widgets() {
    return (
        <div class='widgets'>
          <iframe 
          src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fhuntironstore%2F&tabs=timeline&appId=1898338767049964" 
          width="340" 
          style={{ border:'none' , overflow: 'hidden' , height: '100%œ' }}
          scrolling="no" 
          frameborder="0" 
          allowfullscreen="true" 
          allow="encrypted-media"></iframe>
        </div>
    )
}

export default Widgets
