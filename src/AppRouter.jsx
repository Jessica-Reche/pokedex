import React from "react";

import { Navigate, Route, Routes } from "react-router-dom";
import { Navigation } from "./components/Navigation";
import { Homepage, PokemonPage } from "./pages";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Homepage />} />
        <Route path="pokemon/:id" element={<PokemonPage />} />
      </Route>

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default AppRouter;
