import { BrowserRouter, Switch, RouterProvider } from "react-router-dom";
import PlanetsScreen from "./screens/planets";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <RouterProvider exact path="/" component={PlanetsScreen} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
