import { AccountBox, Article, Group, Home, Nightlight, Person, Settings, Storefront } from '@mui/icons-material'
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch } from '@mui/material'
import React from 'react'

const Sidebar = () => {
  return (
    <Box flex={1} p={2}  sx={{display:{xs:"none",sm:"block"}}}>
    <Box position="fixed">
      <List>
      <ListItem disablePadding>
              <ListItemButton component="a" href='#Home'>
                <ListItemIcon>
                  <Home />
                </ListItemIcon>
                <ListItemText primary="Homepage" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component="a" href='#Pages'>
                <ListItemIcon>
                  <Article />
                </ListItemIcon>
                <ListItemText primary="Pages" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component="a" href='#Group'>
                <ListItemIcon>
                  <Group />
                </ListItemIcon>
                <ListItemText primary="Groups" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component="a" href='#Marketplace'>
                <ListItemIcon>
                  <Storefront />
                </ListItemIcon>
                <ListItemText primary="Marketplace" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component="a" href='#Friends'>
                <ListItemIcon>
                  <Person />
                </ListItemIcon>
                <ListItemText primary="Friends" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component="a" href='#Settings'>
                <ListItemIcon>
                  <Settings />
                </ListItemIcon>
                <ListItemText primary="Settings" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component="a" href='#Profile'>
                <ListItemIcon>
                  <AccountBox />
                </ListItemIcon>
                <ListItemText primary="Profile" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component="a" href='#Home'>
                <ListItemIcon>
                  <Nightlight />
                </ListItemIcon>
                <Switch/>
              </ListItemButton>
            </ListItem>
      </List>
    </Box>
    </Box>
  )
}

export default Sidebar