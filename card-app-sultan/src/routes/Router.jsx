import React from "react";
import { Route, Routes } from "react-router-dom";
import CardsPage from "../cards/pages/CardsPage";
import AboutPage from "../pages/AboutPage";
import ROUTES from "./routesModel";
import ErrorPage from "../pages/ErrorPage";
import SignUp from "../users/pages/SignUp";
import Login from "../users/pages/Login";
import Profile from "../users/pages/Profile";
import EditAccount from "../users/pages/EditAccount";
import MyCards from "../cards/pages/MyCards";
import FavCards from "../cards/pages/FavCards";
import CardDetailsPage from "../cards/pages/CardDetailsPage";
import Sandbox from "../sandbox/Sandbox";
import FirstComponent from "../sandbox/components/FirstComponent";
import SecondComponent from "../sandbox/components/SecondComponent";
import LifeCycle from "../sandbox/components/LifeCycle";
import Counter from "../sandbox/components/Counter";
import Country from "../sandbox/components/Country";
import Countries from "../sandbox/components/Countries";
import Memoization from "../sandbox/components/Memoization";
import MyCounter from "../sandbox/components/MyCounter";
import GrandComponent from "../sandbox/context/GrandComponent";
import MyForm from "../sandbox/forms/MyForm";
import MyformTargil from "../sandbox/components/MyformTargil";
import MyFormWithCustomComponents from "../sandbox/forms/MyFormWithCustomComponents";
import TestForm from "../sandbox/forms/TestForm";
import CreateCardPage from "../cards/pages/CreateCardPage";
import EditCardPage from "../cards/pages/EditCardPage";

export default function Router() {
  return (
    <>
      <Routes>
        <Route path={ROUTES.ROOT} element={<CardsPage />} />
        <Route path={ROUTES.CARDS} element={<CardsPage />} />
        <Route path={ROUTES.CREATE_CARD} element={<CreateCardPage />} />
        <Route path={`${ROUTES.EDIT_CARD}/:id`} element={<EditCardPage />} />
        <Route path={ROUTES.ABOUT} element={<AboutPage />} />
        <Route path={ROUTES.SIGNUP} element={<SignUp />} />
        <Route path={ROUTES.LOGIN} element={<Login />} />
        <Route path={ROUTES.USER_PROFILE} element={<Profile />} />
        <Route path={ROUTES.EDIT_USER} element={<EditAccount />} />
        <Route path={ROUTES.MY_CARDS} element={<MyCards />} />
        <Route path={ROUTES.FAV_CARDS} element={<FavCards />} />
        <Route path={`${ROUTES.CARD_INFO}/:id`} element={<CardDetailsPage />} />
        <Route path={ROUTES.SANDBOX} element={<Sandbox />}>
          <Route path="first" element={<FirstComponent />} />
          <Route path="second" element={<SecondComponent />} />
          <Route path="Life" element={<LifeCycle />} />
          <Route path="Counter" element={<Counter />} />
          <Route path="Country" element={<Country />} />
          <Route path="Countries" element={<Countries />} />
          <Route path="Memoization" element={<Memoization />} />
          <Route path="Mycounter" element={<MyCounter />} />
          <Route path="MyformTargil" element={<MyformTargil />} />
          <Route path="Grand" element={<GrandComponent />} />
          <Route path="MyForm" element={<MyForm />} />
          <Route path="MyFormCustom" element={<MyFormWithCustomComponents />} />
          <Route path="TestForm" element={<TestForm />} />
        </Route>

        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}
