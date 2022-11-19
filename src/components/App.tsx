import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { SharedLayout } from "./SharedLayout";

const JobBoard = lazy(() => import("../pages/JobBoard"));
const JobDetail = lazy(() => import("../pages/JobDetail"));
const NotFound = lazy(() => import("../components/notFound"));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<JobBoard />} />
        <Route path="/job/:jobBoardId" element={<JobDetail />}></Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};
