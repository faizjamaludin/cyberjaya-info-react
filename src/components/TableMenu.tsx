import React, { useState } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

import NewsModal from "./modal/NewsModal";

function TableMenu() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);

  const handleClick = (e: any) => {
    setAnchorEl(e.currentTarget);
    setIsModalOpen(true);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <MoreVertIcon className="text-primary" />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem className="flex gap-2" onClick={handleClose}>
          <EditIcon fontSize="small" />
          <span className=" text-sm font-medium text-primary">Edit</span>
        </MenuItem>
        <MenuItem className="flex gap-2" onClick={handleClose}>
          <DeleteIcon fontSize="small" />
          <span className=" text-sm font-medium text-primary">Delete</span>
        </MenuItem>
      </Menu>
      {isModalOpen && selectedRow && (
        <NewsModal open={isModalOpen} onClose={closeModal} />
      )}
    </div>
  );
}

export default TableMenu;
