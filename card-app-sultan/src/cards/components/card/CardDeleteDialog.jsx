import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import React from "react";

export default function CardDeleteDialog({
  isDialogOpen,
  onDelete,
  onChangeDialog,
}) {
  return (
    <Dialog
      open={isDialogOpen}
      onClose={onChangeDialog}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      maxWidth="xs"
    >
      <DialogTitle id="alert-dialog-title">
        {"are you sure you want to delete this card"}
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          This operation will completely delete the business card and all its
          data from the database and it will not be possible to retreive the
          card afterwards
        </DialogContentText>
      </DialogContent>

      <DialogActions>
        <Button onClick={onChangeDialog} color="error">
          cancel
        </Button>
        <Button onClick={onDelete} autoFocus color="info">
          Delete card
        </Button>
      </DialogActions>
    </Dialog>
  );
}
