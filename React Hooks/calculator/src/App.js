import React from 'react';
import './App.css';
import ResultComponent from './components/ResultComponent';
import KeyPadComponent from "./components/KeyPadComponent";


export default function App(){

const [result,setresult] = useState(result);



    onClick = button => {

        if(button === "="){
            this.calculate()
        }

        else if(button === "C"){
            this.reset()
        }
        else if(button === "CE"){
            this.backspace()
        }

        else {
            setresult( props.result + button )
        
    };


    calculate = () => {
        var checkResult = ''
        if(props.result.includes('--')){
            checkResult = props.result.replace('--','+')
        }

        else {
            checkResult = props.result
        }

        try {
            setresult({
                // eslint-disable-next-line
                result: (eval(checkResult) || "" ) + ""
            })
        } catch (e) {
            setresult({
                result: "error"
            })

        }
    };

    reset = () => {
        setresult({
            result: ""
        })
    };

    backspace = () => {
        setresult({
            result: props.result.slice(0, -1)
        })
    };

   
        return (
            <div>
                <div className="calculator-body">
                    <h1>CALCULATOR</h1>
                    <ResultComponent result={result}/>
                    <KeyPadComponent onClick={onClick}/>
                </div>
            </div>
        );
    
}

