// Desc: Styles for the LastSection component

import {styled} from '@mui/system'

export const LastSectionWrapper = styled('div')({
    width: '22vw',
    height: '100%',
    backgroundColor: '#1e211f',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'column',
})

export const TopBox = styled('div')({
    width: '100%',
    height: 'fit-content',
    padding: '10px',
    color: 'white',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
})

export const BoxWrapper = styled('div')({
    width: '100%',
    height: 'fit-content',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '10px',
    padding: '10px',
})

export const Box = styled('div')({
    width: '45%',
    height: '120px',
    borderRadius: '10px',
    backgroundColor: '#454a46',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'column',
})

export const LastBox = styled(Box)({
    width: '90%',
    height: '28vh',
    borderRadius: '10px',
    backgroundColor: 'transparent',
    margin: '20px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
})