import { FavouriteRoutes, favouriteRoutes } from "../routeDB/mockdb";

export function serviceFactory(favouriteRoutes: FavouriteRoutes[]) {
  return {
    getAll: async () => {
      const routes = favouriteRoutes;

      return routes;
    },
    post: async (route: FavouriteRoutes) => {
      favouriteRoutes.push(route);
      return { message: "New favourite route added" };
    },
  };
}
