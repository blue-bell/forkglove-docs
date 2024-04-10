import ExecutionEnvironment from "@docusaurus/ExecutionEnvironment";
import type { ClientModule } from "@docusaurus/types";
import posthogJs from "posthog-js";

declare const FOXGLOVE_PLUGIN_POSTHOG_PAGEVIEWS_API_KEY: string;

if (ExecutionEnvironment.canUseDOM) {
  console.log("Initializing PostHog");
  posthogJs.init(FOXGLOVE_PLUGIN_POSTHOG_PAGEVIEWS_API_KEY, {
    api_host: "https://e.foxglove.dev",
    // localStorage+cookie is required on web to support cross-subdomain tracking
    persistence: "localStorage+cookie",
  });
  // Register "super properties" to be included with all events. We register these for the session
  // only so that they don't persist for events sent in the future if we decide to remove this.
  posthogJs.register_for_session({
    Platform: "Web",
    Source: "Docs",
  });
}

export default {
  onRouteUpdate() {
    posthogJs.capture("$pageview");
  },
} satisfies ClientModule;
