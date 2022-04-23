import { Avatar, AvatarGroup, Box, Divider, ImageList, ImageListItem, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material'
import React from 'react'

const Rightbar = () => {
  return (
    <Box flex={2} p={2} sx={{display:{xs:"none",sm:"block"}}}>
      <Box position="fixed" width={320}>
        <Typography variant='h6' fontWeight="100" mb={2}>ONLINE FRIENDS</Typography>
        <AvatarGroup max={7} >
          <Avatar alt="Remy Sharp" src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
          <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
          <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
          <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
          <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
          <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
          <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
          <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
          <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
        </AvatarGroup>
        <Typography variant='h6' fontWeight="100" mt={2} mb={2}>LATEST PHOTOS</Typography>
        <ImageList cols={3} rowHeight={100} gap={5} mt>
        <ImageListItem>
            <img src='https://wallup.net/wp-content/uploads/2017/03/29/478938-bench-trees-field-hills-landscape-clouds-sky-nature.jpg' alt=''/>
          </ImageListItem>
          <ImageListItem>
            <img src='https://wallup.net/wp-content/uploads/2017/03/29/478938-bench-trees-field-hills-landscape-clouds-sky-nature.jpg' alt=''/>
          </ImageListItem>
          <ImageListItem>
            <img src='https://wallup.net/wp-content/uploads/2017/03/29/478938-bench-trees-field-hills-landscape-clouds-sky-nature.jpg' alt=''/>
          </ImageListItem>
          <ImageListItem>
            <img src='https://wallup.net/wp-content/uploads/2017/03/29/478938-bench-trees-field-hills-landscape-clouds-sky-nature.jpg' alt=''/>
          </ImageListItem>
          <ImageListItem>
            <img src='https://wallup.net/wp-content/uploads/2017/03/29/478938-bench-trees-field-hills-landscape-clouds-sky-nature.jpg' alt=''/>
          </ImageListItem>
          <ImageListItem>
            <img src='https://wallup.net/wp-content/uploads/2017/03/29/478938-bench-trees-field-hills-landscape-clouds-sky-nature.jpg' alt=''/>
          </ImageListItem>
        </ImageList>
        <Typography variant='h6' fontWeight="100" mt={2} >LATEST POSTS</Typography>
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
        </ListItemAvatar>
        <ListItemText
          primary="Brunch this weekend?"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Ali Connors
              </Typography>
              {" — I'll be in your neighborhood doing errands this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Summer BBQ"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                to Scott, Alex, Jennifer
              </Typography>
              {" — Wish I could come, but I'm out of town this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Oui Oui"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Sandra Adams
              </Typography>
              {' — Do you have Paris recommendations? Have you ever…'}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
      </Box>
    </Box>
  )
}

export default Rightbar