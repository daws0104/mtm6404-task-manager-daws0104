import React from "react"
    
    //  const date = new Date();
    //  const hour = date.getHours();

class Greeting extends React.Component {

    render() {
        const date = new Date();
        const hour = date.getHours();
        return(
            <div className="helloTime">
                { hour >= 12 ?
                    <h3>Good Evening</h3> :
                    <h3>Good Morning</h3>
                }
                {/* <h3>Good</h3> {hour>=12 ? hour>=16 ? <h3>Evening</h3> : <h3></h3> */}
            </div>
        );
        
    }
}

export default Greeting;

