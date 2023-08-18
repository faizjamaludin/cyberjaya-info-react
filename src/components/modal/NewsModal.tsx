import React from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";

function NewsModal(props: any) {
  return (
    <Modal open={props.open} onClose={props.onClose}>
      <Box></Box>
    </Modal>
  );
}

export default NewsModal;
