import React from "react";
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { Avatar, Box, Fab, Menu, MenuItem, Paper, Stack } from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import EventIcon from '@mui/icons-material/Event';
import { theme } from "../layout/Theme";
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import PetsOutlinedIcon from '@mui/icons-material/PetsOutlined';
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import EqualizerOutlinedIcon from '@mui/icons-material/EqualizerOutlined';
import Backdrop from '@mui/material/Backdrop';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import { useNavigate } from "react-router-dom";

const actions = [
  { icon: <PersonOutlineOutlinedIcon />, name: 'Atleta' },
  { icon: <PetsOutlinedIcon />, name: 'Cão' },
  { icon: <ThumbUpAltOutlinedIcon />, name: 'Provas Realizadas' },
  { icon: <EqualizerOutlinedIcon />, name: 'Dashboard' },
];

export default function BottomNavComplet() {
  const [value, setValue] = React.useState('recents');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);


  const Theme = theme

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const navegate = useNavigate();
  
  const navegar = (link: string) => {

    navegate(link)

  }



  return (
    <Box>
      <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction onClick={() => navegar('/eventos')} icon={<HomeIcon sx={{ color: theme.corBotao, fontSize: 40 }} />} />
          <BottomNavigationAction icon={<SearchIcon sx={{ color: theme.corBotao, fontSize: 40 }} />} />

          <Box sx={{ height: 70, transform: 'translateZ(0px)', flexGrow: 0.06 }}>
            <Backdrop open={open} />
            <SpeedDial
              ariaLabel="SpeedDial tooltip example"
              sx={{ position: 'absolute', bottom: 25, right: 25, color: theme.corBotao }}
              icon={<SpeedDialIcon />}
              onClose={handleClose}
              onOpen={handleOpen}
              open={open}
            >
              {actions.map((action) => (
                <SpeedDialAction
                  sx={{ color: theme.corBotao }}
                  key={action.name}
                  icon={action.icon}
                  tooltipTitle={action.name}
                  tooltipOpen
                  onClick={handleClose}
                />
              ))}
            </SpeedDial>
          </Box>

          <BottomNavigationAction icon={<EventIcon sx={{ color: theme.corBotao, fontSize: 40 }} />} />
          <Stack direction="row" spacing={2}>
            <Avatar
              sx={{ bgcolor: theme.corBotao, top: 8 }}
              alt="Remy Sharp"
              src="/broken-image.jpg"
            >
              B
            </Avatar>
          </Stack>
        </BottomNavigation>
      </Paper>
    </Box>
  )
}

