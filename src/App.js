import { Button } from '@mui/material';
import { Add, Settings } from '@mui/icons-material';

function App () {
	return (
		<div>
			<Button endIcon={<Add />} variant="text" color="success">
				Add New
			</Button>
			<Button startIcon={<Settings />} variant="contained" color="secondary" size="small">
				Settings
			</Button>
			<Button variant="outlined" disabled>
				Outlined
			</Button>
			<Button
				variant="contained"
				sx={{
					color           : '#888',
					backgroundColor : 'skyblue',
					'&:hover'       : {
						backgroundColor : '#888'
					}
				}}
			>
				MY Button
			</Button>
		</div>
	);
}

export default App;
