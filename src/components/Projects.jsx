



import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'






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
    <div className='container '>
        <h1 className='mt-[5rem] mb-6 text-4xl font-lobster-one text-purple-400'>Projects</h1>
        <div className='  grid place-content-center grid-cols-2 md-s:flex-row  '>
            <div className=' p-3  shadow-lg mb-5 bg-white rounded '>
                <div className='card'> <div className='card-body'>
                    <h5 className='card-title text-left font-poppins font-semibold'>Auction House</h5>
                    <p className='card-text text-left font-poppins '>A group project done in Junior year of university</p>
                    <div className='text-left -ml-6 my-2'>
                    <a href='https://github.com/izha135/CS351-Project-5---Distributed-Auction' className='btn btn-outline-secondary mx-4' target='_blank'> <i className='fab fa-github mx-1'></i>Repo</a> </div>
                    <hr className='my-2' />
                    <div className='pb-3'>Languages: 
                    <a className='link' href="" target='_blank'><span className='badge bg-light text-dark'> Java:100% </span></a></div>
                    <p class="card-text"><a href="" target=" _blank" class="text-dark text-decoration-none"><span class="text-dark card-link mr-4"><i class="fab fa-github"></i> Stars <span class="badge badge-dark">1</span></span></a><small class="text-muted">Updated on June 23, 2023</small></p>
                </div>
                </div> </div>
            <div className='shadow-lg p-3 mb-5 bg-white rounded'> <div className='card'> <div className='card-body'>
                    <h5 className='card-title'>Auction House</h5>
                    <p className='card-text'>A group project done in Junior year of university</p>
                    <a href='https://github.com/izha135/Mazes' className='btn btn-outline-secondary mx-4' target='_blank'> <i className='fab fa-github'></i>Repo</a>
                    <hr className='my-2' />
                    <div className='pb-3'>Languages: 
                    <a className='link' href="" target='_blank'><span className='badge bg-light text-dark'> Java:100% </span></a></div>
                </div>
                </div></div>
            <div className=' shadow-lg p-3 mb-5 bg-white rounded'> <div className='card'> <div className='card-body'>
                    <h5 className='card-title'>Auction House</h5>
                    <p className='card-text'>A group project done in Junior year of university</p>
                    <a href='https://github.com/izha135/CS351-Project-5---Distributed-Auction' className='btn btn-outline-secondary mx-4' target='_blank'> <i className='fab fa-github'></i>Repo</a>
                    <hr className='my-2'/>
                    <div className='pb-3'>Languages: 
                    <a className='link' href="" target='_blank'><span className='badge bg-light text-dark'> Java:100% </span></a></div>
                </div>
                </div></div>
            <div className=' shadow-lg p-3 mb-5 bg-white rounded'> <div className='card'> <div className='card-body'>
                    <h5 className='card-title'>Auction House</h5>
                    <p className='card-text'>A group project done in Junior year of university</p>
                    <a href='https://github.com/izha135/CS351-Project-5---Distributed-Auction' className='btn btn-outline-secondary mx-4' target='_blank'> <i className='fab fa-github'></i>Repo</a>
                    <hr className='my-2'/>
                    <div className='pb-3'>Languages: 
                    <a className='link' href="" target='_blank'><span className='badge bg-light text-dark'> Java:100% </span></a></div>
                </div>
                </div></div>
            
        </div>
    </div>
   </section>
  )
}
