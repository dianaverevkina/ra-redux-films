import { createBrowserRouter } from "react-router-dom";
import { Root } from "../components/Root/Root";
import { MainPage } from "../components/mainPage/mainPage";
import { FilmView } from "../components/FilmView/FilmView";
import { Favorite } from "../components/Favorite/Favorite";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        index: true,
        element: <MainPage />
      },
      {
        path: 'films/:filmId',
        element: <FilmView />
      },
      {
        path: 'favorites',
        element: <Favorite />
      }
    ]
  }
])