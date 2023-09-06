import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Nav from "../nav/Nav";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


export default function Auth() {
  const [open, setOpen] = React.useState(true);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);



  return (
    <React.Fragment>
      <ToastContainer />
      <Nav />
      <div>
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Malumotlaringiz Yuborildi javobni sms orqali qabul qilasiz
            </Typography>
          </Box>
        </Modal>
      </div>
      <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="text-center">
                Malumotlaringiz Yuborildi javobni sms orqali qabul qilasiz
                </h1>
            </div>
          </div>
        </div>
    </React.Fragment>
  );
}
