import React from "react";
import {
  Grid,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  TextField,
  Checkbox,
  FormGroup,
  FormControlLabel,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

type SortFilterProps = {
  onSortChange: (value: string) => void;
  onSearchChange: (value: string) => void;
  onLocationChange: (value: string) => void;
  onFilterChange: (value: Record<string, boolean>) => void;
};

const SortFilterCard: React.FC<SortFilterProps> = ({
  onSortChange,
  onSearchChange,
  onLocationChange,
  onFilterChange,
}) => {
  const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onFilterChange({ [event.target.name]: event.target.checked });
  };

  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography>Sort & Filter Options</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Grid container spacing={3}>
          {/* Sort */}
          <Grid item xs={12} sm={4}>
            <InputLabel id="sort-label">Sort By</InputLabel>
            <Select
              labelId="sort-label"
              onChange={(e) => onSortChange(e.target.value as string)}
            >
              <MenuItem value="recommended">Recommended</MenuItem>
              <MenuItem value="name">Name</MenuItem>
              <MenuItem value="amount">Amount</MenuItem>
              <MenuItem value="newest">Newest</MenuItem>
            </Select>
          </Grid>
          {/* Filter 1 */}
          <Grid item xs={6} sm={4}>
            <TextField
              fullWidth
              label="Search by Name"
              onChange={(e) => onSearchChange(e.target.value)}
            />
            <FormControl fullWidth>
              <InputLabel id="location-label">Location</InputLabel>
              <Select
                labelId="location-label"
                onChange={(e) => onLocationChange(e.target.value as string)}
              >
                <MenuItem value="all">All</MenuItem>
                <MenuItem value="online">Online</MenuItem>
                <MenuItem value="inBranch">In Branch</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          {/* Filter 2 */}
          <Grid item xs={6} sm={4}>
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox name="noSpend" onChange={handleFilterChange} />
                }
                label="No Spend Required"
              />
              <FormControlLabel
                control={
                  <Checkbox name="annualFee" onChange={handleFilterChange} />
                }
                label="No Annual Fee"
              />
              <FormControlLabel
                control={
                  <Checkbox onChange={handleFilterChange} name="noFtf" />
                }
                label="No Foreign Transaction Fee"
              />
            </FormGroup>
          </Grid>
        </Grid>
      </AccordionDetails>
    </Accordion>
  );
};

export default SortFilterCard;
