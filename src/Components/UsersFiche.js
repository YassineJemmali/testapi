import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./UserFiche.css";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

export default function UsersFiche({ userInformations }) {
  return (
    <Card className="chaqueFiche" sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography>
          <h2>{userInformations.name}</h2>
        </Typography>
        <Typography sx={{ mb: 1.5 }}>
          <p>Pseudo : {userInformations.username}</p>
          <p>
            Email :{" "}
            <a href="mailto:${userInformations.email}">
              {userInformations.email}
            </a>
          </p>
          <p>Phone : {userInformations.phone}</p>

          <h3>Company : {userInformations.company.name}</h3>
          <p>CatchPhrase : {userInformations.company.catchPhrase}</p>
          <p>Bs : {userInformations.company.bs}</p>

          <p>
            website :{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={userInformations.website}
            >
              {userInformations.website}
            </a>{" "}
          </p>
          <p>
            Adress : {userInformations.address.street},{" "}
            {userInformations.address.suite}, {userInformations.address.city},
            {userInformations.address.zipcode}.
          </p>
        </Typography>
      </CardContent>
    </Card>
  );
}
