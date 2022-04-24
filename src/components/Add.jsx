import { Avatar, Button, ButtonGroup, Fab, Modal, Stack, styled, TextField, Tooltip, Typography } from '@mui/material'
import React, { useState } from 'react'
import {Add as AddIcon, DateRange, EmojiEmotions, Image, PersonAdd, VideoCameraBack} from '@mui/icons-material'
import { Box } from '@mui/system'

const StyledModal=styled(Modal)({
    display: 'flex',
    alignItems:'center',
    justifyContent:'center'
})

const UserBox=styled(Box)({
    display: 'flex',
    alignItems:'center',
    marginBottom:"20px"
})

const Add = () => {

const [open, setOpen] = useState(false)

  return (
    <>
        <Tooltip onClick={e=>setOpen(true)} title="Add" sx={{position:"fixed", bottom:20, left:{xs:"calc(50% - 25px)",sm:20}}}>
            <Fab color="primary" aria-label="add">
                <AddIcon />
            </Fab>
        </Tooltip>
        <StyledModal
            open={open}
            onClose={e=>setOpen(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            >
            <Box width={400} height={280} bgcolor={'background.default'} color={'text.primary'} borderRadius={5} p={2}>
                <Typography variant='h6' color="gray" textAlign="center">Create Post</Typography>
                <UserBox>
                <Avatar
                    sx={{ width: 30, 
                    height: 30}}
                    src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                />
                <Typography marginLeft={1} variant='span' fontWeight={500}>John Doe</Typography>
                </UserBox>
                <TextField
                sx={{width:"100%"}}
                id="standard-multiline-static"
                multiline
                rows={3}
                placeholder="What's on your mind ?" 
                variant="standard"
                />
            <Stack direction="row" gap={1} mt={2} mb={2}>
                <EmojiEmotions color='primary'/>
                <Image color='secondary'/>
                <VideoCameraBack color="success"/>
                <PersonAdd color='error'/>
            </Stack>
            <ButtonGroup fullWidth variant="contained" aria-label="outlined primary button group">
            <Button>Post</Button>
            <Button sx={{width:"100px"}}>
                <DateRange/>
            </Button>
            </ButtonGroup>
            </Box>
        </StyledModal>
    </>
  )
}

export default Add