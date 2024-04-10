import { Plugin, LoadContext, OptionValidationContext, PluginOptions } from "@docusaurus/types";
import { Joi } from "@docusaurus/utils-validation";
import webpack from "webpack";

type Options = {
  apiKey: string;
};
const optionsSchema = Joi.object<Options, /*isStrict=*/ true>({
  apiKey: Joi.string().required(),
});

/** Tracks page views with PostHog. */
export default async function (_context: LoadContext, options: unknown): Promise<Plugin> {
  return {
    name: "foxglove-posthog-pageviews",
    configureWebpack() {
      return {
        plugins: [
          new webpack.DefinePlugin({
            FOXGLOVE_PLUGIN_POSTHOG_PAGEVIEWS_API_KEY: JSON.stringify((options as Options).apiKey),
          }),
        ],
      };
    },
    // https://docusaurus.io/docs/advanced/client#client-modules
    getClientModules() {
      return [require.resolve("./module.js")];
    },
  };
}

// https://docusaurus.io/docs/api/plugin-methods/static-methods#validateOptions
export function validateOptions(
  ctx: OptionValidationContext<Options | undefined, PluginOptions>,
): PluginOptions {
  return ctx.validate(optionsSchema, ctx.options);
}
