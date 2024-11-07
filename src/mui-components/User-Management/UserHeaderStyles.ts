// Desc: Styles for the UserHeader component

import { styled } from "@mui/system";

export const UserHeaderStyles = styled('div')({
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#454A45',
    width: '70%',
    height: '7vh',
    borderRadius: '10px 10px 0px 0px',
    position:'fixed'
})

export const UserDataStyles = styled('div')({
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '110%',
    height: '7vh',
    borderRadius: '10px 10px 0px 0px',
})