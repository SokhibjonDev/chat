import React from 'react'
import './Navigation.css'
const Navigation = () => {
  return (
    <div className='Navigation'>
      <ul>
        <div className="category-groups">
          <li><a href='#!'><img className='avatar' src="/img/avatar.jfif" alt="" /> <div className="active"></div></a></li>
          <li><a href='#!'><i class="uil uil-play-circle"></i></a></li>
          <li><a href='#!'><i class="uil uil-comments"></i></a></li>
          <li><a href='#!'><i class="uil uil-layer-group"></i></a></li>
          <li><a href='#!'><i class="uil uil-robot"></i></a></li>
          <li><a href='#!'><i class="uil uil-bookmark-full"></i></a></li>
          <li><a href='#!'><i class="uis uis-signal-alt-3"></i></a></li>

        </div>
        <div className="category-setting">
          <li><a href='#!'><i class="uil uil-question-circle"></i></a></li>
          <li><a href='#!'><i class="uil uil-cog"></i></a></li>
        </div>
      </ul>
    </div>
  )
}

export default Navigation
