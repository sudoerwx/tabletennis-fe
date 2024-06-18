import { Route } from "react-router";
import { PagesWithPadding } from "../layout/PagesWithPadding";
import { TournamentForm } from "../pages/tournament/TournamentForm/TournamentForm";
import { TournamentRegistration } from "../pages/tournament/TournamentRegistration/TournamentRegistration";
import { TournamentsList } from "../pages/tournament/TournamentsList/TournamentsList";
import { TournamentView } from "../pages/tournament/TournamentView/TournamentView";

export const RootRouter = (
  <>
    <Route element={<PagesWithPadding />}>
      <Route path="/tournaments" element={<TournamentsList />} />
      <Route path="/tournaments/new" element={<TournamentForm />} />
      <Route path="/tournaments/:id" element={<TournamentView />} />
      <Route path="/tournaments/:id/edit" element={<TournamentForm />} />
      <Route
        path="/tournaments/:id/registration"
        element={<TournamentRegistration />}
      />
    </Route>

    <Route path="/" element={<div>Home Page</div>} />
  </>
);
