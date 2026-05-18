/**
 * @amlplugins/langchain-google-genai
 *
 * Thin namespaced re-export of the native @langchain/google-genai SDK.
 *
 * Symmetry rule (.claude/rules/definitions/ageni.md): every @amlplugins/google-*
 * package shares this shape — a single root index re-exporting the wrapped
 * vendor SDK with zero domain modeling on top.
 *
 * LangChain Google Generative AI provider — ChatGoogleGenerativeAI with Gemini models and embedding integration.
 */

import * as _sdk from "@langchain/google-genai";
export * from "@langchain/google-genai";
export { _sdk as sdk };
export default _sdk;

import * as _secondary from "@langchain/core";
export * as secondary from "@langchain/core";
export { _secondary };
