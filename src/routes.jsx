import { Home, Profile, SignIn, SignUp } from "@/pages";
import AboutUs from "./pages/about-us";
import ContactUs from "./pages/contact-us";
import TrackingPage from "./pages/tracking-page";
import ProhibitedItems from "./pages/prohibited-items";
import SendParcel from "./pages/send-parcel";

export const routes = [
  {
    name: "home",
    path: "/home",
    element: <Home />,
  },
  {
    name: "send a par cel",
    path: "/send-parcel",
    element: <SendParcel />,
  },
  {
    name: "Tracking",
    path: "/tracking-page",
    element: <TrackingPage />,
  },
  {
    name: "prohibited items",
    path: "/prohibited-items",
    element: <ProhibitedItems />,
  },
  {
    name: "contact us",
    path: "/contact-us",
    element: <ContactUs />,
  },
  {
    name: "about us",
    path: "/about-us",
    element: <AboutUs />,
  },
  {
    name: "sign in",
    path: "/sign-in",
    element: <SignIn />,
  },
  {
    name: "sign up",
    path: "/sign-up",
    element: <SignUp />,
  },
  

];

export default routes;



