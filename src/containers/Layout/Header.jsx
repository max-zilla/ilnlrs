// @flow
import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import {
    AppBar,
    Avatar,
    Button,
    Menu,
    MenuItem,
    Tab,
    Tabs,
    Toolbar,
    Typography,
    makeStyles
} from '@material-ui/core';

import LogoApp from '../../images/logo_app.png';

export const HEADERS_HEIGHT = 61;

const useStyles = makeStyles((theme) =>{
    return ({
        appbar: {
            zIndex: theme.zIndex.drawer + 1
        },
        mainHeader: {
            'background': theme.palette.primary.main,
            'color': theme.palette.primary.contrastText,
            'textDecoration': 'none',
            'height': HEADERS_HEIGHT,
            'minHeight': HEADERS_HEIGHT,
            '& a': {
                margin: 5
            }
        },
        headerText: {
            color: theme.palette.primary.contrastText,
            textDecoration: 'none'
        },
        contactText:{
            fontSize: '1rem',
            color: '#BEC4C9',
            textDecoration: 'none'
        },
        headerButton:{
            fontSize: 16,
            flexGrow: 1
        },
        tabsRoot: {
            marginLeft: '6em',
            fontSize: 16,
            flexGrow: 1
        },
        menuItem: {
            '&:hover': {
                backgroundColor: theme.palette.primary.main,
                color: 'white'
            }
        },
        tabsIndicator: {
            backgroundColor: '#fff'
        },
        tabRoot: {
            fontSize: '1rem'
        },
        dropdown: {
            zIndex: 1100
        },
        dropdownIcon: {
            display: 'flex'
        }
    });
});

type Props = {
    location: {
        pathname: string
    }
}

const Header = ({ location }: Props) => {
    const classes = useStyles();

    const [dashboardAnchorEl, setDashboardAnchorEl] = React.useState(null);
    const dashboardOpen = Boolean(dashboardAnchorEl);
    const dashboardHandleClick = (event) => {
        setDashboardAnchorEl(event.currentTarget);
    };
    const dashboardHandleClose = () => {
        setDashboardAnchorEl(null);
    };

    const [geoAppAnchorEl, setGeoAppAnchorEl] = React.useState(null);
    const geoAppOpen = Boolean(geoAppAnchorEl);
    const geoAppHandleClick = (event) => {
        setGeoAppAnchorEl(event.currentTarget);
    };
    const geoAppHandleClose = () => {
        setGeoAppAnchorEl(null);
    };

    return (
        <AppBar position="fixed" className={classes.appbar}>
            <Toolbar className={classes.mainHeader}>
                <Avatar
                    component={Link}
                    to="/"
                    src={LogoApp}
                />
                <Typography
                    component={Link}
                    to="/"
                    className={classes.headerText}
                    variant="h6"
                    noWrap
                >
                    Great Lakes to Gulf
                </Typography>
                <Typography
                    component='a'
                    to="/"
                    href='mailto:gltg-support@lists.illinois.edu'
                    className={classes.contactText}
                    noWrap
                >
                    CONTACT
                </Typography>
            </Toolbar>
        </AppBar>
    );
};

export default withRouter(Header);
