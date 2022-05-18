import React, {Component} from 'react'
import './App.css';
import PostData from './db.json'

class Hero extends Component{
  render(){
    return (
      <div className="gradient">
      <div className="container flexer">
      <div className='row'>
          {PostData.map((postDetail)=>{
              return <div>
                  <h1 className='my-3' key={ postDetail.id }>{postDetail.description}</h1>
                  <h4 className='mb-3 subheading' >Start Date - {postDetail.start_time}</h4>
                  <h4 className='mb-3 subheading' >End Date - {postDetail.end_time}</h4>
                </div>
          })}
      </div>
      </div>
      </div>
    );
}
}
export default Hero;