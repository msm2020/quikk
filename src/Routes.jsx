import React, { lazy, Suspense, useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useStoreState } from "easy-peasy";

import LoadingShell from "Components/Core/LoadingShell/LoadingShell";
import PrivateRoute from "Components/privateRoute";
import ScrollToTop from "./ScrollToTop";
const SignUp = lazy(()=> import("Pages/Auth/SignUp"));
const Login  = lazy(()=> import("Pages/Auth/Login"));

const  SiteMap = lazy(()=> import("Pages/SiteMap/sitemap"));

const FAQ = lazy(() => import("Pages/FAQ"));
const HomePage = lazy(() => import("Pages/HomePage"));
const Terms = lazy(() => import("Pages/Terms"));
const Privacy = lazy(() => import("Pages/Privacy"));
const JobSearch = lazy(() => import("Pages/Job/JobSearch"));
const ViewJob = lazy(() => import("Pages/Job/ViewJob"));
const Profile = lazy(() => import("Pages/Account/Profile"));
const EditProfile = lazy(() => import("Pages/Account/Profile/EditProfile"));
const RecruiterWrapper = lazy(() => import("Pages/Recruiter"));
const CreateClients = lazy(() => import("Pages/Recruiter/CreateClients"));
const Scheduler = lazy(() => import("Pages/Recruiter/Scheduler"));
const Logout = lazy(() => import("Pages/Logout"));
const NotFound = lazy(() => import("Components/NotFound"));
const AuthPage = lazy(() => import("Pages/Auth"));
const ViewProfile = lazy(() => import("Pages/Account/Profile/ViewProfile"));
const CollapseComponent = lazy(()=> import("Components/Collapse/index") )

const publicRoutesData = [
  { path: "/", Component: HomePage },
  { path: "/login", Component: Login },
  { path: "/signup/candidate", Component: SignUp },
  { path: "/signup/recruiter", Component: SignUp },
  { path: "/faq", Component: FAQ },
  { path: "/privacy", Component: Privacy },
  { path: "/terms", Component: Terms },
  {path:"/sitemap",Component: SiteMap},
  {path:"/collapse", Component: CollapseComponent},
  
];

const privateRoutesData = {
  candidate: [
    { path: "/account/profile", Component: Profile },
    { path: "/candidate/create", Component: EditProfile },
    { path: "/candidate/create/resume", Component: EditProfile },
    { path: "/candidate/create/personal-info", Component: EditProfile },
    { path: "/candidate/create/skills", Component: EditProfile },
    { path: "/candidate/create/professional-info", Component: EditProfile },
    { path: "/candidate/create/eligibility", Component: EditProfile },
    { path: "/candidate/create/other-details", Component: EditProfile },
    { path: "/account/profile/view", Component: ViewProfile },
    { path: "/search/job", Component: JobSearch },
    { path: "/job/:jobId/:jobTitle?", Component: ViewJob },
    { path: "/logout", Component: Logout },
  ],
  recruiter: [
    { path: "/recruiter", Component: RecruiterWrapper },
    { path: "/recruiter/jobs", Component: RecruiterWrapper },
    { path: "/recruiter/jobs/:jobId", Component: RecruiterWrapper },
    { path: "/recruiter/mail", Component: RecruiterWrapper },
    { path: "/recruiter/search", Component: RecruiterWrapper },
    { path: "/recruiter/approvals", Component: RecruiterWrapper },
    { path: "/recruiter/settings", Component: RecruiterWrapper },
    { path: "/recruiter/search/results", Component: RecruiterWrapper },
    { path: "/recruiter/jobs/create", Component: RecruiterWrapper },
    { path: "/recruiter/clients/create", Component: CreateClients },
    { path: "/recruiter/scheduler", Component: Scheduler },
    { path: "/logout", Component: Logout },
  ],
};

function Routes() {
  const user = useStoreState((state) => state.user);
  const isLoggedIn = user?.isLoggedIn;
  const userType = user?.userType;

  /**
   * Routes that can't be accessible by unauthorized users.
   */
  function PrivateRoutes() {
    const [privateRoutes, setPrivateRoutes] = useState([]);

    useEffect(() => {
      const allRoutes = [
        ...privateRoutesData.candidate,
        ...privateRoutesData.recruiter,
      ];

      if (isLoggedIn) {
        setPrivateRoutes(
          privateRoutesData[
            userType?.toLowerCase() === "candidate" ? "candidate" : "recruiter"
          ]
        );
        return;
      }

      setPrivateRoutes(allRoutes);
    }, []);

    return privateRoutes.map(({ path, Component }) => (
      <PrivateRoute
        key={`${path}-${Date()}`}
        path={path}
        component={Component}
        exact
      />
    ));
  }

  /**
   * Routes that doesn't require authorization to access.
   */
  const publicRoutes = publicRoutesData.map(({ path, Component }) => (
    <Route key={path} path={path} component={Component} exact />
  ));

  return (
    <Suspense fallback={<LoadingShell />}>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <ScrollToTop />
        <Switch>
          {publicRoutes}
          <PrivateRoutes />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </Suspense>
  );
}

export default Routes;
