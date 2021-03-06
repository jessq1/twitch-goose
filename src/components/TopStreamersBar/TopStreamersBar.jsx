import React from 'react'
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { Drawer, Box, CssBaseline, Typography, IconButton } from '@material-ui/core';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import TopStreamsIndex from '../TopStreamersBar/TopStreamsIndex'


const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
      },
      hide: {
        display: 'none',
      },
      drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
      },
      drawerOpen: {
        width: drawerWidth,
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
      drawerClose: {
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: theme.spacing(7) + 1,
        [theme.breakpoints.up('sm')]: {
          width: theme.spacing(13) + 1,
        },
      },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    arrowIcon:{
        paddingTop:'70px',
        display: 'flex',
        justifyContent: 'flex-end',
      },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
    lists:{
      display:'flex',
    },
    avatar: {
      margin:'10px',
      width: '40px',
    },
    spacer: {
      margin:'10px',
      width: '40px',
    },
    listText: {
      margin:'10px',
      padding: '10px',
    },
  }));

const TopStreamersBar = () =>{

    const classes = useStyles();
    const [open, setOpen] = React.useState(true);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <>
        <div className={classes.root}>
      <CssBaseline />
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
          <div className={classes.arrowIcon}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          ><ChevronRightIcon />
          </IconButton>
          <IconButton color="inherit" aria-label="close drawer" onClick={handleDrawerClose} className={clsx(classes.menuButton, {
              [classes.hide]: !open,
            })}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Box className={classes.drawerContainer} m={2}>
            <Typography variant={'h6'} className={clsx({
              [classes.hide]: !open,
            })}>Top Streamers</Typography>
          <TopStreamsIndex/>
        </Box>
        </Drawer> 
        </div>
        </>
    )
}

export default TopStreamersBar