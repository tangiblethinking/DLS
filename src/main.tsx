import { StrictMode, useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import { DlsApp } from "@/dls/app";
import "./styles.css";

function readTopic() {
  const value = new URLSearchParams(window.location.search).get("topic");
  return value && value.length > 0 ? value : undefined;
}

function Root() {
  const [topic, setTopic] = useState<string | undefined>(readTopic);

  useEffect(() => {
    function onPop() {
      setTopic(readTopic());
    }
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);

  return (
    <DlsApp
      topic={topic}
      onTopic={(slug) => {
        const url = new URL(window.location.href);
        if (slug) url.searchParams.set("topic", slug);
        else url.searchParams.delete("topic");
        window.history.pushState({}, "", url);
        setTopic(slug);
      }}
    />
  );
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Root />
  </StrictMode>,
);
