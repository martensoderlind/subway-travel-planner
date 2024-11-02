import { FavouriteRoutes, favouriteRoutes } from "../routeDB/mockdb";

export function serviceFactory(favouriteRoutes: FavouriteRoutes[]) {
  return {
    getAll: async () => {
      const routes = favouriteRoutes.map((routes) => {
        return routes;
      });

      return routes;
    },
  };
}
