import { Dashboard, Equalizer } from "@mui/icons-material";
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import SettingsIcon from '@mui/icons-material/Settings';
import HelpIcon from '@mui/icons-material/Help';

export const mainMenuData = [
    {
        title: 'Dashboard',
        icon: <Dashboard/>,
        path: '/'
    },
    {
        title: 'Analytics',
        icon: <Equalizer/>,
        path: '/analytics'
    },
    {
        title: 'Customers',
        icon: <SupervisorAccountIcon/>,
        path: '/customers'
    },
    {
        title: 'Finance',
        icon: <AccountBalanceIcon/>,
        path: '/finance'
    },
]

export const otherMenuData = [
    {
        title: 'Settings',
        icon: <SettingsIcon/>,
        path: '/settings'
    },
    {
        title: 'Help Center',
        icon: <HelpIcon/>,
        path: '/help'
    }
]