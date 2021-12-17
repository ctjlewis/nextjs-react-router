import { Route, Routes } from "react-router-dom";
import dynamic from "next/dynamic";

const Home = dynamic(() => import("./home"));
const Settings = dynamic(() => import("./settings"));
const Topics = dynamic(() => import("./topics"));
const About = dynamic(() => import("./about"));

/**
 * An index page which client-side renders a page based on browser location.
 */
export default function SinglePageIndex() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/topics" element={<Topics />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}