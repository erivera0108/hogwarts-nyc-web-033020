import React from 'react'


// specialty: 'Expert Witness',
//     greased: false,
//     weight: 2.2,
//     'highest medal achieved': 'silver'
class HogCard extends React.Component{
    pigImage = require(`../hog-imgs/${this.props.name.toLowerCase().split(' ').join('_')}.jpg`) //how can we dynamically generate the filename?

    handleClick = (e) => {
        console.log(e.target.parentNode.children[1])
        const hiddenDiv = e.target.parentNode.children[1]
        hiddenDiv.hidden= ''
    }

    render(){

        return(
            <div className='ui grid container'>
                <div className='ui eight wide column'>
                    <h1>Name: {this.props.name}</h1>
                    <div className='hogInfo' hidden='true'>
                        <p>Specialty: {this.props.specialty}</p>
                        <p>Greased: {this.props.greased}</p>
                        <p>Weight: {this.props.weight}</p>
                        <p>Highest Medal Achieved: {this.props['highest medal achieved']}</p>
                    </div>
                    <img src={this.pigImage}/> <br/>
                    <button onClick={this.handleClick}> More Info</button>
                </div>
            </div>
        )
        
    }
}

export default HogCard