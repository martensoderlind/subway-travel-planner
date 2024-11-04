import { FavouriteRoutes, favouriteRoutes } from "../../routeDB/mockdb";

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
    delete: async (id: string) => {
      const routeIndexToRemove = favouriteRoutes.findIndex(
        (route) => route.id === id
      );
      if (routeIndexToRemove === -1) {
        return { message: "No route with taht id exist" };
      }
      favouriteRoutes.splice(routeIndexToRemove, 1);
      return { message: "Route removed" };
    },
  };
}
