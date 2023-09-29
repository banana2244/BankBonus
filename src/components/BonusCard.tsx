import {
  Card,
  CardContent,
  Grid,
  Typography,
  Button,
  CardMedia,
} from "@mui/material";
import React from "react";

type BonusCardProps = {
  accountName: string;
  accountType: string;
  bonus: string;
  howToGet: string;
  fee: string;
  imageUrl: string;
  offerLink: string;
};

const BonusCard: React.FC<BonusCardProps> = ({
  accountName,
  accountType,
  bonus,
  howToGet,
  fee,
  imageUrl,
  offerLink,
}) => (
  <Card className="my-4">
    <CardContent>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <Typography variant="h6">{accountName}</Typography>
          <Typography variant="subtitle1">{accountType}</Typography>
        </Grid>
        <Grid item xs={4}>
          <CardMedia
            component="img"
            height="60"
            image={imageUrl}
            alt={accountName}
          />
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={1}>
            <Grid item xs={4}>
              <Typography variant="caption">Bonus</Typography>
              <Typography>{bonus}</Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="caption">How to Get</Typography>
              <Typography>{howToGet}</Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="caption">Fee</Typography>
              <Typography>{fee}</Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Button
            variant="contained"
            color="primary"
            href={offerLink}
            target="_blank"
          >
            View Offer
          </Button>
        </Grid>
      </Grid>
    </CardContent>
  </Card>
);

export default BonusCard;
