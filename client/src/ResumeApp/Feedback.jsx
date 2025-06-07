import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField } from '@mui/material';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Feedback = ({ open, handleClose }) => {
    const [feedback, setFeedback] = useState('');

    const handleFeedback = (e) => {
        e.preventDefault();
        // Simulate feedback submission
        if (feedback.trim()) {
            // Show success message
            toast.success("Thank you for your Feedback!", {
                position: "top-left",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            setFeedback(''); // Clear feedback input
            handleClose(); // Close the dialog
        } else {
            // Show error message if feedback is empty
            toast.error("Feedback cannot be empty!", {
                position: "top-left",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
    };

    return (
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Your Feedback is Valuable</DialogTitle>
            <DialogContent>
                <TextField
                    autoFocus
                    margin="dense"
                    id="feedback"
                    label="Your Feedback"
                    type="text"
                    fullWidth
                    multiline
                    rows={4}
                    value={feedback}
                    onChange={(e) => setFeedback(e.target.value)}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="error">
                    Cancel
                </Button>
                <Button onClick={handleFeedback} color="primary">
                    Submit
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default Feedback;
