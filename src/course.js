import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

export default class Course extends React.Component {

    componentDidMount() {
        console.log(this.props.a)
    }

    render() {
        return (
            <table className="table table-hover" border="bordered">

                <thead>
                    <tr>
                        <th scope="col">Course Name</th>
                        <th scope="col">Course Fee</th>


                    </tr>
                </thead>
                <tbody>
                    {Object.values(this.props.a).map((val, index) => { return <tr key={index}><td>{val.CourseName}</td><td>{val.Fee}</td></tr> })}
                </tbody>
            </table>
        );
    }
}

