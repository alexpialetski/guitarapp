import React from "react";
import { styled } from "@mui/material/styles";
import MuiPaper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

const Paper = styled(MuiPaper)(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: 200,
  minWidth: 200,
  boxSizing: "border-box",
}));

export type ChordPaperProps = {
  chord: string;
  className?: string;
};

export const ChordPaper: React.FC<ChordPaperProps> = ({ chord, className }) => (
  <Paper elevation={3} className={className}>
    <Typography variant="h1">{chord}</Typography>
  </Paper>
);