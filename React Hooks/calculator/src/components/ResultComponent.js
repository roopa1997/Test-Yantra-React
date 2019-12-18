import React from 'react';

export default function ResultComponent()
 {



        let {result} = this.props;
        return (
            <div className="result">
                <p>{result}</p>
            </div>
    )
        ;
    }




