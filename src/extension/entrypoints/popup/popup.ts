import "@svelte/app.css";
import { findElement } from "@common/utils/functions/find-elements.ts";
import { mountDomTranslator } from "@extension/utils/i18n/dom-translator";
import { mount } from "svelte";
import Popup from "./Popup.svelte";

mountDomTranslator();
mount(Popup, { target: findElement("#app") });
