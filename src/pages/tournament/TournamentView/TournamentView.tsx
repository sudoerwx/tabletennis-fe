import { useQuery } from "@tanstack/react-query";

export const TournamentView = () => {
  const {} = useQuery("tournament", () =>
    fetch("http://localhost:3001/tournaments/1").then((res) => res.json()),
  );
  return (
    <div>
      <h1>TournamentView</h1>
    </div>
  );
};
