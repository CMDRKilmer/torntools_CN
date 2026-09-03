import { mountDomTranslator } from "@extension/utils/i18n/dom-translator";
import { mount } from "svelte";
import Options from "./Options.svelte";

mountDomTranslator();
mount(Options, { target: document.getElementById("app")! });
