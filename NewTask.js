import React, { Component } from "react"
import { TouchableOpacity, Text, } from "react-native"
import { Container } from "../components/common";
import { Btn } from "../components/common/Btn";


export class NewTask extends Component {

    render() {

        return (

            <Container containerStyle={{ justifyContent: 'center' }} >


                <Btn name={'MAGDY'} btnStyle={{ backgroundColor:"red" }}>  </Btn>
                <Btn name={'NENO'} >  </Btn>
                <Btn name={'ISLAM'}>  </Btn>
            </Container>


        )



    }





}