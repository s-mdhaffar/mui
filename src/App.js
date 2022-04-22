import Sidebar from './components/Sidebar';
import Feed from './components/Feed';
import Rightbar from './components/Rightbar';
import { Stack } from '@mui/material';
import { Box } from '@mui/system';

function App () {
	return (
		<Box>
			<Stack direction="row" spacing={2} justifyContent="space-between">
				<Sidebar />
				<Feed />
				<Rightbar />
			</Stack>
		</Box>
	);
}

export default App;
