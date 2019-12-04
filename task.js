import React, { Component } from "react"
import { TouchableOpacity, Text } from "react-native"
import { Container } from "../components/common";


export class Task extends Component {
  
    state = { screenLoading: false }

    change(){
        this.setState({screenLoading:true})
        setTimeout(()=>{this.setState({screenLoading:false})},3000)
    }
    render() {
        const { screenLoading } = this.state
        return (
            <Container loading={screenLoading} containerStyle={{backgroundColor:'blue'}} >
                <TouchableOpacity onPress={()=>this.change()}  style={{ backgroundColor: 'red', width: 200, height: 80, justifyContent: "center", alignItems: "center" }}>
                    <Text> أضغط هنااا  </Text>

                </TouchableOpacity>
            </Container>
        )
    }



}