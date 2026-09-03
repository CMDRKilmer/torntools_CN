import { mount } from "svelte";
import { mountDomTranslator } from "@extension/utils/i18n/dom-translator";
import Options from "./Options.svelte";

mountDomTranslator();
mount(Options, { target: document.getElementById("app")! });
