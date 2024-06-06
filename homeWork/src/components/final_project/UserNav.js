import * as React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Products from './features/product/Products';
import Orders from './features/order/Orders';
import MyCart from './features/user/MyCart'
import { useDispatch } from 'react-redux';
import { logOut } from './features/user/userSlice';
import { useNavigate } from 'react-router-dom';
function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    };
}


export default function UserNav() {
    const theme = useTheme();
    const [value, setValue] = React.useState(0);

    const dis = useDispatch();
    const nav = useNavigate();

    const userLogOut = () => {
        dis(logOut());
        nav('/Creditional');
    }

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ bgcolor: 'background.paper', width: '100%', height: '100vh' }}>
            <AppBar position="static">
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="secondary"
                    textColor="inherit"
                    variant="fullWidth"
                    aria-label="full width tabs example"
                >
                    <Tab label="List of product" {...a11yProps(0)} />
                    <Tab label="My orders" {...a11yProps(1)} />
                    <Tab label="My cart"{...a11yProps(2)} />
                    <Tab label="log out"{...a11yProps(3)} onClick={userLogOut}/>
                </Tabs>
            </AppBar>
            <TabPanel value={value} index={0} dir={theme.direction}>
                <Products></Products>
            </TabPanel>
            <TabPanel value={value} index={1} dir={theme.direction}>
                <Orders></Orders>
            </TabPanel>
            <TabPanel value={value} index={2} dir={theme.direction}>
                <MyCart></MyCart>
            </TabPanel>
            <TabPanel value={value} index={3} dir={theme.direction}></TabPanel>
        </Box>
    );
}