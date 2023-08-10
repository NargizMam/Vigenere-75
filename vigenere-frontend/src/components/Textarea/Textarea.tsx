import React, {ChangeEventHandler} from 'react';
import {Grid, TextField} from "@mui/material";

interface Props {
    label: string,
    onChange: ChangeEventHandler,
    name: string,
    value: string
}

const Textarea: React.FC<Props> = ({ label, onChange, name, value}) => {
    let newLabel = `Messages  ${label}`;
    if(label){

    }
    return (
        <>
            <Grid item >
                <TextField
                    fullWidth
                    multiline
                    rows={3}
                    variant="outlined"
                    name={name}
                    label={newLabel}
                    value={value}
                    onChange={onChange}
                />
            </Grid>
        </>
    );
};

export default Textarea;