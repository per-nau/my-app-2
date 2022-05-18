import React, {Component} from 'react'
import { Accordion } from "react-bootstrap";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import PostData from './db.json'

class PostList extends Component{
  render(){
    return (
        <div class="container">
        <div className='row'>
        <div className='col mb-3'>
        <input class="form-control" id="searchBar" type="text" placeholder="Search.."></input></div>
          {PostData.map((postDetail)=>{
              return <Accordion defaultActiveKey="0">
                    {postDetail.topics.map( topic =>{
                        return(
                            <Accordion.Item eventKey={topic.id} id="posts-accordion">
                            <Accordion.Header>{topic.name}</Accordion.Header>
                                {topic.programs.map( program =>{
                                return(
                                <Accordion.Body>
                                    <Accordion className="inner-accordion" defaultActiveKey="0">
                                    <Accordion.Item eventKey={topic.programs.id}>
                                    <Accordion.Header>{program.title} - {program.programType.type}</Accordion.Header>
                                    <Accordion.Body>
                                        <div className='row'>
                                            <div className='col-7 border-end mb-3'>
                                        <p className="card-text">{program.description}</p>
                                                <div>
                                                    <p>{program.location.description}</p>
                                                    <p><b>Location:</b> {program.location.title} - {program.location.address} - {program.location.postcode}</p>
                                                    <p><b>Time:</b> {program.start_time} - {program.end_time}</p>
                                                    <p className="card-text"><b>Room: </b>{program.room}</p>
                                                    <div><a href={program.location.website} target="_blank" rel="noreferrer"><b>Access the Website</b></a></div> 
                                                </div>
                                            </div>
                                            <div className='col-5'>
                                                <img className='img-fluid rounded' src={program.location.cover_image} alt={program.location.title}></img>
                                            </div>
                                        </div>
                                                </Accordion.Body>
                                    </Accordion.Item>
                                    </Accordion>
                                    </Accordion.Body>
                                )
                                })}
                            </Accordion.Item>
                        )
                    })} 
                </Accordion>
          })}
      </div>
      </div>
    );
}
}


export default PostList;
