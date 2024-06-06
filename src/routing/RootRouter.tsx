import { Route } from "react-router";

export const RootRouter = (
  <>
    <Route path="/" element={<div>test</div>} />
  </>
);

// <Route
//   path="dashboard"
//   element={<Dashboard />}
//   loader={({ request }) =>
//     fetch("/api/dashboard.json", {
//       signal: request.signal,
//     })
//   }
// />
// <Route element={<AuthLayout />}>
//   <Route path="login" element={<Login />} loader={redirectIfUser} />
//   <Route path="logout" action={logoutUser} />
// </Route>
