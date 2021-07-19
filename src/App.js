import React,{useState} from "react"
import Icon from "./Components/Icon"
// import "./styles.css"   //it should be on the last bcz of css overload //css shouls be the last to import
//import react-toastify
import {ToastContainer, toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//import reactstrap
import { Button, Container, Card,CardBody, Row, Col } from "reactstrap";
import "bootstrap/dist/css/bootstrap.css"
import "./styles.css"

const ticktacArray=new Array(9).fill("")    //it will create an array of 9 elements and fill will make all 9 ele empty
const App = ()=>{
    let [isCross, setIsCross]= useState(true) //isCross will put X for true OR O for flase
    let [winMessage, setWinMessage] = useState("")

    const playAgain=()=>{
        setIsCross(true)
        setWinMessage("")
        ticktacArray.fill("")
    }

    const findWinner=()=>{
        if(ticktacArray[0]==ticktacArray[1] && ticktacArray[0]==ticktacArray[2] && ticktacArray[0]!=""){ //1st row
            setWinMessage(ticktacArray[0]+" has won")
        }
        else if(ticktacArray[3]==ticktacArray[4] && ticktacArray[3]==ticktacArray[5] && ticktacArray[3]!=""){ //2nd row
            setWinMessage(ticktacArray[3]+" has won")
        }
        else if(ticktacArray[6]==ticktacArray[7] && ticktacArray[6]==ticktacArray[8] && ticktacArray[6]!=""){ //3rd row
            setWinMessage(ticktacArray[6]+" has won")
        }
        else if(ticktacArray[0]==ticktacArray[3] && ticktacArray[6]==ticktacArray[0] && ticktacArray[0]!=""){ //1st col
            setWinMessage(ticktacArray[0]+" has won")
        }
        else if(ticktacArray[1]==ticktacArray[4] && ticktacArray[1]==ticktacArray[7] && ticktacArray[1]!=""){ //2nd col
            setWinMessage(ticktacArray[1]+" has won")
        }
        else if(ticktacArray[2]==ticktacArray[5]&& ticktacArray[2]==ticktacArray[8] && ticktacArray[2]!=""){ //3rd col
            setWinMessage(ticktacArray[2]+" has won")
        }
        else if(ticktacArray[2]==ticktacArray[4] && ticktacArray[2]==ticktacArray[6] && ticktacArray[2]!=""){ //1st diagonal
            setWinMessage(ticktacArray[2]+" has won")
        }
        else if(ticktacArray[0]==ticktacArray[4] && ticktacArray[0]==ticktacArray[8] && ticktacArray[0]!=""){ //4th diagonal
            setWinMessage(ticktacArray[0]+" has won")
        }
    }

    const changeItem=(index)=>{
        if(winMessage){  //if someone is won
            return toast("Game has already got over", {type: "success"})
        }
        if(ticktacArray[index]==""){  //if position is empty
            ticktacArray[index]=isCross? "cross" : "circle" //if iscross is true then print cross else print circle
            setIsCross(!isCross)
        }
        else{
            return toast("Open your eyes dude where are you tapping", {type: "error"})
        }
        findWinner()
    }

//const App=()=>{
    return(
        //bootstrap divide your page into 12 parts
         <Container className="p-5"> {/*padding of 5*/}
         <ToastContainer position="bottom-center"> </ToastContainer>
            <Row>
                <Col md={6} className="offset-md-3"> {/*md-3 for center */}
                    {
                        //to display the winner msg
                        winMessage? (
                            <div>
                                <h1 className="text-center">
                                    {winMessage}
                                </h1>
                                <Button  className="btn" onClick={playAgain}>Play Again</Button> {/*reload  // if we use playAgain() then it will automaatically reload withoud clicking the reload button */}
                            </div>
                        ) : (               //whose turn is it?
                            <h1>
                                {isCross ? "Cross's Turn" : "Circle's Turn"}
                            </h1>
                        )
                    }

                    <div className="grid">
                        {ticktacArray.map((value,index)=>(
                            <Card onClick={()=>changeItem(index)}> {/*here we use a callback bcz otherwise it will call automatically, But with using callback it will wait for the click on the card*/}
                                <CardBody className="box">
                                    <Icon choice={ticktacArray[index]}/>
                                </CardBody>
                            </Card>
                        ))}
                    </div>
                </Col>  

            </Row>
        </Container>
    )
//}
}
export default App;