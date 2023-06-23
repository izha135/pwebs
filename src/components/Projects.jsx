
import $ from 'jquery';



import React from 'react'

export default function Projects() {
    var request = new XMLHttpRequest()

  request.open('GET', 'https://api.github.com/users/izha135/repos', true)
  
  request.onload = function () {
    var data = JSON.parse(this.response);
    console.log(data);
    var statusHTML = '';

    $.each(data, function(i, status) {
      statusHTML += ''
    })
  }
   request.send();
 
  return (
   <section>
    <div className='container'>
        <div className='grid grid-cols-2'>
            <div className='col-4'>Test </div>
            <div className='col-4'>Test</div>
            <div className='col-4'>Test</div>
            <div className='col-4'>Test</div>
            
        </div>
    </div>
   </section>
  )
}
