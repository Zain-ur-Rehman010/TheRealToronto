import * as React from "react";
import { hydrateRoot } from "react-dom/client";
import { StartClient } from "@tanstack/react-start/client";
import { getRouter } from "./router";

const router = getRouter();

// @ts-expect-error - router prop is required at runtime by TanStack Start but types may mismatch
hydrateRoot(document, <StartClient router={router} />);
