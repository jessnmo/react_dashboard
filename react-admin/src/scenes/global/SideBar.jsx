import { useState } from 'react';
import { ProSidebar, Menu, MenuItem } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import { Box, IconButton, Typography, useTheme } from '@mui/material';
import { Link } from 'react-router-dom';
import { colorToken } from '../../theme';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PeopleOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import ContactsOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import ReceiptOutlinedIcon from '@mui/icons-material/ReceiptOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import HelpOutlinedIcon from '@mui/icons-material/HelpOutlined';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import PieChartOutlinedIcon from '@mui/icons-material/PieChartOutlined';
import TimelineOutlinedIcon from '@mui/icons-material/TimelineOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import MapOutlinedIcon from '@mui/icons-material/MapOutlined';

const SideBar = () => {
	const theme = useTheme();
	const colors = colorToken(theme.palette.mode);
	const [isCollapsed, setIsCollapsed] = useState(false);
	const [selected, setSelected] = useState('Dashboard');

	return (
		<Box
			sx={{
				'& .pro-sidebar-inner': {
					background: `${colors.primary[400]} !important`,
				},
				'& .pro-icon-wrapper': {
					background: 'transparent !important',
				},
				'& .pro-inner-item': {
					padding: '5px 35px 5px 20px !important',
				},
				'& .pro-inner-item :hover': {
					color: '#868dfd !important',
				},
				'& .pro-menu-item.active': {
					color: '#6870fa  !important',
				},
			}}
		>
			{!isCollapsed && (
				<Box mb='25px'>
					<Box display='flex' justifyContent='center' alignItems='center'>
						<img
							alt='profile-pic'
							width='100px'
							height='100px'
							src={`../../assets/paddle.jpeg`}
							style={{ cursor: 'pointer', borderRadius: '50%' }}
						/>
					</Box>
					<Box textAlign='center'>
						<Typography
							variant='h2'
							color={colors.gray[100]}
							fontWeight='bold'
							sx={{ m: '10px 0 0 0' }}
						>
							Name
						</Typography>
						<Typography variant='h5' color={colors.greenAccent[500]}>
							Admin
						</Typography>
					</Box>
				</Box>
			)}
		</Box>
	);
};

export default SideBar;
