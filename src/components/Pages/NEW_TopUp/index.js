import React, { useState } from "react";
import {
    Grid
} from "@material-ui/core";
import TopUpStep from "./components/step";
import BankSelectionAndAmount from "./components/bankSelectionAndAmount";
import Instructions from "./components/instructions";
import CompleteAwaiting from "./components/completeAwaiting";
// import TransferDetails from "./components/transferDetails";
// import PaymentMethod from './components/paymentMethod';
// import Instructions from './components/instructions';
// import CompleteSuccess from './components/completeSuccess';
// import CompleteAwaiting from './components/completeAwaiting';

const TopUp = () => {
    const [step, setStep] = useState(0);

    const nextStep = () => {
        setStep(prevState => prevState + 1);
    };

    const renderComponent = () => {
        if(step === 0){
            return <BankSelectionAndAmount nextStep={nextStep}/>;
        }else if(step === 1){
            return <Instructions nextStep={nextStep}/>;
        }else if(step === 2){
            return <CompleteAwaiting/>;
        }
    };

    return (
        <Grid container spacing={2}>
            <Grid item xs={2}>
                <TopUpStep activeStep={step} style={{marginTop: -10}} />
            </Grid>
            <Grid item xs={10}>
                {renderComponent()}
            </Grid>
        </Grid>
    );
};

export default TopUp;
