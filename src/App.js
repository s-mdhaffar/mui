import Sidebar from './components/Sidebar';
import Feed from './components/Feed';
import Rightbar from './components/Rightbar';
import { createTheme, Stack, ThemeProvider } from '@mui/material';
import { Box } from '@mui/system';
import Navbar from './components/Navbar';
import Add from './components/Add';
import { useState } from 'react';

function App () {
	const [ mode, setMode ] = useState('light');

	const darktheme = createTheme({
		palette : {
			mode : mode
		}
	});

	return (
		<ThemeProvider theme={darktheme}>
			<Box bgcolor={'background.default'} color={'text.primary'}>
				<Navbar />
				<Stack direction="row" spacing={2} justifyContent="space-between">
					<Sidebar mode={mode} setMode={setMode} />
					<Feed />
					<Rightbar />
				</Stack>
				<Add />
			</Box>
		</ThemeProvider>
	);
}

export default App;
