import { Box, Container, Paper, Typography } from "@mui/material";
import {
  FavoriteBorder,
  ChatBubbleOutline,
  Send,
  BookmarkAdd,
  AccountCircle,
} from "@mui/icons-material";
import React from "react";

const Card = () => {
  return (
    <div>
      <Container maxWidth={"sm"}>
        <Box>
          <Paper
            elevation={3}
            square
            sx={{
              marginTop: "20px",
              padding: "10px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "start",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <AccountCircle
                fontSize="large"
                sx={{
                  marginRight: "10px",
                }}
              />
              <Typography variant="body1" component="p">
                Asfand Ali
              </Typography>
            </Box>
            <Box>
              <img
                src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600"
                width={"100%"}
                height={"100%"}
              />
            </Box>
            <Box
              sx={{
                width: "100%",
                display: "flex",
              }}
            >
              <Box sx={{ flex: "1" }}>
                <FavoriteBorder
                  sx={{
                    padding: "5px",
                  }}
                />
                <ChatBubbleOutline
                  sx={{
                    padding: "5px",
                  }}
                />
                <Send
                  sx={{
                    padding: "5px",
                  }}
                />
              </Box>
              <Box>
                <BookmarkAdd
                  sx={{
                    padding: "5px",
                  }}
                />
              </Box>
            </Box>
          </Paper>
        </Box>
      </Container>
    </div>
  );
};

export default Card;
