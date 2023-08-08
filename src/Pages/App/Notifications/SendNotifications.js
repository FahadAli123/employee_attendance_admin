/** @format */

import { TextField, Typography, Button } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { buttonColor } from "../../../Helpers/Colors";
import { CircularProgress } from "@mui/material";
import EmojiPicker from 'emoji-picker-react';

import { SendNotification } from '../../../Helpers/Backend';

const SendNotifications = () => {
    const [type, setType] = useState("");
    let userType = [
        { id: "3", type: "all" },
        { id: "1", type: "User" },
        { id: "2", type: "Barber" },
    ];

    useEffect(() => {
        setType(userType[0].type);
        giveBorder(userType[0].id);
    }, [])

    function giveBorder(id) {
        userType.forEach((e) => {
            if (e.id === id) {
                document.getElementById(id).style.backgroundColor = "#212121";
                document.getElementById(id).style.color = "white";
            } else {
                document.getElementById(e.id).style.backgroundColor = "white";
                document.getElementById(e.id).style.color = "Black";
            }
        });
    }



    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                margin: "auto",
                width: "70%",
                padding: "3%",
                marginTop: "10px",
                borderRadius: "10px",

            }}>
            <Typography component='h1' variant='h5'>
                Choose Type of Notification
            </Typography>

            <div style={{ display: "flex", flexDirection: "row", marginTop: "10px" }}>
                {userType.map((item) => (
                    <div
                        id={item.id}
                        key={item.id}
                        onClick={() => {
                            giveBorder(`${item.id}`);
                            setType(item.type);
                        }}
                        className='chooseType'
                        style={{
                            backgroundColor: "white",
                            borderRadius: "5px",
                            marginRight: "20px",
                            padding: "10px",
                            textAlign: "center",
                            alignItems: "center",
                            border: "1px solid black",
                            cursor: "pointer",
                        }}>
                        <h6 style={{ margin: "auto" }}>{item.type}</h6>
                    </div>
                ))}
            </div>
            {type !== "" ? <FormFields type={type} /> : null}
        </div>
    );
};

const FormFields = ({ type }) => {


    useEffect(() => {
        ResetValidations();
        ResetFormFields();
    }, [type]);

    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState({ success: false, message: "" });
    const [roleValidation, setRoleValidation] = useState({
        error: false,
        errorMessage: "",
    });

    const [titleValidation, setTitleValidation] = useState({
        error: false,
        errorMessage: "",
    });
    const [messageValidation, setMessageValidation] = useState({
        error: false,
        errorMessage: "",
    });


    const [title, setTitle] = useState("");
    const [message, setMessage] = useState("");

    const [chosenEmoji, setChosenEmoji] = useState(null);

    const onEmojiClick = (event, emojiData) => {
        console.log(emojiData.emoji);
        // setMessage(`${message}${emojiObject}`)
        // setChosenEmoji(emojiObject);
    };

    const ResetValidations = () => {
        setTitleValidation({ error: false, errorMessage: "" });
        setMessageValidation({ error: false, errorMessage: "" });

        setResult({ success: false, message: "" });
    };

    const ResetFormFields = () => {
        setTitle("");
        setMessage("");
    };

    const SendNotifications = () => {
        ResetValidations();

        if (title === "") {
            setTitleValidation({ error: true, errorMessage: "Title is required" });
        }
        if (message === "") {
            setMessageValidation({ error: true, errorMessage: "Message is required" });
        }

        const NotificationBody = {
            title: title,
            message: message,
            type: type,
        }
        // if (title !== "" && message !== "") {
        //     setLoading(true);
        //     setTimeout(() => {
        //         setLoading(false);
        //         setResult({ success: true, message: "Notification Sent" });
        //     }, 1000)

        //     setTimeout(() => {
        //         setResult({ success: false, message: "" });
        //     }, 2000)
        // }

        if (title !== "" && message !== "") {
            console.log("Notifications Body===", NotificationBody)
            setLoading(true);
            SendNotification(NotificationBody, type)
                .then((res) => {
                    // console.log("res=>", res.data.data.body)
                    const data = JSON.parse(res.data.data.body)
                    console.log(data)
                    if (data.success) {
                        setResult({ success: true, message: data.message });
                        ResetFormFields();
                        setLoading(false);
                        setTimeout(() => {
                            setResult({ success: false, message: "" });
                        }, 2000)
                    }
                })
                .catch((err) => {
                    console.log(err)
                })
        }
    };

    return (
        <div
            style={{
                width: "100%",
                height: "auto",
                margin: "auto",
                marginTop: "2%",
                gap: "20px",
                display: "flex",
                flexDirection: "column",
            }}>
            {/* Name */}
            <div>
                <label style={{ fontWeight: "bold", marginBottom: "5px" }}>Title</label>
                <TextField
                    error={titleValidation.error ? true : false}
                    helperText={titleValidation.errorMessage}
                    variant='outlined'
                    id='outlined-password-input'
                    fullWidth
                    value={title}
                    size='small'
                    onChange={(e) => setTitle(e.target.value)}
                    name='title'
                    inputProps={{
                        autoComplete: "new-password",
                        form: {
                            autoComplete: "off",
                        },
                    }}
                />
            </div>
            {/* Email */}
            <div>
                <label style={{ fontWeight: "bold", marginBottom: "5px" }}>Message</label>
                <TextField
                    error={messageValidation.error ? true : false}
                    helperText={messageValidation.errorMessage}
                    variant='outlined'
                    id='outlined-password-input'
                    type='message'
                    fullWidth
                    multiline
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    name='message'
                    size='small'
                    inputProps={{
                        autoComplete: "new-password",
                        form: {
                            autoComplete: "off",
                        },
                    }}
                />
            </div>
            {
                result.success ? <div style={{ color: "green" }}>{result.message}</div> : null
            }

            <div>
                <EmojiPicker
                    onEmojiClick={(emojiData) => {
                        setMessage(`${message} ${emojiData.emoji} `)
                    }}
                />
            </div>



            <Button
                disabled={loading}
                variant='contained'
                style={buttonColor}
                onClick={SendNotifications}>
                {loading && (
                    <div class="loader"></div>

                )}
                {loading && <span class="ml-4">Notification Sending </span>}
                {!loading && <span>Send</span>}
            </Button>
        </div>
    );
};


export default SendNotifications;
