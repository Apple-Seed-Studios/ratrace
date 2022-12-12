import Timer from "../Timer";
import TaskForm from "../TaskForm";
import TaskDisplay from "../TaskDisplay";
import LandingPage from "../LandingPage";
import { If, Then, Else } from "react-if";
import "./main.scss";

import { useState, useEffect } from "react";

import { useAuth } from "../../hooks/useAuth";

import { setupAuth } from "../../lib/Collection";

function Main(props) {
  const [authSetupStatus, setAuthSetupStatus] = useState("loading");
  const { isAuthenticated, getAuthClaims } = useAuth();
  useEffect(() => {
    const setup = async () => {
      const token = await getAuthClaims();
      setupAuth(token);
      setAuthSetupStatus("setup-complete");
    };
    if (isAuthenticated) {
      setup();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated]);
  return (
    <main className="main">
      <If condition={isAuthenticated}>
        <Then>
          <If condition={authSetupStatus === "setup-complete"}>
            <Then>
              <TaskForm />
              <div className="taskpage">
                <Timer />
                <TaskDisplay />
              </div>
            </Then>
            <Else>Loading...</Else>
          </If>
        </Then>
        <Else>
          <LandingPage />
        </Else>
      </If>
    </main>
  );
}

export default Main;
