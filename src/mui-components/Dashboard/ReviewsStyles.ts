// Desc: Styles for the ReviewSection component

import { styled } from "@mui/system";

export const ReviewSectionWrapper = styled('div')({
    width: '26vw',
    height: '100%',
    backgroundColor: '#1A1C1B',   
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    flexDirection: 'column',
})


export const ReviewBox = styled('div')({
    width: '90%',
    height: '65%',
    borderRadius: '10px',
    backgroundColor: '#282B29',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'column',
    padding: '10px',
    margin: '10px',
    overflow: 'auto',
    gap: '10px',
})

export const UserReview = styled('div')({
    width: '100%',
    height: '60px',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: '20px',
    padding: '10px',
    backgroundColor: '#454a46',
    borderRadius: '10px',
})

export const Comment = styled('div')({
    width: '100%',
    height: 'fit-content',
    padding: '10px',
    color: 'white',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: '10px',
})


export const Image = styled('img')({
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    objectFit: 'cover',
    objectPosition: 'center',
})