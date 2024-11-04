import { Box, Rating } from "@mui/material";
import {
  Image,
  ReviewBox,
  ReviewSectionWrapper,
  UserReview,
} from "../../mui-components/Dashboard/ReviewsStyles";
import { useQuery } from "react-query";
import axios from "axios";
import { Oval } from "react-loader-spinner";

const Reviews = () => {
  const { isLoading, data } = useQuery("reviews", async () => {
    const res = await axios.get("../../public/reviews.json");
    console.log(res.data, "data");
    return res.data;
  });

  return (
    <ReviewSectionWrapper>
      <h4
        style={{
          fontSize: "30px",
          fontWeight: "bolder",
          color: "white",
          opacity: 0.6,
          marginLeft: "15px",
        }}
      >
        {isLoading ? " " : "Reviews:"}
      </h4>
      {isLoading ? (
        <Oval
          visible={true}
          height="80"
          width="80"
          color="#4fa94d"
          ariaLabel="oval-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
      ) : (
        <ReviewBox>
          {data.map((item: any) => (
            <UserReview key={item.id}>
              <Image
                src={
                  "https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fHww"
                }
                alt={item.name}
              />
              <Box
                sx={{
                  display: "flex",
                  alignItems: "flex-start",
                  justifyContent: "center",
                  flexDirection: "column",
                }}
              >
                <p style={{ fontSize: "14px" }}>{item.name}</p>
                <p style={{ fontSize: "10px", opacity: 0.7 }}>{item.review}</p>
                <Rating
                  sx={{ fontSize: "15px" }}
                  name="read-only"
                  value={item.rating}
                  readOnly
                />
              </Box>
            </UserReview>
          ))}
        </ReviewBox>
      )}
    </ReviewSectionWrapper>
  );
};

export default Reviews;
