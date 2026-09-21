import { findElement } from "@common/utils/functions/find-elements.ts";
import { mountDomTranslator } from "@extension/utils/i18n/dom-translator";
import { mount } from "svelte";
import Options from "./Options.svelte";

mountDomTranslator();
mount(Options, { target: findElement("#app") });
