import React, { useState } from "react";
import {
    Grid
} from "@material-ui/core";
import SendStep from "./components/step";
import TransferDetails from "./components/transferDetails";
import PaymentMethod from './components/paymentMethod';
import Instructions from './components/instructions';
import CompleteSuccess from './components/completeSuccess';
import CompleteAwaiting from './components/completeAwaiting';

const Send = () => {
    const [paymentMethod, setPaymentMethod] = useState('');

    const [step, setStep] = useState(0);

    const nextStep = () => {
        setStep(prevState => prevState + 1);
    };

    const setPaymentMethodFunction = (paymentMethod) => {
        setPaymentMethod(paymentMethod);
    };

    const renderComponent = () => {
        if(step === 0){
            return <TransferDetails nextStep={nextStep}/>;
        }else if(step === 1){
            return <PaymentMethod 
                nextStep={nextStep} 
                paymentMethod={paymentMethod}
                setPaymentMethodFunction={setPaymentMethodFunction} 
            />;
        }

        if(paymentMethod === 'deposit'){
            if(step === 2){
                return <CompleteSuccess/>;
            }
        }else{
            console.log(paymentMethod);
            if(step === 2){
                return <Instructions nextStep={nextStep} />;
            }
            if(step === 3){
                return <CompleteAwaiting/>;
            }
        }
    };

    return (
        <Grid container spacing={2}>
            <Grid item xs={2}>
                <SendStep paymentMethod={paymentMethod} activeStep={step} style={{marginTop: -10}} />
            </Grid>
            <Grid item xs={10}>
                {renderComponent()}
            </Grid>
        </Grid>
    );
};

export default Send;
