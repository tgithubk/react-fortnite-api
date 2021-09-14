import React from 'react'
import axios from 'axios'

export default class List extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      comments: [],
      data: []
    }
    this.componentDidMount = this.componentDidMount.bind(this);
  }

    componentDidMount(){
      axios.get(`https://fortnite-api.theapinetwork.com/upcoming/get`)
      .then(res => {
        console.log(res.data)
        this.setState({data: res.data.data})
      })
    }
    render() {
      return(
        <div>
          <h2>datas</h2>
          {this.state.comments.map((comment, index) => {
            return (
              <ul key={index}>
                <li>
                {comment.body}
              </li> 
              </ul>
            )
          })}
          <h2>Fortnite</h2>
          {this.state.data.map((da, index) => {
            return(
                  <ul key={index}>
                    <li>{da.item.name}<img src={da.item.images.icon} alt=""/></li>
                    </ul>
            )
              })}
        </div>
      )
    }
  
}