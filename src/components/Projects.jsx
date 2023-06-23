



import React from 'react'

export default function Projects() {
  //   var request = new XMLHttpRequest()

  // request.open('GET', 'https://api.github.com/users/izha135/repos', true)
  
  // request.onload = function () {
  //   var data = JSON.parse(this.response);
  //   console.log(data);
  //   var statusHTML = '';
    

  //   $.each(data, function(i, status) {
  //     statusHTML += '<div>';
  //     statusHTML += '<div>' + status.name + '</div>'
  //   })
  // }
  //  request.send();
 
  return (
   <section>
    <div className='container'>
        <div className='grid grid-cols-2 gap-12 px-10 '>
            <div className='col-4 shadow-lg p-3 mb-5 bg-white rounded '>
                <div className='card'> <div className='card-body'>
                    <h5 className='card-title'></h5>
                    <p className='card-text'></p>
                </div>
                </div> </div>
            <div className='col-4 shadow-lg p-3 mb-5 bg-white rounded'>Test</div>
            <div className='col-4 shadow-lg p-3 mb-5 bg-white rounded'>Test</div>
            <div className='col-4 shadow-lg p-3 mb-5 bg-white rounded'>Test</div>
            
        </div>
    </div>
   </section>
  )
}
