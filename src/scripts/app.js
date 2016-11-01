const React = require('react')
const ReactDOM = require('react-dom')
const $ = require('jquery')

console.log(React)

let HomeView = React.createClass({
   render: function(){

   let jsxArray = this.props.userDataList.map(function(userObj, i){
         return < CongressPeople userDataList={userObj} key={i} />
      })
      return (
         <div>
            <ul>
               {jsxArray}
            </ul>
         </div>
      )
   }
})



let CongressPeople = React.createClass({
   render:function(){

      return(
              <div className="col-sm-4 col-md-4">
                   <div className="thumbnail green">
                     <div className="caption">
                       <h3>  {this.props.userDataList.first_name} {this.props.userDataList.last_name}  </h3>
                       <p>  {this.props.userDataList.title}--{this.props.userDataList.party}-{this.props.userDataList.state_name}  </p>
                       <ul>
                          <li>  {this.props.userDataList.oc_email}  </li>
                          <li>  {this.props.userDataList.fec_ids}  </li>
                          <li>  {this.props.userDataList.twitter_id}  </li>
                       </ul>
                       <p>   Term End{this.props.userDataList.term_end} </p>
                     </div>
                   </div>
                 </div>

       )

   }
})

$.getJSON('http://congress.api.sunlightfoundation.com/legislators?apikey=0156daaa29b04cfeb56537b9329ba35d').then(function(serverRes){
   ReactDOM.render(<HomeView userDataList={serverRes.results}/>, document.querySelector('#app-container'))
})
