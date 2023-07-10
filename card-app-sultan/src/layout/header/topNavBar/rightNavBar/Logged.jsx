import { Avatar, Box, IconButton, Tooltip, Typography } from "@mui/material";
import React from "react";
import useUsers from "../../../../users/hooks/useUsers";
import LogoutIcon from "@mui/icons-material/Logout";
import { useMenu } from "../menu/MenuProvider";

export default function Logged({ title }) {
  const setOpen = useMenu();

  const { handleLogout } = useUsers();
  return (
    <Box>
      <Tooltip title="Open settings">
        <IconButton
          sx={{ p: 0, display: "inline-flex", marginLeft: 2 }}
          onClick={() => setOpen(true)}
        >
          <Avatar alt="Bird" src="/assets/images/avatar.png" />
        </IconButton>
      </Tooltip>

      <Tooltip title="Log Out">
        <IconButton
          sx={{ p: 0, display: "inline-flex", marginLeft: 2 }}
          onClick={handleLogout}
        >
          <LogoutIcon />
        </IconButton>
      </Tooltip>
      <Box>
        <Typography>{title}</Typography>
      </Box>
    </Box>
  );
}
