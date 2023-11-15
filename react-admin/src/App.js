import { ColorModeContext, useMode } from './theme';
import { CssBaseline, ThemeProvider } from '@mui/material';
import TopBar from './scenes/global/TopBar';
import Dashboard from './scenes/dashboard';
import SideBar from './scenes/global/SideBar';
import { Routes, Route } from 'react-router-dom';
/* import Team from './scenes/global/team';
import Invoices from './scenes/global/invoice';
import Contacts from './scenes/global/contacts';
import Bar from './scenes/global/bar';
import Form from './scenes/global/form';
import Line from './scenes/global/line';
import Pie from './scenes/global/pie';
import FAQ from './scenes/global/faq';
import Geography from './scenes/global/geography';
import Calendar from './scenes/calendar'; */

function App() {
	const [theme, colorMode] = useMode();
	return (
		<ColorModeContext.Provider value={colorMode}>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<div className='app'>
					<SideBar />
					<main className='content'>
						<TopBar />
						<Routes>
							<Route path='/' element={<Dashboard />}></Route>
							{/* <Route path='/team' element={<Team />}></Route>
							<Route path='/contacts' element={<Contacts />}></Route>
							<Route path='/invoices' element={<Invoices />}></Route>
							<Route path='/form' element={<Form />}></Route>
							<Route path='/bar' element={<Bar />}></Route>
							<Route path='/pie' element={<Pie />}></Route>
							<Route path='/line' element={<Line />}></Route>
							<Route path='/faq' element={<FAQ />}></Route>
							<Route path='/geography' element={<Geography />}></Route>
							<Route path='/calendar' element={<Calendar />}></Route> */}
						</Routes>
					</main>
				</div>
			</ThemeProvider>
		</ColorModeContext.Provider>
	);
}

export default App;
