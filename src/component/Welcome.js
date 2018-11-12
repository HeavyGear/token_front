import React, {Component} from 'react';

class Welcome extends Component{
    state = { message: undefined }

    componentDidMount(){
        let jwt = window.localStorage.getItem('jwt');

        fetch("http://unipastas-back.herokuapp.com/auth",
            {
                method: 'GET',
                headers: {
                    'Authorization': 'Bearer ' + jwt,
                },
            },
        ).then(res => res.json())
        .then(res => (console.log(res.msg), this.setState({message: res.msg})
        ))
    }


    render(){
        return(
            <div>
                <h1>{this.state.message}</h1>
            </div>
        )
    }
}

export default Welcome;