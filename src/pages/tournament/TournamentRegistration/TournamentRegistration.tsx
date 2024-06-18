import {
  Avatar,
  Box,
  Button,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { NewPlayerFormContainer } from "./TournamentRegistration.styles";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { InferType, number, object, string } from "yup";
import { PersonOutlined, DeleteOutlined } from "@mui/icons-material";

const validation = object({
  name: string().required(),
  rating: number().default(0),
});
type FormTypes = InferType<typeof validation>;

export const TournamentRegistration = () => {
  const [participants, setParticipants] = useState<FormTypes[]>([]);

  const { handleSubmit, register, formState, reset, setError } =
    useForm<FormTypes>({
      defaultValues: { name: "", rating: 0 },
      resolver: yupResolver(validation),
    });

  const onSubmit: SubmitHandler<FormTypes> = (data) => {
    if (participants.some((participant) => participant.name === data.name)) {
      setError("name", { message: "This name is already in the list" });
      return;
    }
    setParticipants([...participants, data]);
    reset();
  };

  const onDelete = (index: number) => {
    setParticipants((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <Box onSubmit={handleSubmit(onSubmit)}>
      <Typography variant="h6">Players Registration List</Typography>
      <List dense>
        {participants.map((participant, index) => (
          <ListItem
            sx={{ width: "400px" }}
            secondaryAction={
              <IconButton
                edge="end"
                aria-label="delete"
                onClick={() => onDelete(index)}
              >
                <DeleteOutlined color="error" />
              </IconButton>
            }
          >
            <ListItemIcon>
              <PersonOutlined />
            </ListItemIcon>
            <ListItemText
              primary={participant.name}
              secondary={participant.rating + " rating"}
            />
          </ListItem>
        ))}
      </List>
      <NewPlayerFormContainer>
        <TextField
          {...register("name")}
          error={Boolean(formState.errors.name)}
          helperText={formState.errors.name?.message}
          size="small"
          variant="standard"
          label="Name"
        />
        <TextField
          {...register("rating")}
          type="number"
          size="small"
          variant="standard"
          label="Rating"
        />
        <Button
          type="submit"
          variant="contained"
          size="small"
          disabled={formState.isSubmitted && !formState.isValid}
        >
          Add manualy
        </Button>
      </NewPlayerFormContainer>
    </Box>
  );
};
