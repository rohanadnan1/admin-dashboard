import {styled} from '@mui/system'

export const Box = styled('div')({
    width: '45%',
    height: '120px',
    borderRadius: '10px',
    backgroundColor: '#282B29',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'column',
})

export const DashHeroWrapper = styled('div')({
    width: '50vw',
    height: '100%',
    backgroundColor: '#1A1C1B',   
})

export const ChartBox = styled(Box)({
    width: '90%',
    height: '28vh',
    borderRadius: '10px',
    backgroundColor: 'transparent',
    margin: '20px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    bottom: '50px',
    position: 'relative',
})