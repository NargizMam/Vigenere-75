import React, {useState} from 'react';
import {Button, Container, Grid, TextField, Typography} from "@mui/material";
import Textarea from "../../components/Textarea/Textarea";
import VerticalAlignBottomIcon from '@mui/icons-material/VerticalAlignBottom';
import VerticalAlignTopIcon from '@mui/icons-material/VerticalAlignTop';
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {decodeMessage, encodeMessage} from "./CodesThunk";
import {selectLoading, selectMessage} from "./CodesSlice";
import { LoadingButton } from '@mui/lab';

const Codes = () => {
    const initialMessage = {
        encodeText: '',
        decodeText: '',
        password: ''
    }
    const dispatch = useAppDispatch();
    const message = useAppSelector(selectMessage);
    const loading = useAppSelector(selectLoading);
    const [state, setState] = useState(initialMessage);
    const onInputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target;
        setState(prevState => {
            return {...prevState, [name]: value}
        });
    };
    const submitFormHandler =async (event: React.FormEvent) => {
        event.preventDefault();
        await dispatch(encodeMessage({...state}));
        setState(message);
    };
    const onDecodeMessage = async () => {
        await dispatch(decodeMessage({...state}));
        setState(message);
    };

    return (
        <>
            <Container>
                <Grid maxWidth="md"
                      rowSpacing={2}
                      textAlign="center"
                      marginX="auto"
                      marginTop={5}
                >
                    <Typography>Messages</Typography>
                    <form onSubmit={submitFormHandler}>
                        <Textarea label={'text'}
                                  name="decodeText"
                                  onChange={onInputHandler}
                                  value={state.decodeText}
                        />
                        <Grid item >
                            <TextField
                                fullWidth
                                variant="outlined"
                                label="Password"
                                type="password"
                                name="password"
                                onChange={onInputHandler}
                                value={state.password}
                            />
                        </Grid>
                        <LoadingButton loading={loading}/>
                        <Button variant="outlined"
                                type="submit"
                                disabled={state.decodeText === ''}
                        >
                            <VerticalAlignBottomIcon/>
                            Down
                        </Button>
                        <Textarea label='and password decode'
                                  name='encodeText'
                                  onChange={onInputHandler}
                                  value={state.encodeText}
                        />

                    </form>
                    <LoadingButton loading={loading}/>
                    <Button variant="outlined"
                            onClick={onDecodeMessage}
                            disabled={state.encodeText === ''}

                    >
                        <VerticalAlignTopIcon/>
                        UPP
                    </Button>
                </Grid>
            </Container>
        </>
    );
};

export default Codes;