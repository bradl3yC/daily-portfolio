import React, { Component } from 'react';
import './index.css';

class Portfolio extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <img src="https://s.aolcdn.com/hss/storage/adam/9106504cabf082186462767c9e51b83b/MSDCADD_EC006_H.JPG" alt=""/>
          </li>
          <li>
            <img src="http://dazedimg.dazedgroup.netdna-cdn.com/786/azure/dazed-prod/1150/1/1151875.jpg" alt=""/>
          </li>
          <li>
            <img src="https://assets.fastcompany.com/image/upload/w_596,c_limit,q_auto:best,f_auto,fl_lossy/fc/3035814-inline-i-1-how-advertising-helped-create-the-new-bill-murray-movie.jpg" alt=""/>
          </li>
          <li>
            <img src="http://cdn-static.denofgeek.com/sites/denofgeek/files/images/72216.jpg" alt=""/>
          </li>
          <li>
            <img src="http://www.tasteofcinema.com/wp-content/uploads/2014/07/bill-murray-ghostbusters.jpg" alt=""/>
          </li>
        </ul>
      </div>
    );
  }
}

export default Portfolio;
